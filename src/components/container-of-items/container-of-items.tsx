import styles from "./container-of-items.module.css";
import certificate from "./../../assets/Photos/certificatOfGoodConduct.svg";
import React, { useState } from "react";
import Post from "./post";

const store = [
  {
    id: 1,
    info: "Как заказать справку об отсутствии судимости в РФ 1",
    image: certificate,
  },
  {
    id: 2,
    info: "Как найти себя 2",
    image: certificate,
  },
  {
    id: 3,
    info: "Как пойти позавтракать 3",
    image: certificate,
  },
  {
    id: 4,
    info: "Как научиться готовить 4",
    image: certificate,
  },
  {
    id: 5,
    info: "Как научиться прыгать выше неба 5",
    image: certificate,
  },
  {
    id: 6,
    info: "Как научиться смеяться 6",
    image: certificate,
  },
  {
    id: 7,
    info: "Как научиться готовить 7",
    image: certificate,
  },
  {
    id: 8,
    info: "Как научиться прыгать выше неба 8",
    image: certificate,
  },
  {
    id: 9,
    info: "Как научиться смеяться 9",
    image: certificate,
  },
  {
    id: 10,
    info: "Как научиться готовить 10",
    image: certificate,
  },
  {
    id: 11,
    info: "Как научиться прыгать выше неба 11",
    image: certificate,
  },
  {
    id: 12,
    info: "Как научиться смеяться 12",
    image: certificate,
  },
];

const ContainerOfItems = () => {

  const isTablet = window.matchMedia("(max-width: 1279px)").matches;
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  let number = 6;
  if (isTablet) {
    number = 4;
  }
  if (isMobile) {
    number = 3;
  }

  const [visibleData, setVisibleData] = useState(number);

  let postElements = store
    .slice(visibleData - number, visibleData)
    .map((p) => (
      <Post key={p.id} info={p.info} image={p.image} />
    ));

  const toggleVisibleData = () => {
    setVisibleData((visible) => visible + Math.floor(number/2));
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
