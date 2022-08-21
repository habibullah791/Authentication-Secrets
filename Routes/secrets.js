import express from "express";
import{
    createUser,
    findUser
} from '../Controller/secrets.js';

const router = express.Router();



// GET ROUTES
router.get("/", (req, res)=>{
    res.render("home");
})
router.get("/login", (req, res)=>{
    res.render("login");
})
router.get("/register", (req, res)=>{
    res.render("register");
})


// POST ROUTES
router.post("/register", createUser);

router.post("/login", findUser);



export default router;