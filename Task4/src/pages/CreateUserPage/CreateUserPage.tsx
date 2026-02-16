import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useStyles } from "./styles";
import { createUser } from "@api/users";
import type { UserPayload } from "../../types/user";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { UserForm } from "@components/UserForm/UserForm";

export const CreateUserPage: FC = () => {
  const classes = useStyles();
  const methods = useForm<UserPayload>();
  const { t } = useTranslation("translation", { keyPrefix: "PAGES" });

  const { mutateAsync, error } = useMutation({
    mutationKey: ["create", "user"],
    mutationFn: createUser,
    onSuccess: () => {
      toast.success("User created successfully!");
      methods.reset();
    },
  });
  const onSubmit = async (data: UserPayload) => {
    await mutateAsync(data);
  };

  return (
    <FormProvider {...methods}>
      <div className={classes.container}>
        <h1 className={classes.title}>{t("CREATE_USER.TITLE")}</h1>
        <UserForm submitButtonText={t("CREATE_USER.BUTTON")} />
        {error && <p className={classes.error}>{error?.message}</p>}
      </div>
    </FormProvider>
  );
};
