import { FC, useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { getPosts, updatePost } from "../../api/posts";
import { useStyles } from "./styles";
import type { Post } from "../../types/post";

export const EditPostPage: FC = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [postName, setPostName] = useState("");
  const [text, setText] = useState("");
  const [media, setMedia] = useState("");
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

  const handleSelect = (post: Post) => {
    setSelectedPost(post);
    setPostName(post.postName);
    setText(post.text);
    setMedia(post.media || "");
  };

  const handleUpdate = async () => {
    if (!selectedPost) return;
    try {
      await updatePost(selectedPost._id, { postName, text, media: media || undefined });
      alert("Post updated successfully");
    } catch (err: any) {
      setError(err.message || "Error updating post");
    }
  };

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <h1 className={classes.title}>Edit Post</h1>
        {error && <p>Error: {error}</p>}
        <div className={classes.list}>
          {posts.map(post => (
            <div key={post._id} className={classes.card}>
              <h3 className={classes.postName}>{post.postName}</h3>
              <button className={classes.button} onClick={() => handleSelect(post)}>Edit</button>
            </div>
          ))}
        </div>
        {selectedPost && (
          <>
            <input className={classes.input} value={postName} onChange={e => setPostName(e.target.value)} />
            <input className={classes.input} value={text} onChange={e => setText(e.target.value)} />
            <input className={classes.input} value={media} onChange={e => setMedia(e.target.value)} />
            <button className={classes.button} onClick={handleUpdate}>Update</button>
          </>
        )}
      </div>
    </>
  );
};
