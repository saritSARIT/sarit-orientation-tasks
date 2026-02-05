import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import type { FC } from "react";

export const Navbar: FC = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      <Link to="/" className={classes.navLink}>
        HomePage
      </Link>
      <Link to="/Users" className={classes.navLink}>
        UserPage
      </Link>
      <Link to="/users/create" className={classes.navLink}>
        CreateUserPage
      </Link>
      <Link to="/posts" className={classes.navLink}>
        PostsPage
      </Link>
      <Link to="/posts/create" className={classes.navLink}>
        CreatePostPage
      </Link>
      <Link to="/posts/edit/:id" className={classes.navLink}>
        EditPostPage
      </Link>
      <Link to="/posts/delete/:id" className={classes.navLink}>
        DeletePostPage
      </Link>
    </nav>
  );
};
