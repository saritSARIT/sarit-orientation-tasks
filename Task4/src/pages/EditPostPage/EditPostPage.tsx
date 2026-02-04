import { type FC, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { getPosts, updatePost } from "../../api/posts";
import { PostForm } from "../../components/PostForm/PostForm";
import { useStyles } from "./styles";
import type { Post, PostPayload } from "../../types/post";
import { FormProvider } from "react-hook-form";
import { usePostForm } from "../../hooks/usePostForm";
import { useMutation } from "@tanstack/react-query";

export const EditPostPage: FC = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const { mutate: fetchPosts } = useMutation({
    mutationKey: ["fetchPosts"],
    mutationFn: getPosts,
    onMutate: () => setError(null),
    onSuccess: (data: Post[]) => setPosts(data),
    onError: (error: any) => {
      setError(error.response?.data?.message || "Error fetching posts");
    },
  });

  const form = usePostForm();

  const setSelectedPostState = (post: Post) => {
    setSelectedPost(post);
    form.reset(post);
  };

  const { mutate } = useMutation({
    mutationKey: ["updatePost"],
    mutationFn: async (data: PostPayload) =>
      await updatePost(selectedPost?._id as string, {
        ...data,
        media: data.media || undefined,
      }),
    onMutate: () => setError(null),
    onSuccess: () => alert("Post updated successfully!"),
    onError: (error: any) => {
      setError(error.response?.data?.message || "Error updating post");
    },
  });

  return (
    <FormProvider {...form}>
      <Navbar />
      <div className={classes.container}>
        <h1 className={classes.title}>Edit Post</h1>

        {error && <p className={classes.error}>{error}</p>}

        <div className={classes.list}>
          {posts.map((post) => (
            <div key={post._id} className={classes.card}>
              <h3>{post.postName}</h3>
              <button
                className={classes.button}
                onClick={() => setSelectedPostState(post)}
              >
                Edit
              </button>
            </div>
          ))}
        </div>

        {selectedPost && (
          <PostForm
            initialValues={selectedPost}
            onSubmit={mutate}
            submitText="Update Post"
            error={error}
          />
        )}
      </div>
    </FormProvider>
  );
};
