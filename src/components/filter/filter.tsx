import React, { useState } from "react";
import classNames from "classnames";
import { useSearchParams } from "react-router-dom";

import Tag from "./tag/tag";
import { store as storeMeow } from "../../store/data";

import styles from "./filter.module.scss";

const store = storeMeow;

const Filter = () => {
  const [searchParams] = useSearchParams();
  const tagQuery = searchParams.get("tag") || "";

  const isDesktop = !window.matchMedia("(max-width: 999px)").matches;

  const number = isDesktop ? 6 : store.length;

  const [visible, setVisible] = useState(number);

  const removeDuplicates = () => {
    const arr: Array<string> = [];
    store.forEach((el) => {
      if (!arr.find((t) => t === el.tag)) {
        arr.push(el.tag);
      }
    });
    return arr;
  };

  const store1 = removeDuplicates();

  const toggleVisible = () => {
    setVisible(store1.length);
  };

  const toggleUnVisible = () => {
    setVisible(number);
  };

  const isOpened = visible === store1.length;
  const nameButtonEnd = isOpened ? "Скрыть" : "Ещe"; //need this condition in link?

  return (
    <section className={styles.container}>
      {store1.slice(0, visible).map((tag) => (
        <Tag key={tag} tag={tag} isActive={tagQuery === tag} />
      ))}
      {/*{store1.slice(0, visible).map((tag) => {*/}
      {/*  const isActive =  tagQuery === tag*/}
      {/*  return <Tag key={tag} tag={tag} isActive={isActive} />;*/}
      {/*})}*/}
      {isDesktop && (
        <button
          className={classNames(styles.buttonEnd, styles.buttonGeneral)}
          onClick={isOpened ? toggleUnVisible : toggleVisible}
        >
          {nameButtonEnd}
        </button>
      )}
    </section>
  );
};

export { Filter };
