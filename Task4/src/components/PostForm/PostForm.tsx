import { FC } from "react";
import { useFormContext } from "react-hook-form";
import type { Post, PostPayload } from "../../types/post";
import { useStyles } from "./styles";
import type { PostFormProps } from "./types";

export const PostForm: FC<PostFormProps> = ({
  initialValues,
  onSubmit,
  submitText,
  error,
}) => {
  const classes = useStyles();

  const { register, handleSubmit } = useFormContext<PostPayload>();

  const onFormSubmit = async (data: PostPayload) => {
    if (initialValues) {
      const updatedData: Partial<PostPayload> = {};

      if (
        data.postName !== undefined &&
        data.postName !== initialValues.postName
      ) {
        updatedData.postName = data.postName;
      }
      if (data.text !== undefined && data.text !== initialValues.text) {
        updatedData.text = data.text;
      }
      if (data.likes !== undefined && data.likes !== initialValues.likes) {
        updatedData.likes = data.likes;
      }
      if (data.userId !== undefined && data.userId !== initialValues.userId) {
        updatedData.userId = data.userId;
      }
      if ((data.media ?? "") !== (initialValues.media ?? "")) {
        updatedData.media = data.media;
      }

      if (Object.keys(updatedData).length === 0) {
        alert("לא בוצעו שינויים");
        return;
      }

      await onSubmit(updatedData as PostPayload);
    } else {
      await onSubmit(data as Post);
    }
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
        {submitText}
      </button>

      {error && <p className={classes.error}>{error}</p>}
    </form>
  );
};
