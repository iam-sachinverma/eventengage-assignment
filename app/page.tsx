import { Button } from "antd";
import Image from "next/image";
import styles from "./page.module.scss";
import { Progress } from "antd";

import Banner from "@/components/Banner/banner";
import ProjectTabs from "@/components/ProjectTabs/projecttabs";

import { useMediaQuery } from "react-responsive";

import { TabContent } from "@/components/ProjectTabs/tabcontent";

export default function Home() {
  const isMobile = useMediaQuery({
    query: "(max-width: 45em)",
  });

  return (
    <main className={styles.container}>
      <div className={styles.page_top}>
        <div className={styles.heading_1}>
          <h1>
            WeWork <span>+</span> Salesforce
          </h1>
        </div>
        <Button
          style={{ backgroundColor: "#00B686", borderColor: "#00B686" }}
          type="primary"
          size={isMobile ? "middle" : "large"}
        >
          Publish/Share
        </Button>
      </div>

      <div className="banner-image">
        <Banner />
      </div>

      <div className={styles.heading_2}>
        <h2>Project Scope Recap</h2>
        <div className={styles.progess_bar}>
          <div className={styles.progess_label}>
            <span className={styles.progress_heading}>Mutual Action Plan</span>
            <span className={styles.progress_percentage}>3%</span>
          </div>
          <Progress
            percent={3}
            steps={17}
            showInfo={false}
            strokeColor={"#00B686"}
            trailColor={"#d3d7d7"}
            strokeWidth={10}
            strokeLinecap="round"
            size={isMobile ? 6 : 10}
            className={styles.ant_progress_inner}
          />
        </div>
      </div>

      <div className="project_scope_tabs">
        <ProjectTabs />
      </div>

      <TabContent />
    </main>
  );
}
