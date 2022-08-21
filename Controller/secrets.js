import User from "../Models/secrets.js";
import bcrypt from "bcrypt";

// Salt Rounds
const saltRounds = 10;

// Creating Users and adding  his/her credentials to DB
export const createUser = async (req, res) => {

    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if (!err) {
            const newUser = User({
                email: req.body.username,
                password: hash
            });
            try {
                newUser.save((err) => {
                    if (!err) {
                        console.log("Added Successfully ");
                    }
                    else {
                        console.log(err.message);
                    }
                });
                res.status(200).render("secrets");
            } catch (err) {
                res.status(404).send({ message: err.message });
            }
        }
        else {
            console.log(err.message);
        }
    });

}


// Finding a specific User from DB 
export const findUser = async (req, res) => {

    const userName = req.body.username;
    const password = req.body.password;

    try {
        User.findOne({ email: userName }, (err, foundUser) => {
            if (!err) {
                bcrypt.compare(password, foundUser.password, (err, result) => {
                    if (result == true) {
                        res.status(200).render("secrets");
                    }
                    else {
                        res.status(404).send("<h1>404</h1>");
                    }
                });
            }
            else {
                console.log(err.message)
            }
        });
    } catch (error) {
        res.status(404).send({ message: err.message })
    }
}