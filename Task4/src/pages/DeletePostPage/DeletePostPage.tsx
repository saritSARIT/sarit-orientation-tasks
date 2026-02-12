import { FC } from "react";
import { getPosts, deletePost } from "@api/posts";
import { useStyles } from "./styles";
import type { Post } from "../../types/post";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

export const DeletePostPage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "TITELS" });
  const queryClient = useQueryClient();

  const {
    data: posts = [],
    error,
    isLoading,
  } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const { mutate } = useMutation({
    mutationKey: ["deletePost"],
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.title}>{t("POST_PAGE")}</h1>

        {isLoading && <p>Loading...</p>}

        {error instanceof Error && (
          <p>{error.message}</p>
        )}

        <div className={classes.list}>
          {posts.map((post) => (
            <div key={post._id} className={classes.card}>
              <h3>{post.postName}</h3>
              <button
                className={classes.button}
                onClick={() => mutate(post._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
