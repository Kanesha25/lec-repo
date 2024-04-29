import express from "express";
import bcrypt from "bcrypt";

const router = express.Router();
import { Login } from "../models/Login.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

router.post("/signup", async (req, res) => {
  const { username, email, password, role } = req.body;
  const user = await Login.findOne({ email });
  if (user) {
    return res.json({ message: "user already existed" });
  }

  const hashpassword = await bcrypt.hash(password, 10);
  const newUser = new Login({
    username,
    email,
    password: hashpassword,
    role,
  });

  await newUser.save();
  return res.json({ status: true, message: "record registed" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Login.findOne({ username });
  if (!user) {
    return res.json({ message: "user is not registerd" });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.json({ message: "password is incorrect" });
  }

  const token = jwt.sign({ username: user.username }, process.env.KEY, {
    expiresIn: "1h",
  });

  res.cookie("token", token, { httpOnly: true, maxAge: 360000 });

  return res.json({
    status: true,
    message: "login successfully",
    role: user.role,
  });
});

router.post("/forgotPassword", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Login.findOne({ email });
    if (!user) {
      return res.json({ message: "user not registered" });
    }

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kaneshathalagahapitiya@gmail.com",
        pass: "yourpassword",
      },
    });

    var mailOptions = {
      from: "kaneshathalagahapitiya@gmail.com",
      to: email,
      subject: "Reset Password",
      text: "http://localhost:5173/resetPassword/${token}",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

export { router as UserRouter };
