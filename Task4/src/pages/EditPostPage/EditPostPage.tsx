import type { FC } from "react";
import { useState } from "react";
import { getPosts, updatePost } from "@api/posts";
import { PostForm } from "@components/PostForm/PostForm";
import { useStyles } from "./styles";
import type { PostPayload, Post } from "../../types/post";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { pickBy, isEmpty, map, find, matchesProperty } from "lodash/fp";
import { toast } from "react-toastify";
import Loader from "@components/Loader";
import { queryKeys } from "@api/queryKeys";

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
    queryKey: queryKeys.posts.all,
    queryFn: getPosts,
  });

  const selectedPost = find(matchesProperty("_id", selectedPostId))(posts);

  const { mutate, error: editError } = useMutation({
    mutationKey: queryKeys.posts.update,
    mutationFn: (data: Partial<PostPayload>) =>
      updatePost(selectedPostId!, data),
    onSuccess: (updatedPost) => {
      toast.success(t("TOAST_SUCCESS1"));
      queryClient.setQueryData<Post[]>(
        queryKeys.posts.all,
        map((p) => (p._id === updatedPost._id ? updatedPost : p)),
      );
    },
  });

  const handleSubmit = (data: PostPayload) =>
    selectedPost &&
    (() => {
      const updatedData = pickBy(
        (value, key) =>
          (value ?? "") !== (selectedPost[key as keyof PostPayload] ?? ""),
        data,
      );
      return isEmpty(updatedData)
        ? toast.success(t("TOAST_SUCCESS2"))
        : mutate(updatedData);
    })();

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
              submitButtonText={t("SUBMIT_BUTTON_TEXT")}
              error={editError?.message}
              defaultValues={selectedPost}
            />
          )}
        </>
      )}
    </div>
  );
};
