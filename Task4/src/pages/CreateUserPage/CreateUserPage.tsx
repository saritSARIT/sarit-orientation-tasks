import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "./styles";
import { createUser } from "@api/users";
import { UserPayload } from "../../types/user";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const CreateUserPage: FC = () => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<UserPayload>();

  const { mutate ,error } = useMutation({
    mutationKey: ["createUser"],
    mutationFn: handleSubmit(
      async (data: UserPayload) => await createUser(data),
    ),
    onSuccess: () => isValid && (toast.success("User created successfully!"), reset()),
  });

  const { t } = useTranslation("translation", { keyPrefix: "TITELS" });

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.title}>{t("CREATE_USER")}</h1>
        <form className={classes.form} onSubmit={mutate}>
          <input
            {...register("username", { required: true })}
            className={classes.input}
            placeholder="Username"
          />
          <input
            {...register("displayedName", { required: true })}
            className={classes.input}
            placeholder="Displayed Name"
          />
          <button className={classes.button} type="submit" >
            Create User
          </button>
          {error && <p className={classes.error}>{error?.message}</p>}
        </form>
      </div>
    </>
  );
};
