import { useFormContext } from "react-hook-form";
import { useStyles } from "./styles";
import type { FormInputProps } from "./types";
import type { FC } from "react";
import { isNil } from "lodash/fp";

export const FormInput: FC<FormInputProps> = ({
  name,
  placeholder,
  type = "text",
  requiredMessage,
}) => {
  const classes = useStyles();
  const {
    register,
    formState: { errors },
  } = useFormContext();

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

      {/* Useform's types */}
      {/* eslint-disable @typescript-eslint/no-unsafe-type-assertion */}
      {isNil(error) ? null : (
        <p className={classes.error}>{error.message as string}</p>
      )}
    </>
  );
};
