import styles from "./SearchHeaderForm.module.css";
import ChoiceItemsArea from "../ChoiseItemsArea/ChoiseItemsArea";


// backgroundArea => background
// убрать form из названий файлов


const SearchHeader = () => {

  const isTablet = window.matchMedia("(max-width: 1279px)").matches

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
      {isTablet && <ChoiceItemsArea />}
      <button className={styles.buttonContactWithUs}>Связаться с нами</button>
    </section>
  );
};

export default SearchHeader;
