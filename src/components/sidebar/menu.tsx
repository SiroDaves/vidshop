import React from "react";
import { FaHome } from "react-icons/fa";
import { BsCameraVideo, BsPeople } from "react-icons/bs";

import Tab from "./tab";
import styles from "../../styles/Menu.module.scss";

function Menu() {
  return (
    <nav className={styles.sidebar_tabs}>
      <Tab  Icon={FaHome}>
        For you
      </Tab>
      <Tab Icon={BsPeople}>
        Following
      </Tab>
      <Tab Icon={BsCameraVideo}>
        Live
      </Tab>
    </nav>
  );
}

export default Menu;
