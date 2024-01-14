"use server";
require("dotenv").config();
import { NextResponse } from "next/server";
import ConnectDB from "./connect";

let Testing = require("./model");

export const submitForm = async ({ email, message }) => {
  try {
    ConnectDB(process.env.MONGO_URI);

    await Testing.create({ email, message });
    console.log("Done Done");
    // return NextResponse.json();
  } catch (error) {
    console.log(error);
  }
};
