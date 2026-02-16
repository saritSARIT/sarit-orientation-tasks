import type { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import type { PostPayload } from "../../types/post";
import { useStyles } from "./styles";
import type { PostFormProps } from "./types";
import { useTranslation } from "react-i18next";

export const PostForm: FC<PostFormProps & { defaultValues?: Partial<PostPayload> }> = ({
  submit,
  submitButtonText,
  error,
  defaultValues,
}) => {
  const classes = useStyles();
  const methods = useForm<PostPayload>({ defaultValues });
  const { handleSubmit, register } = methods;

  const onFormSubmit = async (data: PostPayload): Promise<void> => {
    await submit(data);
  };

  const { t } = useTranslation("translation", { keyPrefix:"PAGES.POST_FORM" });

  return (
    <FormProvider {...methods}>
      <form className={classes.form} onSubmit={handleSubmit(onFormSubmit)}>
        <input
          {...register("postName", { required: true })}
          className={classes.input}
          placeholder={t("PLACEHOLDERS.POST_NAME")}
        />

        <input
          {...register("text", { required: true })}
          className={classes.input}
         placeholder={t("PLACEHOLDERS.TEXT")}
        />

        <input
          type="number"
          {...register("likes")}
          className={classes.input}
          placeholder={t("PLACEHOLDERS.LIKES")}
        />

        <input
          {...register("userId", { required: true })}
          className={classes.input}
            placeholder={t("PLACEHOLDERS.USER_ID")}
        />

        <input
          {...register("media")}
          className={classes.input}
          placeholder={t("PLACEHOLDERS.MEDIA")}
        />

        <button className={classes.button} type="submit">
          {submitButtonText}
        </button>

        {error ? <p className={classes.error}>{error}</p> : null}
      </form>
    </FormProvider>
  );
};
