import classNames from "classnames";
import styles from "./tag.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";

interface StoreTagI {
  tag: string;
  tagQuery: string;
}

const Tag = (props: StoreTagI) => {
  return (
    <NavLink
      className={classNames(
        styles.button,
        styles.buttonGeneral,
        props.tagQuery === props.tag && styles.buttonActive
      )}
      to={`/?tag=${props.tag}`}
    >
      {props.tag}
    </NavLink>
  );
};

export default Tag;
