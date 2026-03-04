import type { FC } from "react";
import { createPost } from "@api/posts";
import { useStyles } from "./styles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { PostPayload } from "../../types/post";
import { PostForm } from "@components/PostForm/PostForm";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { concat } from "lodash/fp";
import { queryKeys } from "@api/queryKeys";

export const CreatePostPage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", {
    keyPrefix: "PAGES.CREATE_POST",
  });
  const queryClient = useQueryClient();

  const { mutate: createPostMutate, error: createPostError } = useMutation({
    mutationKey: queryKeys.posts.create,
    mutationFn: createPost,
    onSuccess: (newPost) => {
      toast.success(t("TOAST_SUCCESS"));
      queryClient.setQueryData<PostPayload[]>(
        queryKeys.posts.all,
        (oldPosts = []) => concat(oldPosts, newPost),
      );
    },
  });

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{t("TITLE")}</h1>

      <PostForm
        submit={createPostMutate}
        submitButtonText={t("BUTTON")}
        error={createPostError?.message}
      />
    </div>
  );
};
