import type { FC } from "react";
import { PostForm } from "@components/PostForm/PostForm";
import { useStyles } from "./styles";
import { useTranslation } from "react-i18next";
import { map, isNil } from "lodash/fp";
import Loader from "@components/Loader";
import { useEditPostPage } from "./useEditPostPage";

export const EditPostPage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "PAGES.EDIT_POST" });
  const {
    posts,
    isLoading,
    selectedPost,
    setSelectedPostId,
    submit,
    queryError,
    editError,
  } = useEditPostPage();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{t("TITLE")}</h1>

      {isNil(isLoading) && <Loader />}
      {isNil(queryError) ? null : <p>{t("ERROR")}</p>}

      {isNil(editError) ? null : (
        <p className={classes.error}>{editError.message}</p>
      )}

      <div className={classes.list}>
        {map(
          (post) => (
            <div key={post._id} className={classes.card}>
              <h3>{post.postName}</h3>
              <button
                type="button"
                className={classes.button}
                onClick={() => {
                  setSelectedPostId(post._id);
                }}
              >
                {t("BUTTON")}
              </button>
            </div>
          ),
          posts,
        )}
      </div>

      {selectedPost ? (
        <PostForm
          submit={submit}
          submitButtonText={t("SUBMIT_BUTTON_TEXT")}
          error={editError?.message}
          defaultValues={selectedPost}
        />
      ) : null}
    </div>
  );
};
