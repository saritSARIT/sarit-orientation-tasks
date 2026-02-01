import { FC, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { getPosts, deletePost } from "../../api/posts";
import { useStyles } from "./styles";
import type { Post } from "../../types/post";

export const DeletePostPage: FC = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err: any) {
        setError(err.message || "Error fetching posts");
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deletePost(id);
      setPosts(posts.filter(post => post._id !== id));
    } catch (err: any) {
      setError(err.message || "Error deleting post");
    }
  };

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <h1 className={classes.title}>Delete Posts</h1>
        {error && <p>Error: {error}</p>}
        <div className={classes.list}>
          {posts.map(post => (
            <div key={post._id} className={classes.card}>
              <h3 className={classes.postName}>{post.postName}</h3>
              <button className={classes.button} onClick={() => handleDelete(post._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
