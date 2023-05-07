"use client";

import styles from "./banner.module.scss";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.brand_logo}>
        <Image src="/wework.png" alt="banner" fill quality={100} />
        <span>+</span>
        <Image src="/salesforce.png" alt="banner" fill quality={100} />
      </div>

      <div className={styles.desktop}>
        <Image src="/banner.png" alt="banner" fill quality={100} />
      </div>
      <div className={styles.medium}>
        <Image src="/medium_banner.png" alt="banner" fill quality={100} />
      </div>
      <div className={styles.mobile}>
        <Image src="/small_banner.png" alt="banner" fill quality={100} />
      </div>

      <div className={styles.banner_overlay}></div>
      <div className={styles.banner_content}>
        <h1>
          Workspace <br /> Proposal
        </h1>
      </div>
    </div>
  );
}
