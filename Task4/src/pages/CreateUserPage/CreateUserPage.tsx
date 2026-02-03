import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Navbar } from "../../components/Navbar/Navbar";
import { useStyles } from "./styles";
import { createUser } from "../../api/users";
import type { UserFormData } from "./types";

export const CreateUserPage: FC = () => {
  const classes = useStyles();
  const { register, handleSubmit, reset } = useForm<UserFormData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: UserFormData) => {
    setLoading(true);
    setError(null);
    try {
      await createUser(data);
      reset();
      alert("User created successfully!");
    } catch (err: unknown) {
      const message =
        (err as { message?: string })?.message || "Error creating user";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <h1 className={classes.title}>Create User</h1>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
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
          <button className={classes.button} type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create User"}
          </button>
          {error && <p className={classes.error}>{error}</p>}
        </form>
      </div>
    </>
  );
};
