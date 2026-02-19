import type { FC } from "react";
import { getPosts, deletePost } from "@api/posts";
import { useStyles } from "./styles";
import type { Post } from "../../types/post";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { filter, isNil, map } from "lodash/fp";
import Loader from "@components/Loader";

export const DeletePostPage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "PAGES" });
  const queryClient = useQueryClient();

  const {
    data: posts = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["get", "post"],
    queryFn: getPosts,
  });

  const { mutate } = useMutation({
    mutationKey: ["delete", "post"],
    mutationFn: deletePost,
    onSuccess: (_, postId: string) => {
      queryClient.setQueryData<Post[]>(
        ["get", "post"],
        filter((p) => p._id !== postId),
      );
    },
  });

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{t("DELETE_POST.TITLE")}</h1>

      {isLoading && <Loader />}

      {!isNil(error) && <p>{error.message}</p>}

      <div className={classes.list}>
        {map((post: Post) => (
          <div key={post._id} className={classes.card}>
            <h3>{post.postName}</h3>
            <button className={classes.button} onClick={() => mutate(post._id)}>
              {t("DELETE_POST.BUTTON")}
            </button>
          </div>
        ))(posts)}
      </div>
    </div>
  );
};
