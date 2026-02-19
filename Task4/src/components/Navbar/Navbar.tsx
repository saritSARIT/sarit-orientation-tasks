import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import type { FC } from "react";
import { ROUTES } from "./consts";
import { useTranslation } from "react-i18next";

export const Navbar: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "PAGES"});

  return (
    <nav className={classes.navbar}>
      <Link to={ROUTES.HOME} className={classes.navLink}>
        {t("HOME.ROUTE")}
      </Link>

      <Link to={`/${ROUTES.USERS.ROOT}`} className={classes.navLink}>
        {t("USER.ROUTE")}
      </Link>

      <Link
        to={`/${ROUTES.USERS.ROOT}/${ROUTES.USERS.CREATE}`}
        className={classes.navLink}
      >
        {t("CREATE_USER.ROUTE")}
      </Link>

      <Link to={`/${ROUTES.POSTS.ROOT}`} className={classes.navLink}>
        {t("POST.ROUTE")}
      </Link>

      <Link
        to={`/${ROUTES.POSTS.ROOT}/${ROUTES.POSTS.CREATE}`}
        className={classes.navLink}
      >
        {t("CREATE_POST.ROUTE")}
      </Link>

      <Link to={`/${ROUTES.POSTS.ROOT}/${ROUTES.POSTS.EDIT}`} className={classes.navLink}>
        {t("EDIT_POST.ROUTE")}
      </Link>

      <Link to={`/${ROUTES.POSTS.ROOT}/${ROUTES.POSTS.DELETE}`} className={classes.navLink}>
        {t("DELETE_POST.ROUTE")}
      </Link>
    </nav>
  );
};
