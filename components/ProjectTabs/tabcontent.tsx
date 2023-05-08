"use client";

import React from "react";
import Image from "next/image";

import { Layout, Dropdown } from "antd";
import type { MenuProps } from "antd";

import styles from "./tabcontent.module.scss";

const { Content, Footer, Sider } = Layout;

export function TabContent() {
  const onMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

  const items = [
    {
      key: "1",
      label: "Download",
    },
    {
      key: "2",
      label: "Hidden",
    },
    {
      key: "3",
      label: "Delete",
    },
  ];
  return (
    <Layout style={{ background: "#f2fbf9" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ backgroundColor: "#f2fbf9" }}
      >
        <div className={styles.sidebar}>
          <ul className={styles.sidebar_menu}>
            <li className="sidebar-menu-item">
              <a href="https://github.com/iam-sachinverma/eventengage-assignment">
                Overview
              </a>
            </li>
            <li className="sidebar-menu-item">
              <a href="https://github.com/iam-sachinverma/eventengage-assignment">
                Welcome
              </a>
            </li>
            <li className="sidebar-menu-item">
              <a href="https://github.com/iam-sachinverma/eventengage-assignment">
                Product Capabilities
              </a>
            </li>
            <li className="sidebar-menu-item">
              <a href="https://github.com/iam-sachinverma/eventengage-assignment">
                Customer Success Stories
              </a>
            </li>
            <li className="sidebar-menu-item">
              <a href="https://github.com/iam-sachinverma/eventengage-assignment">
                File Sharing
              </a>
            </li>
            <li className="sidebar-menu-item">
              <a href="https://github.com/iam-sachinverma/eventengage-assignment">
                Our Deck
              </a>
            </li>
          </ul>
        </div>
      </Sider>
      <Layout style={{ margin: "0 0 0 1.25rem", background: "#f2fbf9" }}>
        <div className={styles.heading_3}>
          <h2>Company Profile</h2>
          <div className={styles.button_group}>
            <button className="button">
              <Image src="/arrow.svg" alt="" width={24} height={24} />
            </button>
            <button className="button">
              <Image src="/eyeoff.svg" alt="" width={24} height={24} />
            </button>
            <button className="button">
              <Image src="/delete.svg" alt="" width={24} height={24} />
            </button>
          </div>
          <div className={styles.dropdown_button}>
            <Dropdown.Button
              menu={{ items, onClick: onMenuClick }}
              type="text"
              style={{
                transform: "rotate(90deg)",
              }}
            ></Dropdown.Button>
          </div>
        </div>
        <Content>
          <div className={styles.image_container}>
            <div className={styles.overlay_text}>
              <Image src="/wework-logo-2.png" alt="" width={192} height={45} />
              <p>For all the ways you work, we are here</p>
            </div>
            <div className={styles.button_group}>
              <button className="button">
                <Image src="/pdf.svg" alt="" width={24} height={24} />
                <span>1/15</span>
              </button>
              <button className="button">
                <Image src="/download.svg" alt="" width={24} height={24} />
              </button>
              <button className="button">
                <Image src="/zoom_out.svg" alt="" width={24} height={24} />
              </button>
              <button className="button">
                <Image src="/zoom_in.svg" alt="" width={24} height={24} />
              </button>
              <button className="button">
                <Image src="/open.svg" alt="" width={24} height={24} />
              </button>
            </div>
          </div>
        </Content>
        <Footer style={{ padding: "0", background: "#f2fbf9" }}>
          <div className={styles.footer_icon}>
            <div className={styles.footer_icon_wrapper}>
              <Image src="/chat.svg" alt="" width={30} height={30} />
              <div className={styles.chat_badge}>
                <span>8</span>
              </div>
            </div>
            <div className={styles.separator}></div>
            <Image src="/share.svg" alt="" width={30} height={30} />
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
}
