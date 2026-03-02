import { HTMLInputTypeAttribute } from "react";

export type FormInputProps = {
  name: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  requiredMessage?: string;
};
