import type { HTMLInputTypeAttribute } from "react";

export type FormInputProperties = {
  name: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  requiredMessage?: string;
};
