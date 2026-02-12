import { type FC, useState } from "react";
import { createPost } from "@api/posts";
import { useStyles } from "./styles";
import { useMutation } from "@tanstack/react-query";
import type { PostPayload } from "../../types/post";
import { FormProvider } from "react-hook-form";
import PostForm from "@components/PostForm";
import { usePostForm } from "@components/PostForm/usePostForm";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const CreatePostPage: FC = () => {
  const classes = useStyles();

  const form = usePostForm({
    postName: "",
    text: "",
    likes: 0,
    userId: "",
    media: "",
  });

  const { mutate, error } = useMutation({
    mutationKey: ["createPost"],
    mutationFn: async (data: PostPayload) =>
      await createPost({
        ...data,
        media: data.media || undefined,
      }),
    onSuccess: () => toast.success("Post created successfully!"),
  });

  const { t } = useTranslation("translation", { keyPrefix: "TITELS" });

  return (
    <FormProvider {...form}>
      <div className={classes.container}>
        <h1 className={classes.title}>{t("CREATE_POST")}</h1>

        <PostForm
          submit={mutate}
          submitButtonText="Create Post"
          error={error?.message}
        />
      </div>
    </FormProvider>
  );
};
