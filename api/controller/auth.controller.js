import User from "../models/user.model.js";
import brycptjs from "bcryptjs";
import { errorhandler } from "../utils/error.js";

export const signup = async ( req , res , next) => {
 
    const { username , email  , password } = req.body;
    const hashedPassword = await brycptjs.hash(password , 10);
    const newUser = new User ({ username , email , password : hashedPassword});
    

    try {
        await newUser.save();
    res.status(200).json({ message : "user created successfully" });

    } catch (error) {
        // res.status(500).json(error.message);
        // next(errorhandler(550 , 'Error From The Function '));
        next(error);
}

};