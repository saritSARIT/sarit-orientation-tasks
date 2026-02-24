import { useFormContext } from "react-hook-form";
import { useStyles } from "./styles";
import type { FormInputProps } from "./types";

export const FormInput = ({
  name,
  placeholder,
  type = "text",
  requiredMessage,
}: FormInputProps) => {
  const classes = useStyles();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name as keyof typeof errors];

  return (
    <>
      <input
        type={type}
        {...register(name, {
          required: requiredMessage,
        })}
        placeholder={placeholder}
        className={classes.input}
      />

      {error && <p className={classes.error}>{error?.message as string}</p>}
    </>
  );
};
