import classNames from "classnames";
import styles from "../../choise-items-area/choise-items-area.module.css";
import React from "react";
import {NavLink, useSearchParams} from "react-router-dom";

interface StoreItemI {
  tag: string;
}

const Item = (props: StoreItemI) => {
  const [searchParams, ] = useSearchParams();
  const tagQuery = searchParams.get('tag') || '';

  return (
    <button
      className={
        (tagQuery === props.tag)
          ? classNames(styles.button, styles.buttonGeneral, styles.buttonActive)
          : classNames(styles.button, styles.buttonGeneral)
      }
    >
      <NavLink className={
          (tagQuery === props.tag)
              ? classNames(styles.navlink, styles.navlinkActive)
              : classNames(styles.navlink)} to={`/?tag=${props.tag}`}>{props.tag}</NavLink>
    </button>
  );
};

export default Item;
