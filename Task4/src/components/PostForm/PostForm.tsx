import { FC, useEffect, useState } from "react";
import type { Post } from "../../types/post";
import { useStyles } from "./styles";

interface PostFormProps {
  initialValues?: Partial<Post>;
  onSubmit: (data: Partial<Post>) => Promise<void>;
  submitText: string;
  loading: boolean;
  error?: string | null;
}

export const PostForm: FC<PostFormProps> = ({
  initialValues,
  onSubmit,
  submitText,
  loading,
  error,
}) => {
  const classes = useStyles();

  const [postName, setPostName] = useState("");
  const [text, setText] = useState("");
  const [likes, setLikes] = useState(0);
  const [userId, setUserId] = useState("");
  const [media, setMedia] = useState("");

  // מילוי ערכים בעריכה
  useEffect(() => {
    if (initialValues) {
      setPostName(initialValues.postName || "");
      setText(initialValues.text || "");
      setLikes(initialValues.likes || 0);
      setUserId(initialValues.userId || "");
      setMedia(initialValues.media || "");
    }
  }, [initialValues]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({
      postName,
      text,
      likes,
      userId,
      media: media || "",
    });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        className={classes.input}
        placeholder="Post Name"
        value={postName}
        onChange={(e) => setPostName(e.target.value)}
        required
      />

      <input
        className={classes.input}
        placeholder="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />

      <input
        className={classes.input}
        placeholder="Likes"
        type="number"
        value={likes}
        onChange={(e) => setLikes(Number(e.target.value) || 0)}
        required
      />

      <input
        className={classes.input}
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />

      <input
        className={classes.input}
        placeholder="Media URL (optional)"
        value={media}
        onChange={(e) => setMedia(e.target.value)}
      />

      <button className={classes.button} type="submit" disabled={loading}>
        {loading ? "Saving..." : submitText}
      </button>

      {error && <p className={classes.error}>{error}</p>}
    </form>
  );
};
