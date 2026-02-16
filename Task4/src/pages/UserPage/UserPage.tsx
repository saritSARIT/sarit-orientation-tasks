import type { FC } from "react";
import type { User } from "../../types/user";
import { getUsers } from "@api/users";
import { useStyles } from "./styles";
import Loader from "@components/Loader";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { pipe, sortBy, map } from "lodash/fp";

export const UserPage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "PAGES" });

  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const renderedUsers = pipe(
    sortBy("username"),
    map((user: User) => (
      <div key={user._id} className={classes.card}>
        <h3 className={classes.username}>{user.username}</h3>
        <p className={classes.displayedName}>{user.displayedName}</p>
      </div>
    )),
  )(users);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{t("USER.TITLE")}</h1>

      {isLoading ? (
        <Loader />
      ) : error instanceof Error ? (
        <p>{error.message}</p>
      ) : (
        <div className={classes.list}>{renderedUsers}</div>
      )}
    </div>
  );
};
