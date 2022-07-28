import styles from "./ChoiseItemsArea.module.css";
import React from "react";
import classNames from "classnames";

interface StoreItemI {
  id: number;
  itemMessage: string;
}

const store: StoreItemI[] = [
  { id: 1, itemMessage: "Справка о не судимости" },
  { id: 2, itemMessage: "Локдаун" },
  { id: 3, itemMessage: "Тусим" },
  { id: 4, itemMessage: "Ищу работу" },
  { id: 5, itemMessage: "Какая то информация" },
  { id: 6, itemMessage: "Локдаун" },
  { id: 7, itemMessage: "Конец" },
];

// background => container
// При клике на кнопку еще будут показываться внизу все элементы, название кнопки меняется на Скрыть

const ChoiceItemsArea = () => {
  return (
    <section hidden className={styles.background}>
      {store.map((p) => (
        <button
          className={classNames(styles.button, styles.buttonGeneral)}
          key={p.id}
        >
          {p.itemMessage}
        </button>
      ))}
      <button className={classNames(styles.buttonEnd, styles.buttonGeneral)}>
        Ещe
      </button>
    </section>
  );
};

export default ChoiceItemsArea;
