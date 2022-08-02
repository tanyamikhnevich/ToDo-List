import styles from "./choise-items-area.module.css";
import React, { useState } from "react";
import classNames from "classnames";
import Item from "../container-of-items/item/Item";
import { store as storeMeow } from "../../store/data";

const store = storeMeow;

const ChoiceItemsArea = () => {
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

  let itemElements = store1
    .slice(0, visible)
    .map((tag) => <Item key={tag} tag={tag} />);

  const toggleVisible = () => {
    setVisible(store1.length);
  };

  const toggleUnVisible = () => {
    setVisible(number);
  };

  const isOpened = visible === store1.length;

  return (
    <section className={styles.container}>
      {itemElements}
      {isDesktop && (
        <button
          onClick={isOpened ? toggleUnVisible : toggleVisible}
          className={classNames(styles.buttonEnd, styles.buttonGeneral)}
        >
          {isOpened ? "Скрыть" : "Ещe"}
        </button>
      )}
    </section>
  );
};

export default ChoiceItemsArea;

// return (
//   <section className={styles.container}>
//     {itemElements}
//     {isMiniTablet ? (
//       <></>
//     ) : condition ? (
//       <button
//         onClick={toggleVisible}
//         className={classNames(styles.buttonEnd, styles.buttonGeneral)}
//       >
//         Ещe
//       </button>
//     ) : (
//       <button
//         onClick={toggleUnVisible}
//         className={classNames(styles.buttonEnd, styles.buttonGeneral)}
//       >
//         Скрыть
//       </button>
//     )}
//   </section>
// );
