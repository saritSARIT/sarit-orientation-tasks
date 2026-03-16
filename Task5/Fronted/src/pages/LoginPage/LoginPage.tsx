import type { FC } from "react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "@api/users";
import Loader from "@components/Loader";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const LoginPage: FC = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation("translation", { keyPrefix: "PAGES.LOGIN" });

  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      queryClient.setQueryData(["currentUser"], data.user);
      queryClient.setQueryData(["token"], data.token);

      navigate("/");

      window.location.reload();
    },
  });

  return (
    <div>
      <h1>{t("TITLE")}</h1>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder={t("PLACEHOLDER")}
      />

      <button onClick={() => mutate(username)}>{t("BUTTON")}</button>

      {isPending && <Loader />}
      {error && <p>{error.message}</p>}
    </div>
  );
};
