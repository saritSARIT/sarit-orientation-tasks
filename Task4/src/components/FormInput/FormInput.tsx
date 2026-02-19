import { useFormContext, type FieldValues } from "react-hook-form";
import { useStyles } from "./styles";
import type { FormInputProps } from "./types";

export const FormInput = <T extends FieldValues>({
  name,
  placeholder,
  type = "text",
  requiredMessage,
}: FormInputProps<T>) => {
  const classes = useStyles();
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  const error = errors[name];

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

      {error && <p className={classes.error}>{error.message as string}</p>}
    </>
  );
};
