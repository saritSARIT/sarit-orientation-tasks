import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Navbar } from "@components/Navbar/Navbar";
import { useStyles } from "./styles";
import { createUser } from "@api/users";
import { UserPayload } from "../../types/user";
import { useMutation } from "@tanstack/react-query";

export const CreateUserPage: FC = () => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<UserPayload>();
  const [error, setError] = useState<string | null>(null);

  const { mutate } = useMutation({
    mutationKey: ["createUser"],
    mutationFn: handleSubmit(
      async (data: UserPayload) => await createUser(data),
    ),
    onMutate: () => setError(null),
    onSuccess: () => isValid && (alert("User created successfully!"), reset()),
    onError: (error: any) => {
      setError(error.response?.data?.message || "Error creating user");
    },
  });

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <h1 className={classes.title}>Create User</h1>
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
          <button className={classes.button} type="submit">
            Create User
          </button>
          {error && <p className={classes.error}>{error}</p>}
        </form>
      </div>
    </>
  );
};
