import { FC, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { getPosts, deletePost } from "../../api/posts";
import { useStyles } from "./styles";
import type { Post } from "../../types/post";
import { useMutation } from "@tanstack/react-query";

export const DeletePostPage: FC = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState<Post[]>([]);
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

  const { mutate } = useMutation({
    mutationKey: ["deletePost"],
    mutationFn: deletePost,
    onSuccess: (_, id: string) => {
      setPosts(posts.filter((post) => post._id !== id));
    },
    onMutate: () => setError(null),
    onError: (error: any) => {
      setError(error.message || "Error deleting post");
    },
  });

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <h1 className={classes.title}>Delete Posts</h1>
        {error !== null && error !== " " && <p>Error: {error}</p>}
        <div className={classes.list}>
          {posts.map((post) => (
            <div key={post._id} className={classes.card}>
              <h3>{post.postName}</h3>
              <button
                className={classes.button}
                onClick={() => mutate(post._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
