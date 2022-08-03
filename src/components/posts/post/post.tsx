import React from "react";
import styles from "./post.module.scss";
import {ArrType} from "../../../store/data";


const Post = (props: ArrType) => {
  return (
    <div className={styles.itemsContainer}>
      <img src={props.image} className={styles.image} alt="certificate" />
      <div className={styles.description}>{props.info}</div>
    </div>
  );
};

export default Post;
