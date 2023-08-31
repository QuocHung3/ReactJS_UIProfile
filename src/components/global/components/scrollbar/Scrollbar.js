import clsx from "clsx";

import { Scrollbars } from "react-custom-scrollbars";
import styles from "./Scrollbar.module.scss";

const Scrollbar = ({ children }) => {
  return (
    <Scrollbars
      className={clsx(styles.scrollbar)}
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </Scrollbars>
  );
};

export default Scrollbar;
