import type { FC } from "react";
import { useTranslation } from "react-i18next";
import type { UserPayload } from "../../types/user";
import { useStyles } from "./styles";
import type { UserFormProps } from "./types";
import { FormInput } from "../FormInput/FormInput";

export const UserForm: FC<UserFormProps> = ({ submitButtonText }) => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "USER_FORM" });

  return (
    <div className={classes.form}>
      <FormInput<UserPayload>
        name="username"
        placeholder={t("PLACEHOLDERS.USER_NAME")}
        requiredMessage={t("REQUIREDS.USER_NAME")}
      />

      <FormInput<UserPayload>
        name="displayedName"
        placeholder={t("PLACEHOLDERS.DISPLAYED_NAME")}
        requiredMessage={t("REQUIREDS.DISPLAYED_NAME")}
      />

      <button className={classes.button} type="submit">
        {submitButtonText}
      </button>
    </div>
  );
};
