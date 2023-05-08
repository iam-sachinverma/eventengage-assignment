"use client";

import styles from "./banner.module.scss";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function Banner() {
  const isMobile = useMediaQuery({
    query: "(max-width: 45em)",
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
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
      <div className={styles.brand_logo}>
        <div className={styles.logo_1}>
          <Image
            src="/wework.png"
            alt="banner"
            width={!isMobile ? 70 : 35}
            height={!isMobile ? 70 : 35}
            quality={100}
          />
        </div>
        <span>
          <Image
            src="/plus.svg"
            alt="banner"
            width={!isMobile ? 18 : 10}
            height={!isMobile ? 18 : 10}
            quality={100}
          />
        </span>
        <div className={styles.logo_2}>
          <Image
            src="/slaesforce.png"
            alt="banner"
            width={!isMobile ? 90 : 40}
            height={!isMobile ? 90 : 40}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
