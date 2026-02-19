import type { FC } from "react";
import { useState } from "react";
import { getPosts, updatePost } from "@api/posts";
import { PostForm } from "@components/PostForm/PostForm";
import { useStyles } from "./styles";
import type { PostPayload, Post } from "../../types/post";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { pickBy, isEmpty,map,find,matchesProperty } from "lodash/fp";
import { toast } from "react-toastify";
import Loader from "@components/Loader";

export const EditPostPage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "PAGES.EDIT_POST" });
  const queryClient = useQueryClient();
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const {
    data: posts = [],
    isLoading,
    error: queryError,
  } = useQuery<Post[]>({
    queryKey: ["get", "post"],
    queryFn: getPosts,
  });

const selectedPost = find(matchesProperty("_id", selectedPostId))(posts);

  const { mutate, error: editError } = useMutation({
    mutationKey: ["update", "post"],
    mutationFn: (data: Partial<PostPayload>) =>
      updatePost(selectedPostId as string, data),
    onSuccess: (updatedPost) => {
      toast.success("Post updated successfully!");
      queryClient.setQueryData<Post[]>(["get", "post"], (oldPosts) =>
        oldPosts
          ? oldPosts.map((p) => (p._id === updatedPost._id ? updatedPost : p))
          : [],
      );
    },
  });

  const handleSubmit = async (data: PostPayload) => {
    if (!selectedPost) return;

    const updatedData = pickBy(
      (value, key) =>
        (value ?? "") !== (selectedPost[key as keyof PostPayload] ?? ""),
      data,
    );

    if (isEmpty(updatedData)) {
      toast.success("לא בוצעו שינויים");
      return;
    }

    mutate(updatedData);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{t("TITLE")}</h1>

      {isLoading ? (
        <Loader />
      ) : queryError ? (
        <p>{t("ERROR")}</p>
      ) : (
        <>
          {editError && <p className={classes.error}>{editError.message}</p>}

          <div className={classes.list}>
            {map(
              (post) => (
                <div key={post._id} className={classes.card}>
                  <h3>{post.postName}</h3>
                  <button
                    className={classes.button}
                    onClick={() => setSelectedPostId(post._id)}
                  >
                    {t("BUTTON")}
                  </button>
                </div>
              ),
              posts,
            )}
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
