import styles from "./SearchHeaderForm.module.css";

const SearchHeader = () => {
  // container
  // title

  // h p section
  return (
    <section className={styles.backgroundArea}>
      <div className={styles.inputContainer}>
        <input className={styles.input} placeholder="Поиск по Релопедии" />
      </div>
      <button hidden className={styles.buttonSeeTags}>
        Показать теги
      </button>
      <p className={styles.text}>
        Есть вопрос, на который не нашли ответ? Просто напишите нам, и мы
        свяжемся с вами
      </p>
      <button className={styles.buttonContactWithUs}>Связаться с нами</button>
    </section>
  );
};

export default SearchHeader;
