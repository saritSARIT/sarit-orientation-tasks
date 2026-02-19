import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useStyles } from "./styles";
import { createUser } from "@api/users";
import type { UserPayload } from "../../types/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { UserForm } from "@components/UserForm/UserForm";

export const CreateUserPage: FC = () => {
  const classes = useStyles();
  const form = useForm<UserPayload>();
  const { t } = useTranslation("translation", { keyPrefix: "PAGES" });
  const queryClient = useQueryClient();

  const { mutateAsync, error } = useMutation({
    mutationKey: ["create", "user"],
    mutationFn: createUser,
    onSuccess: (newUser) => {
      queryClient.setQueryData(
        ["get", "user"],
        (oldUsers: UserPayload[] = []) => [...oldUsers, newUser],
      );
    },
  });

  return (
    <FormProvider {...form}>
      <div className={classes.container}>
        <h1 className={classes.title}>{t("CREATE_USER.TITLE")}</h1>

        <form
          onSubmit={form.handleSubmit(async (data) => {
            await mutateAsync(data);
            toast.success("User created successfully!");
            form.reset();
          })}
        >
          <UserForm submitButtonText={t("CREATE_USER.BUTTON")} />
        </form>

        {error && <p className={classes.error}>{error.message}</p>}
      </div>
    </FormProvider>
  );
};
