import React, { useState } from "react";

import { ContactWithUs, Filter } from "components/index";
import {getMediaQuery} from "../../helpers/helpers";

import styles from "./search-header.module.scss";


export const Search = () => {
  const isMiniTablet = !getMediaQuery(999);
  const isMobile = getMediaQuery(767);

  const justTablet = getMediaQuery(1279) && !getMediaQuery(999)

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