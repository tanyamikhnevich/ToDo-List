import React from "react";
import styles from "../container-of-items.module.css";

type PropsType = {
    info: string;
    image: string;
};

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.itemsContainer}>
            <img src={props.image} className={styles.image} alt='certificate'/>
            <div className={styles.description}>{props.info}</div>
        </div>
    );
};

export default Post;