import express, { Router } from "express";
import userAuth from "../middleware/userAuth.js";
import userController from "../controllers/userController.js";

const userRoute = Router()

userRoute.post("/register", userController.loginUser)
userRoute.post("/login", userController.loginUser)
userRoute.get("/userValidity",userAuth, userController.singleUser)


export default userRoute