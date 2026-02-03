import { FC, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import type { User } from "../../types/user";
import { getUsers } from "../../api/users";
import { useStyles } from "./styles";
import Loader from "../../components/Loader";

export const UserPage: FC = () => {
  const classes = useStyles();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err: any) {
        setError(err.message || "Error fetching users");
      } finally {
        setLoading(false);
      }
    };
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
          !error && (
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
