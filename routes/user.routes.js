const express = require("express")
const { UserModel } = require("../model/user.model")
const userRouter = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

userRouter.get("/", async (req, res) => {
    const users = await UserModel.find();
    console.log(users)
    res.status(200).send({ "users": users })
})

//Registration
userRouter.post("/register", async (req, res) => {
    const { name, email, gender, password, age, city, is_married } = req.body
    console.log(req.body)
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            const user = new UserModel({ name, email, gender, password: hash, age, city, is_married })
            await user.save()
            // console.log(user)
            res.status(200).send({ "msg": "Registration has been done" })
        });
    }
    catch (err) {
        res.status(400).send({ "msg": "Please Login!" })
    }
})

// Login 
userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await UserModel.findOne({ email })
        console.log(user)
        if (user) {
            bcrypt.compare(pass, user.password, (err, result) => {
                if (result) {
                    res.status(200).send({ "msg": "Login Successfull", "token": jwt.sign({ "course": 'fullstack' }, 'masai') })
                } else {
                    res.status(400).send({ "msg": "Invalid Credentials" })
                }
            });
        }
    }
    catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})
module.exports = {
    userRouter
}