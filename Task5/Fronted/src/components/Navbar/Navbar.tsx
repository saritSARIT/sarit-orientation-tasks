import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import type { FC } from "react";
import { ROUTES } from "../Router/consts";
import { useTranslation } from "react-i18next";
import { useMutationState } from "@tanstack/react-query";
import type { User } from "src/types/user";
import { mutationKeys } from "@api/queryKeys";

export const Navbar: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "PAGES" });
  const [{ currentUser }] = useMutationState<{ currentUser: User }>({
    filters: { mutationKey: mutationKeys.login },
  });

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
      
      {currentUser ? (
        <>
          <Link
            to={`/${ROUTES.POSTS.ROOT}/${ROUTES.POSTS.CREATE}`}
            className={classes.navLink}
          >
            {t("CREATE_POST.ROUTE")}
          </Link>

          <Link
            to={`/${ROUTES.POSTS.ROOT}/${ROUTES.POSTS.EDIT}`}
            className={classes.navLink}
          >
            {t("EDIT_POST.ROUTE")}
          </Link>

          <Link
            to={`/${ROUTES.POSTS.ROOT}/${ROUTES.POSTS.DELETE}`}
            className={classes.navLink}
          >
            {t("DELETE_POST.ROUTE")}
          </Link>
        </>
      ) : (
        <Link to="/login" className={classes.navLink}>
          {t("LOGIN.ROUTE")}
        </Link>
      )}

      {!currentUser && (
        <Link to="/login" className={classes.navLink}>
          {t("LOGIN.ROUTE")}
        </Link>
      )}
    </nav>
  );
};
