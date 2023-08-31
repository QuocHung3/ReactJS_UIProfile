import clsx from "clsx";

import styles from "./Header.module.scss";
import aboutAvartar from "../../../../../../assets/imgs/wall1.jpg";

// header component include intro tag, title, image
const Header = () => {
  return (
    <>
      <div className={clsx(styles.about_introTagContainer)}>
        <div className={clsx(styles.about_introTag)}>ABOUT</div>
      </div>
      {/* title */}
      <div className={clsx(styles.about_titleContainer)}>
        <h1 className={clsx(styles.about_title)}>About Me</h1>
      </div>

      {/* image */}
      <div className={clsx(styles.about_imageContainer)}>
        <img className={clsx(styles.about_image)} src={aboutAvartar} alt="" />
      </div>
    </>
  );
};

export default Header;
