"use client";

import React from "react";
import Image from "next/image";

import { Layout } from "antd";

import styles from "./tabcontent.module.scss";

const { Content, Footer, Sider } = Layout;

export function TabContent() {
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
              <a href="#">Overview</a>
            </li>
            <li className="sidebar-menu-item">
              <a href="#">Welcome</a>
            </li>
            <li className="sidebar-menu-item">
              <a href="#">Product Capabilities</a>
            </li>
            <li className="sidebar-menu-item">
              <a href="#">Customer Success Stories</a>
            </li>
            <li className="sidebar-menu-item">
              <a href="#">File Sharing</a>
            </li>
            <li className="sidebar-menu-item">
              <a href="#">Our Deck</a>
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
        </div>
        <Content>
          <div className={styles.image_container}>
            {/* <div className={styles.overlay_text}>
              <h2>we work</h2>
              <p>For all the ways you work, we're here</p>
            </div> */}
            {/* <div className={styles.button_group}>
              <button>Button 1</button>
              <button>Button 2</button>
              <button>Button 3</button>
              <button>Button 3</button>
            </div> */}
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
