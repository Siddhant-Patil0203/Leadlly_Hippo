import { genSaltSync, hashSync, compareSync  } from "bcrypt-ts";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import userModel from "../models/userModel";
import { Request, Response } from 'express';
dotenv.config();

const SECRET = process.env.USER!;

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const oldUser = await userModel.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    if (!oldUser.password) {
      console.error(`User has no password: ${oldUser}`);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    let isPasswordCorrect;
    try {
      isPasswordCorrect = await compareSync(password, oldUser.password);
    } catch (error) {
      console.error(`Error comparing passwords: ${error}`);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (!isPasswordCorrect)
      return res.status(404).json({ message: "Invalid Credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ result: oldUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.error(error);
  }
};

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Invalid email" });
  }

  try {
    const oldUser = await userModel.findOne({ email });

    if (oldUser)
      return res.status(404).json({ message: "User already exist" });

    const salt = genSaltSync(10);
    const hashedPassword = await hashSync(password, salt);

    const result = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, SECRET, {
      expiresIn: "1h",
    });


    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.error(error);
  }
};

interface CustomRequest extends Request {
  email?: string;
  userId?: string;
}

export const edit = async (req: CustomRequest, res: Response) => {
  const userId = req.userId;

  if (req.body.password) {
    const salt = genSaltSync(10);
    req.body.password = await hashSync(req.body.password, salt);
  }

  try {
    const updatedUser = await userModel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "User data updated successfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const logout = (req: Request, res: Response) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
}