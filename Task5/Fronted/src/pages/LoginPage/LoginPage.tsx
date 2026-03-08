import type { FC } from "react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "@api/users";
import Loader from "@components/Loader";
import { useNavigate } from "react-router-dom";

export const LoginPage: FC = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const { mutate, isPending, error } = useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    },
  });

  return (
    <div>
      <h1>Login</h1>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />

      <button onClick={() => mutate(username)}>Login</button>

      {isPending && <Loader />}
      {error && <p>{error.message}</p>}
    </div>
  );
};