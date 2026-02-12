import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import type { FC } from "react";
import { ROUTES } from "./consts";
import { useTranslation } from "react-i18next";

export const Navbar: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "ROUTES" });

  return (
    <nav className={classes.navbar}>
      <Link to={ROUTES.HOME} className={classes.navLink}>
        {t("HOME_PAGE")}
      </Link>

      <Link to={`/${ROUTES.USERS.ROOT}`} className={classes.navLink}>
        {t("USER_PAGE")}
      </Link>

      <Link
        to={`/${ROUTES.USERS.ROOT}/${ROUTES.USERS.CREATE}`}
        className={classes.navLink}
      >
        {t("CREATE_USER_PAGE")}
      </Link>

      <Link to={`/${ROUTES.POSTS.ROOT}`} className={classes.navLink}>
        {t("POST_PAGE")}
      </Link>

      <Link
        to={`/${ROUTES.POSTS.ROOT}/${ROUTES.POSTS.CREATE}`}
        className={classes.navLink}
      >
        {t("CREATE_POST_PAGE")}
      </Link>

      <Link to={`/${ROUTES.POSTS.ROOT}/edit/1`} className={classes.navLink}>
        {t("EDIT_POST_PAGE")}
      </Link>

      <Link to={`/${ROUTES.POSTS.ROOT}/delete/1`} className={classes.navLink}>
        {t("DELETE_POST_PAGE")}
      </Link>
    </nav>
  );
};
