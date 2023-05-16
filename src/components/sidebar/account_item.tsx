import React from "react"
import Image from "next/image"
import Link from "next/link"
import PropTypes from "prop-types"

import styles from "../../styles/AccountItem.module.scss"
import Verify from "../../assets/images/verify.svg"

interface AccountItemProps {
  user: {
    fullname: string;
    username: string;
    verified?: boolean;
  };
  onClick?: () => void;
}

function AccountItem({ user, onClick }: AccountItemProps) {
  return (
    <div onClick={onClick}>
      <Link href={``} className={styles.account_item} >
        <Image
          className={styles.account_item_avatar}
          src='/images/user.png'
          alt={user.fullname}
          width={50}
          height={50}
        />
        <div className={styles.account_item_info}>
          <div className={styles.account_item_username}>
            <span>{user.fullname}</span>
            {user.verified && (
              <Image
                className={styles.verify_author}
                src={Verify}
                alt=""
                width={16}
                height={16}
              />
            )}
          </div>
          <div className={styles.account_item_name}>
            {user.username}
          </div>
        </div>
      </Link>
    </div>
  );
}

AccountItem.propTypes = {
  user: PropTypes.shape({
    fullname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    verified: PropTypes.bool,
  }).isRequired,
  onClick: PropTypes.func,
};

export default AccountItem;
