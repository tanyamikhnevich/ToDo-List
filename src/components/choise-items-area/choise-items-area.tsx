import styles from "./choise-items-area.module.css";
import React, { useState } from "react";
import classNames from "classnames";
import Item from "../container-of-items/Item";

interface StoreItemI {
  id: number;
  itemMessage: string;
}

const store: StoreItemI[] = [
  { id: 1, itemMessage: "Справка о не судимости 1" },
  { id: 2, itemMessage: "Локдаун 2" },
  { id: 3, itemMessage: "Тусим 3" },
  { id: 4, itemMessage: "Ищу работу 4" },
  { id: 5, itemMessage: "Какая то информация 5" },
  { id: 6, itemMessage: "Локдаун 6" },
  { id: 7, itemMessage: "Локдаун 7" },
  { id: 8, itemMessage: "Локдаун 8" },
  { id: 9, itemMessage: "Локдаун 9" },
  { id: 10, itemMessage: "Локдаун 10" },
  { id: 11, itemMessage: "Локдаун 11" },
  { id: 12, itemMessage: "Локдаун 12" },
  { id: 13, itemMessage: "Локдаун 13" },
];

// background => container ++
// При клике на кнопку еще будут показываться внизу все элементы, название кнопки меняется на Скрыть

const ChoiceItemsArea = () => {
  let number = 6;
  const isMiniTablet = !window.matchMedia("(min-width: 999px)").matches;

  {isMiniTablet? (number = store.length): (number = 6)}

  const [visible, setVisible] = useState(number);

  let itemElements = store
    .slice(0, visible)
    .map((p) => <Item key={p.id} itemMessage={p.itemMessage} />);

  const toggleVisible = () => {
    setVisible(store.length);
  };

  const toggleUnVisible = () => {
    setVisible(number);
  };

  const condition = !(visible === store.length);

  return (
    <section className={styles.container}>
      {itemElements}
      {isMiniTablet? (<></>) : (
          condition ? (
                <button
                    onClick={toggleVisible}
                    className={classNames(styles.buttonEnd, styles.buttonGeneral)}
                >
                  Ещe
                </button>
            ) : (
                <button
                    onClick={toggleUnVisible}
                    className={classNames(styles.buttonEnd, styles.buttonGeneral)}
                >
                  Скрыть
                </button>
            )
      )}
    </section>
  );
};

export default ChoiceItemsArea;
