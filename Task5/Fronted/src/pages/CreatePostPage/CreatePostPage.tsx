import type { FC } from "react";
import { createPost } from "@api/posts";
import { useStyles } from "./styles";
import { useMutation, useMutationState, useQueryClient } from "@tanstack/react-query";
import type { PostPayload } from "../../types/post";
import { PostForm } from "@components/PostForm/PostForm";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { concat } from "lodash/fp";
import { mutationKeys, queryKeys } from "@api/queryKeys";
import type { User } from "src/types/user";

export const CreatePostPage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "PAGES.CREATE_POST" });
  const queryClient = useQueryClient();
  const [{ currentUser }] = useMutationState<{ currentUser: User }>({
    filters: { mutationKey: mutationKeys.login },
  });

  const { mutate: createPostMutate, error: createPostError } = useMutation({
    mutationKey: queryKeys.posts.create,
    mutationFn: async (data: PostPayload) =>
    await  createPost({ ...data, userId: currentUser._id }),
    onSuccess: (newPost: PostPayload) => {
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