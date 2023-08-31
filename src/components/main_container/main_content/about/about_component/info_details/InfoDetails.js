import clsx from "clsx";

import styles from "./InfoDetails.module.scss";

const InfoDetails = () => {
  return (
    <>
      <div className={clsx(styles.about_infoDetails)}>
        <div className={clsx(styles.about_detailsContainer)}>
          <div className={clsx(styles.about_detailsItem)}>
            <div className={clsx(styles.about_detailsLabel)}>Birth Day:</div>
            <div className={clsx(styles.about_detailsInfo)}>01.07.1990</div>
          </div>

          <div className={clsx(styles.about_detailsItem)}>
            <div className={clsx(styles.about_detailsLabel)}>Age:</div>
            <div className={clsx(styles.about_detailsInfo)}>32</div>
          </div>

          <div className={clsx(styles.about_detailsItem)}>
            <div className={clsx(styles.about_detailsLabel)}>Address:</div>
            <div className={clsx(styles.about_detailsInfo)}>
              Ave 11,New York,USA
            </div>
          </div>

          <div className={clsx(styles.about_detailsItem)}>
            <div className={clsx(styles.about_detailsLabel)}>Email:</div>
            <div className={clsx(styles.about_detailsInfo)}>
              tokyo@gmail.com
            </div>
          </div>

          <div className={clsx(styles.about_detailsItem)}>
            <div className={clsx(styles.about_detailsLabel)}>Phone:</div>
            <div className={clsx(styles.about_detailsInfo)}>
              +77 022 177 05 05
            </div>
          </div>
        </div>

        <div className={clsx(styles.about_detailsContainer)}>
          <div className={clsx(styles.about_detailsItem)}>
            <div className={clsx(styles.about_detailsLabel)}>Nationality:</div>
            <div className={clsx(styles.about_detailsInfo)}>USA</div>
          </div>

          <div className={clsx(styles.about_detailsItem)}>
            <div className={clsx(styles.about_detailsLabel)}>Study:</div>
            <div className={clsx(styles.about_detailsInfo)}>
              Univercity of Texas
            </div>
          </div>

          <div className={clsx(styles.about_detailsItem)}>
            <div className={clsx(styles.about_detailsLabel)}>Degree:</div>
            <div className={clsx(styles.about_detailsInfo)}>Master</div>
          </div>

          <div className={clsx(styles.about_detailsItem)}>
            <div className={clsx(styles.about_detailsLabel)}>Interest:</div>
            <div className={clsx(styles.about_detailsInfo)}>
              Playing Football
            </div>
          </div>

          <div className={clsx(styles.about_detailsItem)}>
            <div className={clsx(styles.about_detailsLabel)}>Freelance:</div>
            <div className={clsx(styles.about_detailsInfo)}>Available</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDetails;
