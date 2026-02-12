import { type FC, useState } from "react";
import { getPosts, updatePost } from "@api/posts";
import { PostForm } from "@components/PostForm/PostForm";
import { useStyles } from "./styles";
import type { Post, PostPayload } from "../../types/post";
import { FormProvider } from "react-hook-form";
import { usePostForm } from "@components/PostForm/usePostForm";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { pickBy } from "lodash/fp";
import { toast } from "react-toastify";

export const EditPostPage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "TITELS" });

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const {
    data: posts = [],
    isLoading,
    error: queryError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const form = usePostForm({
    postName: "",
    text: "",
    likes: 0,
    userId: "",
    media: "",
  });

  const setSelectedPostState = (post: Post) => {
    setSelectedPost(post);
    form.reset(post);
  };

  const { mutateAsync,error } = useMutation({
    mutationKey: ["updatePost"],
    mutationFn: (data: Partial<PostPayload>) =>
      updatePost(selectedPost!._id, data),
    onSuccess: () => toast.success("Post updated successfully!"),
  });

  const handleSubmit = async (data: PostPayload) => {
    if (!selectedPost) return;

    const updatedData = pickBy(
      (value, key) =>
        (value ?? "") !== (selectedPost[key as keyof PostPayload] ?? ""),
      data,
    );

    if (Object.keys(updatedData).length === 0) {
      alert("לא בוצעו שינויים");
      return;
    }

    await mutateAsync(updatedData);
  };

  if (isLoading) return <p>Loading...</p>;
  if (queryError) return <p>Error loading posts</p>;

  return (
    <FormProvider {...form}>
      <div className={classes.container}>
        <h1 className={classes.title}>{t("EDIT_POST")}</h1>

        {error && <p className={classes.error}>{error?.message}</p>}

        <div className={classes.list}>
          {posts.map((post) => (
            <div key={post._id} className={classes.card}>
              <h3>{post.postName}</h3>
              <button
                className={classes.button}
                onClick={() => setSelectedPostState(post)}
              >
                Edit
              </button>
            </div>
          ))}
        </div>

        {selectedPost && (
          <PostForm
            submit={handleSubmit}
            submitButtonText="Update Post"
            error={error?.message}
          />
        )}
      </div>
    </FormProvider>
  );
};
