import  { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseUri = process.env.DATA_BASE_URI ?? "";

const throwError = (message: string): void => {
  throw new Error(message);
}

export const databaseConnect = () => { 
(!databaseUri) && throwError("Missing database URI in environment variables"),

connect(databaseUri)
  .then(() => { console.log("Connected to MongoDB!"); })
  .catch((error) => { console.error("Error connecting to MongoDB:", error) });
}