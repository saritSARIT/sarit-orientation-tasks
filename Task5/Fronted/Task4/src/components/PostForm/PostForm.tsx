import type { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import type { PostPayload } from "../../types/post";
import { useStyles } from "./styles";
import type { PostFormProps } from "./types";
import { useTranslation } from "react-i18next";
import { FormInput } from "../FormInput/FormInput";
import { isNil } from "lodash/fp";

export const PostForm: FC<PostFormProps> = ({
  submit,
  submitButtonText,
  error,
  defaultValues,
}) => {
  const classes = useStyles();
  const form = useForm<PostPayload>({ defaultValues });
  const { t } = useTranslation("translation", { keyPrefix: "POST_FORM" });

  return (
    <FormProvider {...form}>
      <form
        className={classes.form}
        // Returns promise void
        // eslint-disable-next-line @typescript-eslint/strict-void-return
        onSubmit={form.handleSubmit(submit)}
      >
        <FormInput
          name="postName"
          placeholder={t("PLACEHOLDERS.POST_NAME")}
          requiredMessage="Required"
        />

        <FormInput
          name="text"
          placeholder={t("PLACEHOLDERS.TEXT")}
          requiredMessage="Required"
        />

        <FormInput
          name="likes"
          type="number"
          placeholder={t("PLACEHOLDERS.LIKES")}
        />

        <FormInput
          name="userId"
          placeholder={t("PLACEHOLDERS.USER_ID")}
          requiredMessage="Required"
        />

        <FormInput name="media" placeholder={t("PLACEHOLDERS.MEDIA")} />

        <button className={classes.button} type="submit">
          {submitButtonText}
        </button>

        {isNil(error) ? null : <p className={classes.error}>{error}</p>}
      </form>
    </FormProvider>
  );
};
