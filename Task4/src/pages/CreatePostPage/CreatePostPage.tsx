import { FC, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { createPost } from "../../api/posts";
import { useStyles } from "./styles";

export const CreatePostPage: FC = () => {
  const classes = useStyles();
  const [postName, setPostName] = useState("");
  const [text, setText] = useState("");
  const [userId, setUserId] = useState("");
  const [media, setMedia] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      await createPost({ postName, text, userId, media: media || undefined });
      setPostName("");
      setText("");
      setUserId("");
      setMedia("");
      alert("Post created successfully");
    } catch (err: any) {
      setError(err.message || "Error creating post");
    }
  };

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <h1 className={classes.title}>Create Post</h1>
        {error && <p>Error: {error}</p>}
        <input className={classes.input} placeholder="Post Name" value={postName} onChange={e => setPostName(e.target.value)} />
        <input className={classes.input} placeholder="Text" value={text} onChange={e => setText(e.target.value)} />
        <input className={classes.input} placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)} />
        <input className={classes.input} placeholder="Media URL" value={media} onChange={e => setMedia(e.target.value)} />
        <button className={classes.button} onClick={handleSubmit}>Create</button>
      </div>
    </>
  );
};
