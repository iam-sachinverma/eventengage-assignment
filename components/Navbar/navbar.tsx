"use client";

import styles from "./navbar.module.scss";
import "./navbar.module.scss";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    event.preventDefault();
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header
      className={`${styles.header} ${isMobileNavOpen ? styles.active : " "}`}
    >
      <div className={styles.logo}>
        <a
          href="https://github.com/iam-sachinverma/eventengage-assignment"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/logo.svg" alt="Logo" width={40} height={40} priority />
        </a>
        <span className="material-icons-round arrow-right">chevron_right</span>
      </div>

      <nav className={styles.navbar}>
        <ul className={styles.navbar_list}>
          <li>
            <div>
              <a
                className={styles.navbar_link}
                href="https://github.com/iam-sachinverma/eventengage-assignment"
              >
                <Image
                  src="/search.svg"
                  alt="Logo"
                  width={30}
                  height={30}
                  priority
                />
              </a>
            </div>

            <span className={styles.navbar_text}>Search</span>
          </li>
          <li>
            <div>
              <a
                className={styles.navbar_link}
                href="https://github.com/iam-sachinverma/eventengage-assignment"
              >
                <Image
                  src="/mail.svg"
                  alt="Logo"
                  width={30}
                  height={30}
                  priority
                />
              </a>
            </div>

            <span className={styles.navbar_text}>Inbox</span>
          </li>
          <li>
            <div className={styles.navbar_icon_wrapper}>
              <a
                className={styles.navbar_link}
                href="https://github.com/iam-sachinverma/eventengage-assignment"
              >
                <Image
                  src="/bell.svg"
                  alt="Logo"
                  width={30}
                  height={30}
                  priority
                />
              </a>
              <div className={styles.notification_badge}>
                <span>25</span>
              </div>
            </div>
            <span className={styles.navbar_text}>Notifications</span>
          </li>
          <li>
            <div>
              <a
                className={styles.navbar_link}
                href="https://github.com/iam-sachinverma/eventengage-assignment"
              >
                <Image
                  src="/question.svg"
                  alt="Logo"
                  width={30}
                  height={30}
                  priority
                />
              </a>
            </div>

            <span className={styles.navbar_text}>Help</span>
          </li>
          <li>
            <div>
              <a
                href="https://github.com/iam-sachinverma/eventengage-assignment"
                className={styles.navbar_link}
              >
                <Image
                  src="/avatar.svg"
                  alt="Logo"
                  width={45}
                  height={45}
                  priority
                />
              </a>
            </div>
            <div className={styles.navbar_text}>
              <h4>jane smith</h4>
              <p>Sales Executive</p>
            </div>
          </li>
        </ul>
      </nav>

      <div className={styles.mobile_navbar_btn}>
        <a
          href="https://github.com/iam-sachinverma/eventengage-assignment"
          className={styles.mobile_nav_icon}
          onClick={toggleMobileNav}
        >
          <span className="material-icons-round" data-name="close-outline">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 10.75L2.875 16.875C2.64583 17.1042 2.35417 17.2188 2 17.2188C1.64583 17.2188 1.35417 17.1042 1.125 16.875C0.895833 16.6458 0.78125 16.3542 0.78125 16C0.78125 15.6458 0.895833 15.3542 1.125 15.125L7.25 9L1.125 2.875C0.895833 2.64583 0.78125 2.35417 0.78125 2C0.78125 1.64583 0.895833 1.35417 1.125 1.125C1.35417 0.895833 1.64583 0.78125 2 0.78125C2.35417 0.78125 2.64583 0.895833 2.875 1.125L9 7.25L15.125 1.125C15.3542 0.895833 15.6458 0.78125 16 0.78125C16.3542 0.78125 16.6458 0.895833 16.875 1.125C17.1042 1.35417 17.2188 1.64583 17.2188 2C17.2188 2.35417 17.1042 2.64583 16.875 2.875L10.75 9L16.875 15.125C17.1042 15.3542 17.2188 15.6458 17.2188 16C17.2188 16.3542 17.1042 16.6458 16.875 16.875C16.6458 17.1042 16.3542 17.2188 16 17.2188C15.6458 17.2188 15.3542 17.1042 15.125 16.875L9 10.75Z"
                fill="#657372"
              />
            </svg>
          </span>
        </a>
        <a
          href="https://github.com/iam-sachinverma/eventengage-assignment"
          className={styles.mobile_nav_icon}
          onClick={toggleMobileNav}
        >
          <span className="material-icons-round" data-name="menu-outline">
            <svg
              width="40"
              height="40"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.125 7.1875C2.125 6.66974 2.54474 6.25 3.0625 6.25H26.5625C27.0802 6.25 27.5 6.66974 27.5 7.1875C27.5 7.70526 27.0802 8.125 26.5625 8.125H3.0625C2.54474 8.125 2.125 7.70526 2.125 7.1875ZM3.0625 23.4375C3.0625 22.9198 3.48224 22.5 4 22.5H26C26.5177 22.5 26.9375 22.9198 26.9375 23.4375C26.9375 23.9552 26.5177 24.375 26 24.375H4C3.48224 24.375 3.0625 23.9552 3.0625 23.4375ZM3.4375 14.375C2.91974 14.375 2.5 14.7948 2.5 15.3125C2.5 15.8302 2.91974 16.25 3.4375 16.25H26.5625C27.0802 16.25 27.5 15.8302 27.5 15.3125C27.5 14.7948 27.0802 14.375 26.5625 14.375H3.4375Z"
                fill="#657372"
              />
            </svg>
          </span>
        </a>
      </div>
    </header>
  );
}
