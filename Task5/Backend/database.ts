import { connect } from "mongoose";
import { config } from "./config";

export const databaseConnect = (): void => {
  connect(config.databaseUri)
    .then(() => {
      console.log("Connected to MongoDB!");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};