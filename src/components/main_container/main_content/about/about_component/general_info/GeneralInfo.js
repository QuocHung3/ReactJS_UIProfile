import clsx from "clsx";

import styles from "./GeneralInfo.module.scss";

// general infomation include name, job ,description
const GeneralInfo = () => {
  return (
    <>
      {/* name  tag*/}
      <h2 className={clsx(styles.about_infoName)}>Adriano Smith</h2>
      {/* job tag*/}
      <h3 className={clsx(styles.about_infoJob)}>Web Devoloper</h3>
      {/* description tag */}
      <p className={clsx(styles.about_infoDesc)}>
        Hi, my name is Adriano Smith and I began using WordPress when it first
        began. I’ve spent most of my waking hours for the last ten years
        designing, programming and operating WordPress sites.
        <br />
        <br />
        One of my specialties is taking an idea from scratch and creating a
        full-fledged platform. I go beyond to produce sites with a unique,
        outstanding, contemporary look-and-feel. With extensive knowledge of web
        mechanics, I’m able to optimize complex integrations to require
        little-to-no maintenance while running on their own for years.
      </p>
    </>
  );
};

export default GeneralInfo;
