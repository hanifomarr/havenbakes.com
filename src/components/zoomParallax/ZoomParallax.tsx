import styles from "./styles.module.scss";
import Picture1 from "../../../public/images/apron.jpg";
import Image from "next/image";

export default function ZoomParallax() {
  return (
    <div className={styles.container}>
      <div className={styles.sticky}>
        <div className={styles.el}>
          <div className={styles.imageContainer}>
            <Image src={Picture1} fill alt="image" placeholder="blur" />
          </div>
        </div>
      </div>
    </div>
  );
}
