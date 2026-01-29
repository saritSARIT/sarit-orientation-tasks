import { FC, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import type { Post } from "../../types/post";
import { getPosts, deletePost } from "../../api/posts";
import { useStyles } from "./styles";

export const PostsPage: FC = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (err: any) {
      setError(err.message || "Error fetching posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
        <h1 className={classes.title}>Posts Page</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <div className={classes.list}>
            {posts.map(post => (
              <div key={post._id} className={classes.card}>
                <h3 className={classes.postName}>{post.postName}</h3>
                <p className={classes.text}>{post.text}</p>
                <button className={classes.button} onClick={() => handleDelete(post._id)}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
