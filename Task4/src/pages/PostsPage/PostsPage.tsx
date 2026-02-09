import { FC, useEffect, useState } from "react";
import { Navbar } from "@components/Navbar/Navbar";
import type { Post } from "../../types/post";
import { getPosts } from "@api/posts";
import { useStyles } from "./styles";
import Loader from "@components/Loader";
import { useMutation } from "@tanstack/react-query";

export const PostsPage: FC = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { mutate: fetchPosts } = useMutation({
    mutationKey: ["fetchPosts"],
    mutationFn: getPosts,
    onMutate: () => {
      setError(null);
      setLoading(true);
    },
    onSuccess: (data: Post[]) => {
      setPosts(data);
      setLoading(false);
    },
    onError: (error: any) => {
      setError(error.response?.data?.message || "Error fetching posts");
    },
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : "";
  };

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
                <p>
                  <strong>User:</strong> {post.userId}
                </p>
                <p>
                  <strong>Likes:</strong> {post.likes}
                </p>
                <p>
                  <strong>Created At:</strong>{" "}
                  {new Date(post.createdAt).toLocaleString()}
                </p>

                {post.media &&
                  (post.media.includes("youtube.com") ||
                  post.media.includes("youtu.be") ? (
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${getYouTubeId(post.media)}`}
                      title="YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ marginTop: "10px", borderRadius: "8px" }}
                    />
                  ) : (
                    <video
                      src={post.media}
                      controls
                      style={{
                        maxWidth: "100%",
                        marginTop: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
