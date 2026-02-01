import { FC } from 'react';
import {Navbar} from "../../components/Navbar/Navbar";
import { useStyles } from "./styles";

export const HomePage: FC = () => {
  const classes = useStyles();
  return (
   <>
    <Navbar />
    <h1 className={classes.title}>Hello you are welcome to choose the required category.</h1>
   </>
  );
};