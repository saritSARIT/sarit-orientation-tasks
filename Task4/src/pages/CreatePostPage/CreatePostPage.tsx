import { FC, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { createPost } from "../../api/posts";
import  PostForm  from "../../components/PostForm";
import { useStyles } from "./styles";

export const CreatePostPage: FC = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreate = async (data: any) => {
    setLoading(true);
    setError(null);
    try {
      await createPost({
        ...data,
        media: data.media || undefined,
      });
      alert("Post created successfully!");
    } catch (err: any) {
      setError(err.response?.data?.message || "Error creating post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <h1 className={classes.title}>Create Post</h1>

        <PostForm
          onSubmit={handleCreate}
          submitText="Create Post"
          loading={loading}
          error={error}
        />
      </div>
    </>
  );
};
