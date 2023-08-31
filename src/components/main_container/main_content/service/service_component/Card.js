import clsx from "clsx";

import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.content)}>
        <div className={clsx(styles.indexContainer)}>
          <h3 className={clsx(styles.index)}>01</h3>
        </div>

        <h2 className={clsx(styles.title)}>Web Design</h2>
        <p className={clsx(styles.desc)}>
          Web development is the most famous job in the world and it is very
          interesting...
        </p>

        <h4 className={clsx(styles.moreBtn)}>READ MORE</h4>
      </div>
    </div>
  );
};

export default Card;
