import classNames from "classnames";
import styles from "./tag.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";

interface StoreTagI {
  tag: string;
  // tagQuery: string;
  isActive: boolean;
}

const Tag = (props: StoreTagI) => {
  return (
    <NavLink
      className={classNames(
        styles.button,
        styles.buttonGeneral,
        props.isActive && styles.buttonActive
      )}
      to={`/?tag=${props.tag}`}
    >
      {props.tag}
    </NavLink>
  );
};

// classNames(styles.general, {[styles.buttonActive]: props.tagQuery === props.tag})

export default Tag;
