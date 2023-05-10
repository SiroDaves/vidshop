import React from "react";
import PropTypes from "prop-types";
import AccountItem from "./account_item";
import styles from "../../styles/ListAccount.module.scss";

interface SuggestionProps {
  title: string;
  list: any[]; // replace `any` with the actual type of `list` items
  onClick?: () => void;
  perpage?: number;
}

function Suggestion({ title, list, onClick, perpage }: SuggestionProps) {
  return (
    <>
      <div className={styles.sidebar_list}>
        <p className={styles.account_title}>{title}</p>
        {list?.map((user) => (
          <AccountItem user={user} key={user.id} />
        ))}
        <div>
          <p className={styles.sidebar_seeAll} onClick={onClick}>
            {perpage === 20 || list.length < 5 ? "See less" : "See more"}
          </p>
        </div>
      </div>
      <hr className={styles.hr} />
    </>
  );
}

Suggestion.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  perpage: PropTypes.number,
};

export default Suggestion;
