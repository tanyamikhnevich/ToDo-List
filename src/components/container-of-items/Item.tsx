import classNames from "classnames";
import styles from "../choise-items-area/choise-items-area.module.css";
import React from "react";

interface StoreItemI {
  itemMessage: string;
}
const Item = (props:StoreItemI) => {
  return (
    <button
      className={classNames(styles.button, styles.buttonGeneral)}
    >
      {props.itemMessage}
    </button>
  );
};

export default Item;