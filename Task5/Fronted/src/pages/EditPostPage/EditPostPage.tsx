import type { FC } from "react";
import { PostForm } from "@components/PostForm/PostForm";
import { useStyles } from "./styles";
import { useTranslation } from "react-i18next";
import { map, isNil, filter } from "lodash/fp";
import Loader from "@components/Loader";
import { useEditPostPage } from "./useEditPostPage";
import { useQueryClient } from "@tanstack/react-query";
import type { Post } from "../../types/post";

export const EditPostPage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "PAGES.EDIT_POST" });
  const queryClient = useQueryClient();
  const currentUser = queryClient.getQueryData<{ _id: string }>(['currentUser']);

  const {
    posts,
    isLoading,
    selectedPost,
    setSelectedPostId,
    submit,
    queryError,
    editPostError,
  } = useEditPostPage();

  const userPosts = filter(
    (post: Post) => post.userId === currentUser?._id,
    posts,
  );

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{t("TITLE")}</h1>

      {isLoading && <Loader />}
      {!isNil(queryError) && <p>{t("ERROR")}</p>}
      {!isNil(editPostError) && <p className={classes.error}>{editPostError.message}</p>}

      <div className={classes.list}>
        {map(
          (post: Post) => (
            <div key={post._id} className={classes.card}>
              <h3>{post.postName}</h3>
              <button
                type="button"
                className={classes.button}
                onClick={() => setSelectedPostId(post._id)}
              >
                {t("BUTTON")}
              </button>
            </div>
          ),
          userPosts,
        )}
      </div>

      {selectedPost && (
        <PostForm
          submit={submit}
          submitButtonText={t("SUBMIT_BUTTON_TEXT")}
          error={editPostError?.message}
          defaultValues={selectedPost}
        />
      )}
    </div>
  );
};