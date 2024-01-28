import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (res, req) => {
  try {
    const { name, email, password, phone, address } = req.body;

    //validation
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ error: "emaail is Required" });
    }
    if (!password) {
      return res.send({ error: "password is Required" });
    }
    if (!phone) {
      return res.send({ error: "phone is Required" });
    }
    if (!address) {
      return res.send({ error: "address is Required" });
    }

    //register User

    const hashedpwd = await hashPassword(password);

    //save
    const user = await new userModel({
      name,
      email,
      phone,
      role,
      address,
      password: hashedpwd,
    }).save();

    res.status(201).send({
      success: true,
      message: "user has been registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in registration",
      error,
    });
  }
};

//LOGIN => POST

export const loginController = async () => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.status(200).send({
        success: true,
        message: "Cannot Logged in , email or pasword invalid",
        error,
      });
    }

    //checking user
    const existinguser = await userModel.findOne({ email });
    //existing user
    if (existinguser) {
      return res.status(200).send({
        success: true,
        message: "Already registered, Please Login",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
        success: true,
        message : 'login successfully',
        user: {
            name : user.name,
            email : user,email,
            phone : user.phone,
            address: user.address
        },
        token
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};

//test controller
export const testController = (req, res)=>{
    res.send('protected routes')
} 
