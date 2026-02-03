import { motion, AnimatePresence } from "framer-motion";
import { useStyles } from "./styles";
import type { FC } from "react";

export const Loader: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.loaderContainer}>
      <AnimatePresence>
        <motion.div
          className={classes.loader}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </AnimatePresence>
    </div>
  );
};
