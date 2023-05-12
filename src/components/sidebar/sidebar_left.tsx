import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button, Modal as AntModal } from "antd";
import { useSelector } from "react-redux";
import { useAuth } from "../../context/AuthContext";

import Menu from "./menu";
import styles from "../../styles/Sidebar.module.scss";
import SuggestedList from "./suggested";

function SidebarLeft() {
  const { currentUser } = useAuth()

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_scrollbar}>
        <div className="flex flex-col items-center">
          <Link href="/">
            <Image src="/vidshop_logo.png" className="cursor-pointer" height="250" width="250" alt="logo" />
          </Link>
          <Link href="/">
            <Image src="/images/fashion.png" className="cursor-pointer rounded-md shadow-lg" height="200" width="200" alt="logo" />
          </Link>
          <br />
          <Link href="/">
            <Image src="/images/phones.png" className="cursor-pointer rounded-md shadow-lg" height="200" width="200" alt="logo" />
          </Link>
          <br />
          <Link href="/">
            <Image src="/images/cosmetics.png" className="cursor-pointer rounded-md shadow-lg" height="200" width="200" alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarLeft;
