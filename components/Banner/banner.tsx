"use client";

import styles from "./banner.module.scss";
import Image from "next/image";

export default function Banner() {
  return (
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

      <div className={styles.brand_logo}>
        <div className={styles.logo_1}>
          <Image
            src="/wework.png"
            alt="banner"
            width={77}
            height={77}
            quality={100}
          />
        </div>
        <span>
          <Image
            src="/plus.svg"
            alt="banner"
            width={18}
            height={18}
            quality={100}
          />
        </span>
        <div className={styles.logo_2}>
          <Image
            src="/slaesforce.png"
            alt="banner"
            width={98}
            height={99}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
