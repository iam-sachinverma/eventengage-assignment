"use client";

import { Button } from "antd";
import Image from "next/image";
import styles from "./page.module.scss";

import Banner from "@/components/Banner/banner";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.page_top}>
        <div className={styles.heading_1}>
          <h1>WeWork + Salesforce</h1>
        </div>
        <Button
          style={{ backgroundColor: "#00B686", borderColor: "#00B686" }}
          type="primary"
        >
          Publish/Share
        </Button>
      </div>
      <div>
        <Banner />
      </div>
    </main>
  );
}
