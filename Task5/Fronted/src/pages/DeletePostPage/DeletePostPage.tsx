import type { FC } from "react";
import { getPosts, deletePost } from "@api/posts";
import { useStyles } from "./styles";
import type { Post } from "../../types/post";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { filter, isNil, map } from "lodash/fp";
import Loader from "@components/Loader";
import { queryKeys } from "@api/queryKeys";

export const DeletePostPage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "PAGES.DELETE_POST" });
  const queryClient = useQueryClient();
  const currentUser = queryClient.getQueryData<{ _id: string }>(["currentUser"]);

  const { data: posts = [], error, isLoading } = useQuery({
    queryKey: queryKeys.posts.all,
    queryFn: getPosts,
  });

  const userPosts = filter(
    (post: Post) => post.userId === currentUser?._id,
    posts,
  );

  const { mutate: deletePostMutate } = useMutation({
    mutationKey: queryKeys.posts.delete,
    mutationFn: deletePost,
    onSuccess: (deletedPost: Post) => {
      queryClient.setQueryData<Post[]>(
        queryKeys.posts.all,
        filter((post) => post._id !== deletedPost._id),
      );
    },
  });

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{t("TITLE")}</h1>

       {isNil(isLoading) && <Loader />}
      {!isNil(error) && <p>{error.message}</p>}

      <div className={classes.list}>
        {map(
          (post: Post) => (
            <div key={post._id} className={classes.card}>
              <h3>{post.postName}</h3>
              <button
                type="button"
                className={classes.button}
                onClick={() => {deletePostMutate(post._id);}}
              >
                {t("BUTTON")}
              </button>
            </div>
          ),
          userPosts,
        )}
      </div>
    </div>
  );
};