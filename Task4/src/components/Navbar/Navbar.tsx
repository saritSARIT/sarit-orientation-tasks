import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import type { FC } from "react";
import { ROUTES } from "../Navbar/consts";

export const Navbar: FC = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      <Link to={ROUTES.HOME} className={classes.navLink}>
        HomePage
      </Link>
      <Link to={ROUTES.USERS} className={classes.navLink}>
        UserPage
      </Link>
      <Link to={ROUTES.CREATE_USER} className={classes.navLink}>
        CreateUserPage
      </Link>
      <Link to={ROUTES.POSTS} className={classes.navLink}>
        PostsPage
      </Link>
      <Link to={ROUTES.CREATE_POST} className={classes.navLink}>
        CreatePostPage
      </Link>
      <Link to={ROUTES.EDIT_POST} className={classes.navLink}>
        EditPostPage
      </Link>
      <Link to={ROUTES.DELETE_POST} className={classes.navLink}>
        DeletePostPage
      </Link>
    </nav>
  );
};
