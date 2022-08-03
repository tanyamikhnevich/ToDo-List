import React from "react";
import styles from "./App.module.css";
import { Posts, Filter, Search, ContactWithUs } from "components";

// исправить чтобы карточки друг за другом

function App() {
  const isTablet = window.matchMedia("(max-width: 1279px)").matches;
  const isMiniTablet = window.matchMedia("(max-width: 999px)").matches;

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Search />
        {!isTablet && <Filter />}
        {isMiniTablet && <ContactWithUs />}
        <Posts />
      </div>
    </div>
  );
}

// add => commit => pull
// => если есть conflicts (решаешь конфиликты => git add => commit (resolve conflicts))
// git push

// add => git stash => pull => git stash pop => решаешь конфликты если есть => делать свои дела

export default App;
