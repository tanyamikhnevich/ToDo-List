import React from "react";
import styles from "./App.module.css";
import { Posts, Filter, Search, ContactWithUs } from "components";
import {getMediaQuery} from "./helpers/helpers";


function App() {
  const isTablet = getMediaQuery(1279);
  const isMiniTablet = getMediaQuery(999);

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
