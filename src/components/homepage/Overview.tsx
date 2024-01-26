import React from "react";
import styles from "./overview.module.css";

import ZoomParallax from "../zoomParallax/ZoomParallax";

const Overview = () => {
  return (
    <div className={styles.main}>
      <ZoomParallax />
    </div>
  );
};

export default Overview;
