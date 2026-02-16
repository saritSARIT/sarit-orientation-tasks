import type { FC } from "react";
import { useStyles } from "./styles";
import { useTranslation } from "react-i18next";

export const HomePage: FC = () => {
  const classes = useStyles();

  const { t } = useTranslation("translation", { keyPrefix: "PAGES" });

  return <h1 className={classes.title}>{t("HOME.TITLE")} </h1>;
};
