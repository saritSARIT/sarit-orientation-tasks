import type { FC } from "react";
import { useFormContext } from "react-hook-form";
import type { PostPayload } from "../../types/post";
import { useStyles } from "./styles";
import type { PostFormProperties } from "./types";

export const PostForm: FC<PostFormProperties> = ({
  submit,
  submitButtonText,
  error,
}) => {
  const classes = useStyles();
  const { register, handleSubmit } = useFormContext<PostPayload>();

  const onFormSubmit = async (data: PostPayload): Promise<void> => {
    await submit(data);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onFormSubmit)}>
      <input
        {...register("postName", { required: true })}
        className={classes.input}
        placeholder="Post Name"
      />

      <input
        {...register("text", { required: true })}
        className={classes.input}
        placeholder="Text"
      />

      <input
        type="number"
        {...register("likes")}
        className={classes.input}
        placeholder="Likes"
      />

      <input
        {...register("userId", { required: true })}
        className={classes.input}
        placeholder="User ID"
      />

      <input
        {...register("media")}
        className={classes.input}
        placeholder="Media URL (optional)"
      />

      <button className={classes.button} type="submit">
        {submitButtonText}
      </button>

      {error ? <p className={classes.error}>{error}</p> : null}
    </form>
  );
};
