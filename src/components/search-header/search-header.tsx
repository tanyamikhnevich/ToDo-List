import styles from "./search-header.module.scss";
import ContactWithUs from "./contact-with-us";
import ChoiceItemsArea from "../choise-items-area/choise-items-area";
import React, { useState } from "react";

const SearchHeader = () => {
  // const isTablet = window.matchMedia("(max-width: 1279px)").matches;
  const isMiniTablet = window.matchMedia("(min-width: 999px)").matches;
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  const justTablet =
    window.matchMedia("(max-width: 1279px)").matches &&
    window.matchMedia("(min-width: 999px)").matches;

  const [isVisible, setIsVisible] = useState(false);


  return (
    <section className={styles.background}>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input className={styles.input} placeholder="Поиск по Релопедии" />
        </div>
        {justTablet && <ChoiceItemsArea />}
        {isMobile && isVisible && <ChoiceItemsArea />}
        <button
          onClick={() => setIsVisible((visible) => !visible)}
          className={styles.buttonSeeTags}
        >
          {!isVisible ? "Показать теги" : "Скрыть теги"}
        </button>
      </div>
      {!isMobile && isVisible && <ChoiceItemsArea />}
      {isMiniTablet && <ContactWithUs />}
    </section>
  );
};

export default SearchHeader;
