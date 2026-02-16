import type { FC } from "react";
import { useFormContext } from "react-hook-form";
import type { UserPayload } from "../../types/user";
import { useStyles } from "./styles";
import { useTranslation } from "react-i18next";

export const UserForm: FC<{ submitButtonText: string }> = ({ submitButtonText }) => {
  const classes = useStyles();
  const { register, handleSubmit, formState: { errors } } = useFormContext<UserPayload>();

   const { t } = useTranslation("translation", { keyPrefix:"PAGES.USER_FORM" });

  return (
    <form className={classes.form} onSubmit={handleSubmit(() => {})}>
      <input
        {...register("username", { required: "Username is required" })}
        placeholder={t("PLACEHOLDERS.USER_NAME")}
        className={classes.input}
      />
      {errors.username && <p className={classes.error}>{errors.username.message}</p>}

      <input
        {...register("displayedName", { required: "Displayed Name is required" })}
       placeholder={t("PLACEHOLDERS.DISPLAYED_NAME")}
        className={classes.input}
      />
      {errors.displayedName && <p className={classes.error}>{errors.displayedName.message}</p>}

      <button className={classes.button} type="submit">
        {submitButtonText}
      </button>
    </form>
  );
};
