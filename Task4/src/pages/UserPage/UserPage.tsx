import type { FC } from "react";
import type { User } from "../../types/user";
import { getUsers } from "@api/users";
import { useStyles } from "./styles";
import Loader from "@components/Loader";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { isNil, map } from "lodash/fp";
import { queryKeys } from "@api/queryKeys";

export const UserPage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "PAGES.USER" });

  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: queryKeys.users.all,
    queryFn: getUsers,
  });

  const renderedUsers = map((user: User) => (
    <li key={user._id} className={classes.card}>
      <h3 className={classes.username}>{user.username}</h3>
      <p className={classes.displayedName}>{user.displayedName}</p>
    </li>
  ))(users);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{t("TITLE")}</h1>
      {isNil(isLoading) && <Loader />}
      {!isNil(error) && <p>{error.message}</p>}
      <ul className={classes.list}>{renderedUsers}</ul>
    </div>
  );
};
