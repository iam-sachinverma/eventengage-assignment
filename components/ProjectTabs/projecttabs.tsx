"use client";

import React, { useState } from "react";
import { Tabs } from "antd";
import styles from "./projecttabs.module.scss";
import { TabContent } from "./tabcontent";

import { useMediaQuery } from "react-responsive";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const initialItems = [
  {
    label: "Basic Info",
    // children: "Content of Tab 1",
    key: "1",
    closable: false,
  },
  { label: "Files", children: "Content of Tab 2", key: "2", closable: false },
  {
    label: "Mutual Action Plan",
    // children: "Content of Tab 3",
    key: "3",
    closable: false,
  },
  {
    label: "Contact",
    // children: "Content of Tab 4",
    key: "4",
    closable: false,
  },
];

const ProjectTabs: React.FC = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [items, setItems] = useState(initialItems);

  const isMobile = useMediaQuery({
    query: "(max-width: 45em)",
  });

  const { TabPane } = Tabs;

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  return (
    <div className={styles.project_tabs}>
      <div className={styles.tab}>
        <Tabs
          type="card"
          onChange={onChange}
          activeKey={activeKey}
          items={items}
          size={isMobile ? "small" : "large"}
          tabBarGutter={5}
        />
        {/* <Tabs
          type="card"
          onChange={onChange}
          activeKey={"1"}
          size={isMobile ? "small" : "large"}
          tabBarGutter={5}
        >
          <TabPane tab="Basic Info" key="1">
            <TabContent />
          </TabPane>
          <TabPane tab="Files" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Mutual Action Plan" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Contact" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs> */}
      </div>

      <div className={styles.desktop}>
        <Tabs
          type="card"
          activeKey="0"
          size="large"
          tabBarStyle={{ backgroundColor: "#f2fbf9" }}
          items={[
            {
              label: `Internal Actions`,
              key: "1",
              closable: false,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectTabs;
