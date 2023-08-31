import { clsx } from "clsx";

import styles from "./Service.module.scss";

import FadeLeft from "../../../global/components/fadeLeft_animation/FadeLeft";
import Scrollbar from "../../../global/components/scrollbar/Scrollbar";
import Card from "./service_component/Card";

const Service = () => {
  return (
    <Scrollbar>
      <FadeLeft>
        <div className={clsx(styles.container)}>
          <div className={clsx(styles.introTag_container)}>
            <div className={clsx(styles.introTag)}>SERVICES</div>
          </div>
          <h1 className={clsx(styles.title)}>What I Do</h1>

          <div className={clsx(styles.card_frame)}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </FadeLeft>
    </Scrollbar>
  );
};

export default Service;
