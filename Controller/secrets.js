import User from "../Models/secrets.js";


// Creating Users
export const createUser = async (req, res) => {
    const newUser = User({
        email : req.body.username,
        password : req.body.password
    })

    try {
        newUser.save((err)=>{
            if (!err) {
                console.log("Added Successfully ");
            }
            else{
                console.log(err.message);
            }
        });
        res.status(200).render("secrets");
    } catch (err) {
        res.status(404).send({message: err.message});
    }
}

export const findUser = async (req, res)=>{
    const userName = req.body.username;
    const password = req.body.password;

    try {
        User.findOne({email: userName}, (err, foundUser)=>{
            if (!err) {
                if (foundUser.password === password) {
                    res.status(200).render("secrets");
                }
                else{
                    res.status(404).send("Wrong Credentials")
                }
            }
            else{
                console.log(err.message)
            }
        });
    } catch (error) {
        res.status(404).send({message: err.message})
    }
}