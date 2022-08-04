import React, { useState } from "react";
import classNames from "classnames";

import Tag from "./tag/tag";
import { store as storeMeow } from "../../store/data";
import {useTagQuery} from "../../helpers/use-tag-query";
import {getMediaQuery} from "../../helpers/helpers";

import styles from "./filter.module.scss";



const store = storeMeow;

const Filter = () => {
  const tagQuery = useTagQuery()

  const isDesktop = !getMediaQuery(999)

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
          {isOpened ? "Скрыть" : "Ещe"}
        </button>
      )}
    </section>
  );
};

export { Filter };
