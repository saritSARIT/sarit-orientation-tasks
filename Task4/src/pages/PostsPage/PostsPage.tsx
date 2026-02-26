import type { FC } from "react";
import { getPosts } from "@api/posts";
import { useStyles } from "./styles";
import Loader from "@components/Loader";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { queryKeys } from "@api/queryKeys";
import { isNil } from "lodash/fp";
import { getYouTubeId, isYouTubeMedia } from "./functions";

export const PostsPage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "PAGES.POST" });

  const {
    data: posts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: queryKeys.posts.all,
    queryFn: getPosts,
  });

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{t("TITLE")}</h1>

      {isNil(isLoading) && <Loader />}
      {!isNil(error) && <p>{error.message}</p>}

      <div className={classes.list}>
        {posts.map((post) => (
          <div key={post._id} className={classes.card}>
            <h3 className={classes.postName}>{post.postName}</h3>
            <p className={classes.text}>{post.text}</p>

            <p>
              <strong>{t("USER", { userId: post.userId })}</strong>
              {post.userId}
            </p>

            <p>
              <strong>{t("LIKES")}</strong>
              {post.likes}
            </p>

            <p>
              <strong>{t("CREATED_AT")}</strong>
              {new Date(post.createdAt).toLocaleString()}
            </p>

            {isYouTubeMedia(post) ? (
              <iframe
                allowFullScreen
                sandbox=""
                width="100%"
                height="315"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{
                  marginTop: "10px",
                  borderRadius: "8px",
                  border: "none",
                }}
                src={`https://www.youtube.com/embed/${getYouTubeId(
                  post.media,
                )}`}
              />
            ) : (
              <video
                controls
                src={post.media}
                style={{
                  maxWidth: "100%",
                  marginTop: "10px",
                  borderRadius: "8px",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
