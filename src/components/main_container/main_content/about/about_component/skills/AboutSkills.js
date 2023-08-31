import clsx from "clsx";
import ProgressBar from "@ramonak/react-progress-bar";

import styles from "./AboutSkills.module.scss";

const AboutSkills = () => {
  return (
    <>
      {/* skills block  */}
      <div className={clsx(styles.skillsContainer)}>
        <div className={clsx(styles.skillsSection)}>
          <h2 className={clsx(styles.skillsTitle)}>Programming Skills</h2>
          <div className={clsx(styles.skillsItem)}>
            <h3 className={clsx(styles.itemTitle)}>WordPress</h3>
            <ProgressBar
              completed={95}
              bgColor="#eee"
              height="10px"
              borderRadius="0px"
              baseBgColor="#8a8a8a"
              labelColor="#fff"
              labelSize="0.5rem"
              labelAlignment="outside"
            />
            <h3 className={clsx(styles.itemTitle)}>JavaScript</h3>
            <ProgressBar
              completed={80}
              bgColor="#eee"
              height="10px"
              borderRadius="0px"
              baseBgColor="#8a8a8a"
              labelColor="#fff"
              labelSize="0.5rem"
              labelAlignment="outside"
            />
            <h3 className={clsx(styles.itemTitle)}>Angular</h3>
            <ProgressBar
              completed={90}
              bgColor="#eee"
              height="10px"
              borderRadius="0px"
              baseBgColor="#8a8a8a"
              labelColor="#fff"
              labelSize="0.5rem"
              labelAlignment="outside"
            />
          </div>
        </div>

        <div className={clsx(styles.skillsSection)}>
          <h2 className={clsx(styles.skillsTitle)}>Language Skills</h2>
          <div className={clsx(styles.skillsItem)}>
            <h3 className={clsx(styles.itemTitle)}>English</h3>
            <ProgressBar
              completed={85}
              bgColor="#eee"
              height="10px"
              borderRadius="0px"
              baseBgColor="#8a8a8a"
              labelColor="#fff"
              labelSize="0.5rem"
              labelAlignment="outside"
            />
            <h3 className={clsx(styles.itemTitle)}>Russian</h3>
            <ProgressBar
              completed={90}
              bgColor="#eee"
              height="10px"
              borderRadius="0px"
              baseBgColor="#8a8a8a"
              labelColor="#fff"
              labelSize="0.5rem"
              labelAlignment="outside"
            />
            <h3 className={clsx(styles.itemTitle)}>Arabic</h3>
            <ProgressBar
              completed={80}
              bgColor="#eee"
              height="10px"
              borderRadius="0px"
              baseBgColor="#8a8a8a"
              labelColor="#fff"
              labelSize="0.5rem"
              labelAlignment="outside"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSkills;
