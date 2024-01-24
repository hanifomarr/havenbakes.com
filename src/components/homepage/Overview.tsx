import React, { useEffect } from "react";
import styles from "./overview.module.css";
import Lenis from "@studio-freight/lenis";
import ZoomParallax from "../zoomParallax/ZoomParallax";

const Overview = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className={styles.main}>
      <ZoomParallax />
    </div>
  );
};

export default Overview;
