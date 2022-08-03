import styles from "./search-header.module.scss";
import ContactWithUs from "../contact-with-us/contact-with-us";
import Filter from "../../filter/filter";
import React, { useState } from "react";

const SearchHeader = () => {
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
        {justTablet && <Filter />}
        {isMobile && isVisible && <Filter />}
        <button
          onClick={() => setIsVisible((visible) => !visible)}
          className={styles.buttonSeeTags}
        >
          {!isVisible ? "Показать теги" : "Скрыть теги"}
        </button>
      </div>
      {!isMobile && isVisible && <Filter />}
      {isMiniTablet && <ContactWithUs />}
    </section>
  );
};

export default SearchHeader;
