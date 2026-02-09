import { type FC, useEffect, useState } from "react";
import { Navbar } from "@components/Navbar/Navbar";
import type { User } from "../../types/user";
import { getUsers } from "@api/users";
import { useStyles } from "./styles";
import Loader from "@components/Loader";
import { useMutation } from "@tanstack/react-query";
import { isNil } from "lodash";

export const UserPage: FC = () => {
  const classes = useStyles();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { mutate: fetchUsers } = useMutation({
    mutationKey: ["fetchUsers"],
    mutationFn: getUsers,
    onMutate: () => {
      setErrorMessage(null);
      setLoading(true);
    },
    onSuccess: (data: User[]) => {
      setUsers(data);
      setLoading(false);
    },
    onError: (error: any) => {
      setErrorMessage(error?.response?.data?.message ?? "Error fetching posts");
    },
  });

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <h1 className={classes.title}>User Page</h1>
        {loading ? (
          <Loader />
        ) : (
          isNil(errorMessage) && (
            <div className={classes.list}>
              {users.map((user) => (
                <div key={user._id} className={classes.card}>
                  <h3 className={classes.username}>{user.username}</h3>
                  <p className={classes.displayedName}>{user.displayedName}</p>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </>
  );
};
