import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@components/Navbar/Navbar";

export const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
