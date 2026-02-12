import { FC } from "react";
import { useStyles } from "./styles";
import { useTranslation } from "react-i18next";

export const HomePage: FC = () => {
  const classes = useStyles();

  const { t } = useTranslation("translation", { keyPrefix: "TITELS" });

  return (
    <>
      <h1 className={classes.title}>{t("HOME_PAGE")} </h1>
    </>
  );
};
