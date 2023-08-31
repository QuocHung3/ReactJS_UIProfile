import clsx from "clsx";

import styles from "./Knowledge.module.scss";

const Knowledge = () => {
  return (
    <>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.section)}>
          <h3 className={clsx(styles.title)}>Knowledge</h3>
          <ul className={clsx(styles.list)}>
            <li className={clsx(styles.item)}>Bootstrap, Angular</li>
            <li className={clsx(styles.item)}>React, Vue, Laravel</li>
            <li className={clsx(styles.item)}>Stylus, Sass, Less</li>
            <li className={clsx(styles.item)}>Gulp, Webpack, Grunt</li>
            <li className={clsx(styles.item)}>Tweenmax, GSAP</li>
          </ul>
        </div>

        <div className={clsx(styles.section)}>
          <h3 className={clsx(styles.title)}>Interests</h3>
          <ul className={clsx(styles.list)}>
            <li className={clsx(styles.item)}>Make UI/UX Design</li>
            <li className={clsx(styles.item)}>Create Mobile App</li>
            <li className={clsx(styles.item)}>Site Optimization</li>
            <li className={clsx(styles.item)}>Custom Website</li>
            <li className={clsx(styles.item)}>Learn Ecommerce</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Knowledge;
