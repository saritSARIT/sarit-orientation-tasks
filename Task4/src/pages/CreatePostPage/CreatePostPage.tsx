import type { FC } from "react";
import { createPost } from "@api/posts";
import { useStyles } from "./styles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { PostPayload } from "../../types/post";
import { PostForm } from "@components/PostForm/PostForm";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const CreatePostPage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix:"PAGES" });
  const queryClient = useQueryClient();

  const { mutate, error } = useMutation({
    mutationKey: ["create", "post"],
    mutationFn: async (data: PostPayload) =>
      await createPost({
        ...data,
        media: data.media || undefined,
      }),
    onSuccess: (newPost) => {
      toast.success("Post created successfully!");
      queryClient.setQueryData<PostPayload[]>(["get", "post"], (oldPosts) =>
        oldPosts ? [...oldPosts, newPost] : [newPost]
      );
    },
  });

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{t("CREATE_POST.TITLE")}</h1>

      <PostForm
        submit={mutate}
        submitButtonText={t("CREATE_POST.BUTTON")}
        error={error?.message}
      />
    </div>
  );
};
