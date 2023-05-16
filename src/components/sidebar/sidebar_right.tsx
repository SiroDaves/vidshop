import React from "react";
import Link from "next/link";
import { Button, Modal as AntModal } from "antd";
import { useSelector } from "react-redux";
import { useAuth } from "../../context/AuthContext";

import Menu from "./menu";
import styles from "../../styles/Sidebar.module.scss";
import SuggestedList from "./suggested";

function SidebarRight() {
  const { currentUser } = useAuth()

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_scrollbar}>
        <Menu />
        <hr className={styles.hr} />

        <div className={styles.sidebar_login_wrapper}>
          <div className={styles.sidebar_login}>
            <p className={styles.login_tip}>
              Log in to follow creators, like videos, and view comments.
            </p>
            <Link href='/login'>
              <Button className={styles.button_login}>
                Log in
              </Button>
            </Link>
          </div>
          <hr className={styles.hr} />
        </div>

        {/*<SuggestedList />*/}
      </div>
    </div>
  );
}

export default SidebarRight;
