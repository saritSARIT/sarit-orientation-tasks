import { FC, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { useStyles } from "./styles";
import { createUser } from "../../api/users";

export const CreateUserPage: FC = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [displayedName, setDisplayedName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await createUser({ username, displayedName });
      setUsername("");
      setDisplayedName("");
      alert("User created successfully!");
    } catch (err: any) {
      setError(err.message || "Error creating user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <h1 className={classes.title}>Create User</h1>
        <form className={classes.form} onSubmit={handleSubmit}>
          <input
            className={classes.input}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className={classes.input}
            placeholder="Displayed Name"
            value={displayedName}
            onChange={(e) => setDisplayedName(e.target.value)}
            required
          />
          <button className={classes.button} type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create User"}
          </button>
          {error && <p className={classes.error}>{error}</p>}
        </form>
      </div>
    </>
  );
};
