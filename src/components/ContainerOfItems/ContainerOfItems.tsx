import styles from "./ContainerOfItems.module.css";
import sertificate from "./../../assets/Photos/certificatOfGoodConduct.svg";
import React, { useState } from "react";

const store = [
  {
    id: 1,
    info: "Как заказать справку об отсутствии судимости в РФ 1",
    image: sertificate,
    hidden: false,
  },
  {
    id: 2,
    info: "Как найти себя 2",
    image: sertificate,
    hidden: false,
  },
  {
    id: 3,
    info: "Как пойти позавтракать 3",
    image: sertificate,
    hidden: false,
  },
  {
    id: 4,
    info: "Как научиться готовить 4",
    image: sertificate,
    hidden: false,
  },
  {
    id: 5,
    info: "Как научиться прыгать выше неба 5",
    image: sertificate,
    hidden: true,
  },
  {
    id: 6,
    info: "Как научиться смеяться 6",
    image: sertificate,
    hidden: true,
  },
  {
    id: 7,
    info: "Как научиться готовить 7",
    image: sertificate,
    hidden: false,
  },
  {
    id: 8,
    info: "Как научиться прыгать выше неба 8",
    image: sertificate,
    hidden: true,
  },
  {
    id: 9,
    info: "Как научиться смеяться 9",
    image: sertificate,
    hidden: true,
  },
  {
    id: 10,
    info: "Как научиться готовить 10",
    image: sertificate,
    hidden: false,
  },
  {
    id: 11,
    info: "Как научиться прыгать выше неба 11",
    image: sertificate,
    hidden: true,
  },
  {
    id: 12,
    info: "Как научиться смеяться 12",
    image: sertificate,
    hidden: true,
  },
];

type PropsType = {
  info: string;
  image: string;
  hidden: boolean;
};

// вынести в отдульную папку
const Post: React.FC<PropsType> = (props) => {
  return (
    <div hidden={props.hidden} className={styles.itemsContainer}>
      <img src={props.image} className={styles.image} />
      <div className={styles.description}>{props.info}</div>
    </div>
  );
};

const ContainerOfItems = () => {

  const [visibleData, setVisibleData] = useState(6);

  let postElements = store
    .slice(visibleData - 6, visibleData)
    .map((p) => (
      <Post key={p.id} info={p.info} image={p.image} hidden={p.hidden} />
    ));

  const toggleVisibleData = () => {
    setVisibleData((visible) => visible + 3);
  };

  const toggleUnVisible = () => {
    setVisibleData(6);
  };

  // вынести условие
  // background => container
  return (
    <section className={styles.background}>
      {postElements}
      {!(visibleData === store.length) ? (
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
