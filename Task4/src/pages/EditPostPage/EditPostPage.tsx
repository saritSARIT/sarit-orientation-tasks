import { FC, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { getPosts, updatePost } from "../../api/posts";
import { PostForm } from "../../components/PostForm/PostForm";
import { useStyles } from "./styles";
import type { Post } from "../../types/post";

export const EditPostPage: FC = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err: unknown) {
        const message =
          (err as { response?: { data?: { message?: string } } })?.response
            ?.data?.message || "Error fetching posts";
        setError(message);
      }
    };
    fetchPosts();
  }, []);

  const handleUpdate = async (data: Partial<Post>) => {
    if (!selectedPost) return;

    setLoading(true);
    setError(null);
    try {
      await updatePost(selectedPost._id, data);
      alert("הפוסט עודכן בהצלחה!");

      setPosts((prev) =>
        prev.map((p) => (p._id === selectedPost._id ? { ...p, ...data } : p)),
      );
      setSelectedPost(null); // סיום מצב עריכה
    } catch (err: unknown) {
      const message =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message || "Error updating post";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
                onClick={() => setSelectedPost(post)}
              >
                Edit
              </button>
            </div>
          ))}
        </div>

        {selectedPost && (
          <PostForm
            initialValues={selectedPost}
            onSubmit={handleUpdate}
            submitText="Update Post"
            loading={loading}
            error={error}
          />
        )}
      </div>
    </>
  );
};
