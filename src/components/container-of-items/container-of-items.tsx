import styles from "./container-of-items.module.css";
import React, { useState } from "react";
import Post from "./post/post";
import { store as storeMeow } from "../../store/data";

const store = storeMeow;

const ContainerOfItems = () => {
  const isTablet = window.matchMedia("(max-width: 1279px)").matches;
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  let number = 6;
  if (isTablet) number = 4;
  if (isMobile) number = 3;

  const [visibleData, setVisibleData] = useState(number);

  let postElements = store
    .slice(visibleData - number, visibleData)
    .map((p) => <Post key={p.id} info={p.info} image={p.image} />);

  const toggleVisibleData = () => {
    setVisibleData((visible) => visible + Math.floor(number / 2));
  };

  const toggleUnVisible = () => {
    setVisibleData(number);
  };

  const condition = !(visibleData === store.length);

  return (
    <section className={styles.container}>
      {postElements}
      {condition ? (
        <button onClick={toggleVisibleData} className={styles.endButton}>
          Ещё
        </button>
      ) : (
        <button onClick={toggleUnVisible} className={styles.endButton}>
          Закрыть
        </button>
      )}
    </section>
  );
};

export default ContainerOfItems;
