import { FC } from "react";
import type { Post } from "../../types/post";
import { getPosts } from "@api/posts";
import { useStyles } from "./styles";
import Loader from "@components/Loader";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { queryKeys } from "@api/queryKeys";

export const PostsPage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "PAGES" });

  const {
    data: posts = [],
    isLoading,
    error,
  } = useQuery<Post[], Error>({
    queryKey: queryKeys.posts.all,
    queryFn: getPosts,
  });

  const getYouTubeId = (url: string): string => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : "";
  };

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.title}>{t("POST.TITLE")}</h1>

        {isLoading ? (
          <Loader />
        ) : error instanceof Error ? (
          <p>{error.message}</p>
        ) : (
          <div className={classes.list}>
            {posts.map((post) => (
              <div key={post._id} className={classes.card}>
                <h3 className={classes.postName}>{post.postName}</h3>
                <p className={classes.text}>{post.text}</p>

                <p>
                  <strong>{t("POST.USER")}</strong> {post.userId}
                </p>

                <p>
                  <strong>{t("POST.LIKES")}</strong> {post.likes}
                </p>

                <p>
                  <strong>{t("POST.CREATED_AT")}</strong>{" "}
                  {new Date(post.createdAt).toLocaleString()}
                </p>

                {post.media &&
                  (post.media.includes("youtube.com") ||
                  post.media.includes("youtu.be") ? (
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${getYouTubeId(
                        post.media,
                      )}`}
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
