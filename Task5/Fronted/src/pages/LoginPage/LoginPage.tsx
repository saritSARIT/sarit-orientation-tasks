import  {type FC,useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "@api/users";
import Loader from "@components/Loader";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { mutationKeys } from "@api/queryKeys";
import { isNil, noop } from "lodash/fp";
import { updateToken } from "@api/axiosInstance";

export const LoginPage: FC = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation("translation", { keyPrefix: "PAGES.LOGIN" });

  const { mutate, isPending, error } = useMutation({
    mutationKey: mutationKeys.login,
    mutationFn: login,
    onSuccess: (data) => {
      updateToken(data.token);
      navigate("/")?.catch(noop);
    },
  });

  return (
    <div>
      <h1>{t("TITLE")}</h1>

      <input
        value={username}
        placeholder={t("PLACEHOLDER")}
         onChange={(event) => {
          setUsername(event.target.value);
        }}
      />

      <button type="button" onClick={() =>{ mutate(username)}}>
        {t("BUTTON")}
      </button>

      {isNil(isPending) && <Loader />}
      {!isNil(error) && <p>{error.message}</p>}
    </div>
  );
};
