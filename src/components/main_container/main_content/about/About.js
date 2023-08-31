import { clsx } from "clsx";
import { useEffect, useState } from "react";

import styles from "./About.module.scss";
import Loading from "../../../global/components/loading/Loading";

import Skills from "./about_component/skills/AboutSkills";
import InfoDetails from "./about_component/info_details/InfoDetails";
import GeneralInfo from "./about_component/general_info/GeneralInfo";
import Header from "./about_component/header/Header";
import Knowledge from "./about_component/knowledge/Knowledge";
import Scrollbar from "../../../global/components/scrollbar/Scrollbar";
import FadeLeft from "../../../global/components/fadeLeft_animation/FadeLeft";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Scrollbar>
      <div>
        {isLoading ? (
          <Loading /> //loading component
        ) : (
          <FadeLeft>
            <div className={clsx(styles.about_container)}>
              {/* header component */}
              <Header />

              {/* infomation block */}
              <div className={clsx(styles.about_infoContainer)}>
                {/* general infomation component */}
                <GeneralInfo />

                {/* details infomation block */}
                <InfoDetails />

                {/* about skills component */}
                <Skills />

                {/* Knowledge component */}
                <Knowledge />
              </div>
            </div>
          </FadeLeft>
        )}
      </div>
    </Scrollbar>
  );
};

export default About;
