import type { FieldValues, Path } from "react-hook-form";

export type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  placeholder: string;
  type?: string;
  requiredMessage?: string;
};
