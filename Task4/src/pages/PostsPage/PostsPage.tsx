import { FC, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import type { Post } from "../../types/post";
import { getPosts } from "../../api/posts";
import { useStyles } from "./styles";
import Loader from "../../components/Loader";

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

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <h1 className={classes.title}>Posts Page</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className={classes.list}>
            {posts.map((post) => (
              <div key={post._id} className={classes.card}>
                <h3 className={classes.postName}>{post.postName}</h3>
                <p className={classes.text}>{post.text}</p>
                <p><strong>User:</strong> {post.userId}</p>
                <p><strong>Likes:</strong> {post.likes}</p>
                <p><strong>Created At:</strong> {new Date(post.createdAt).toLocaleString()}</p>

                {post.media && (
                  <video 
                    src={post.media} 
                    controls 
                    style={{ maxWidth: "100%", marginTop: "10px" }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
