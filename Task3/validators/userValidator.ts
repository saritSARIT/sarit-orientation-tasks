import { User } from "../types/user";

export const validateCreateUser = (data: User) => {
  if (!data.username || !data.displayedName) {
    throw new Error("Missing required fields");
  }
  if (typeof data.username !== "string") {
    throw new Error("Username must be a string");
  }
  if (typeof data.displayedName !== "string") {
    throw new Error("Displayed name must be a string");
  }
};
