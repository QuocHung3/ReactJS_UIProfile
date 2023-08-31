import clsx from "clsx";

import { useSpring, animated } from "react-spring";
import styles from "./FadeLeft.module.scss";
const FadeLeft = ({ children }) => {
  // props support animation fade left
  const props = useSpring({
    opacity: 1,
    transform: "translate(0px, 0px)",
    config: {
      duration: 400,
    },
    from: { opacity: 0, transform: "translate(-60px, 0px)" },
  });

  return (
    <animated.div className={clsx(styles.container)} style={props}>
      {children}
    </animated.div>
  );
};

export default FadeLeft;
