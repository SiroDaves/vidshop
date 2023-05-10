import React, { FC, MouseEvent } from "react"

import styles from "../../styles/Menu.module.scss"

interface TabProps {
  children: React.ReactNode;
  Icon: FC<React.SVGProps<SVGSVGElement>>;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const Tab: FC<TabProps> = ({ children, Icon, onClick }) => {
  return (
    <div className={styles.sidebar_tab} >
      <Icon className={styles.sidebar_icon} />
      <h2 className={styles.sidebar_title}>{children}</h2>
    </div>
  );
};

export default Tab;
