"use client";

import React, { useRef, useState } from "react";
import { Tabs } from "antd";
import styles from "./projecttabs.module.scss";

import { useMediaQuery } from "react-responsive";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const initialItems = [
  {
    label: "Basic Info",
    children: "Content of Tab 1",
    key: "1",
    closable: false,
  },
  { label: "Files", children: "Content of Tab 2", key: "2", closable: false },
  {
    label: "Mutual Action Plan",
    children: "Content of Tab 3",
    key: "3",
    closable: false,
  },
  {
    label: "Contact",
    children: "Content of Tab 4",
    key: "4",
    closable: false,
  },
];

const ProjectTabs: React.FC = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);

  const isMobile = useMediaQuery({
    query: "(max-width: 45em)",
  });

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
          tabBarStyle={{ backgroundColor: "#f2fbf9" }}
          size={isMobile ? "small" : "large"}
        />
      </div>

      <div className={styles.desktop}>
        <Tabs
          type="card"
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
