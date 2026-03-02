import type { FC } from "react";
import { useStyles } from "./styles";

export const Loader: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.loader}>
      <div className={classes.animate} />
    </div>
  );
};
