import styles from "./posts.module.scss";
import React, { useEffect, useState } from "react";
import Post from "./post/post";
import { store as storeMeow } from "../../store/data";
import { useSearchParams } from "react-router-dom";

const store = storeMeow;

const Posts = () => {
  const [searchParams] = useSearchParams();
  const tagQuery = searchParams.get("tag") || "";

  const isTablet = window.matchMedia("(max-width: 1279px)").matches;
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  let number = 6;
  if (isTablet) number = 4;
  if (isMobile) number = 3;

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
  }, [searchParams]);

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

export default Posts;
