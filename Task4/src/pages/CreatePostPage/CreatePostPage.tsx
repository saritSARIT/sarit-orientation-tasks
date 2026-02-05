import { type FC, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { createPost } from "../../api/posts";
import { useStyles } from "./styles";
import { useMutation } from "@tanstack/react-query";
import { PostPayload } from "../../types/post";
import { FormProvider } from "react-hook-form";
import PostForm from "../../components/PostForm";
import { usePostForm } from "../../hooks/usePostForm";

export const CreatePostPage: FC = () => {
  const classes = useStyles();
  const [error, setError] = useState<string | null>(null);

  const form = usePostForm();

  const { mutate } = useMutation({
    mutationKey: ["createPost"],
    mutationFn: async (data: PostPayload) =>
      await createPost({
        ...data,
        media: data.media || undefined,
      }),
    onMutate: () => setError(null),
    onSuccess: () => alert("Post created successfully!"),
    onError: (error: any) => {
      setError(error.response?.data?.message || "Error creating post");
    },
  });

  return (
    <FormProvider {...form}>
      <Navbar />
      <div className={classes.container}>
        <h1 className={classes.title}>Create Post</h1>

        <PostForm onSubmit={mutate} submitText="Create Post" error={error} />
      </div>
    </FormProvider>
  );
};
