import type { FC } from "react";
import { useState } from "react";
import { getPosts, updatePost } from "@api/posts";
import { PostForm } from "@components/PostForm/PostForm";
import { useStyles } from "./styles";
import type { PostPayload, Post } from "../../types/post";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { pickBy, isEmpty } from "lodash/fp";
import { toast } from "react-toastify";

export const EditPostPage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "PAGES" });
  const queryClient = useQueryClient();
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const { data: posts = [], isLoading, error: queryError } = useQuery<Post[]>({
    queryKey: ["get", "post"],
    queryFn: getPosts,
  });

  const selectedPost = posts.find((p) => p._id === selectedPostId) || undefined;

  const { mutate, error: editError } = useMutation({
    mutationKey: ["update", "post"],
    mutationFn: (data: Partial<PostPayload>) =>
      updatePost(selectedPostId as string, data),
    onSuccess: (updatedPost) => {
      toast.success("Post updated successfully!");
      queryClient.setQueryData<Post[]>(["get", "post"], (oldPosts) =>
        oldPosts
          ? oldPosts.map((p) => (p._id === updatedPost._id ? updatedPost : p))
          : []
      );
    },
  });

  const handleSubmit = async (data: PostPayload) => {
    if (!selectedPost) return;

    const updatedData = pickBy(
      (value, key) => (value ?? "") !== (selectedPost[key as keyof PostPayload] ?? ""),
      data
    );

    if (isEmpty(updatedData)) {
      toast.success("לא בוצעו שינויים");
      return;
    }

    mutate(updatedData);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{t("EDIT_POST.TITLE")}</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : queryError ? (
        <p>Error loading posts</p>
      ) : (
        <>
          {editError && <p className={classes.error}>{editError.message}</p>}

          <div className={classes.list}>
            {posts.map((post) => (
              <div key={post._id} className={classes.card}>
                <h3>{post.postName}</h3>
                <button
                  className={classes.button}
                  onClick={() => setSelectedPostId(post._id)}
                >
                  {t("EDIT_POST.BUTTON")}
                </button>
              </div>
            ))}
          </div>

          {selectedPost && (
            <PostForm
              submit={handleSubmit}
              submitButtonText="Update Post"
              error={editError?.message}
              defaultValues={selectedPost} 
            />
          )}
        </>
      )}
    </div>
  );
};
