import styles from "./posts.module.scss";
import React, { useEffect, useState } from "react";
import Post from "./post/post";
import { store as storeMeow } from "store/data";
import { getMediaQuery } from "helpers/helpers";
import { useTagQuery } from "helpers/use-tag-query";

const store = storeMeow;

export const Posts = () => {
  const tagQuery = useTagQuery();

  const isTablet = getMediaQuery(1279);
  const isMobile = getMediaQuery(767);

  let number = 6;
  if (isTablet) {number = 4}
  if (isMobile) {number = 3}

  const [visibleData, setVisibleData] = useState(number);

  let lengthStore = store.filter((el) =>
    tagQuery === "" ? true : el.tag === tagQuery
  ).length;

  const toggleVisibleData = () => {
    setVisibleData((visible) => visible + Math.floor(number / 2));
  };

  const toggleUnVisible = () => {
    setVisibleData(number);
  };

  useEffect(() => {
    toggleUnVisible();
  }, [tagQuery]);

  const isAllVisible = visibleData >= lengthStore;

  return (
    <section className={styles.backgroundContainer}>
      <div className={styles.container}>
        {store
          .filter((el) => (tagQuery === "" ? true : el.tag === tagQuery))
          .slice(visibleData - number, visibleData)
          .map((post) => (
            <Post key={post.id} {...post} />
          ))}
      </div>
      <button
        onClick={!isAllVisible ? toggleVisibleData : toggleUnVisible}
        className={styles.endButton}
      >
        {!isAllVisible ? "Ещё" : "Закрыть"}
      </button>
    </section>
  );
};
