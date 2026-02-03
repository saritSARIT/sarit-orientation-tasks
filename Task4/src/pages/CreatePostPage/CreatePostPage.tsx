import { type FC, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { createPost } from "../../api/posts";
import PostForm from "../../components/PostForm";
import { useStyles } from "./styles";
import { useMutation } from "@tanstack/react-query";
import { PostPayload } from "../../types/post";

export const CreatePostPage: FC = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = async (data: PostPayload): Promise<void> => {
    setLoading(true);
    setError(null);
    mutate(data);
  };

  const { mutate } = useMutation({
    mutationKey: ["createPost"],
    mutationFn: async (data: PostPayload) =>
      await createPost({
        ...data,
        media: data.media || undefined,
      }),
    onSuccess: () => alert("Post created successfully!"),
    onError: (error: any) => {
      setError(error.response?.data?.message || "Error creating post");
    },
    onMutate: () => setLoading(false),
  });

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <h1 className={classes.title}>Create Post</h1>

        <PostForm
          onSubmit={create}
          submitText="Create Post"
          loading={loading}
          error={error}
        />
      </div>
    </>
  );
};
