import React from "react";
import styles from "./App.module.css";
import SearchHeader from "./components/search-header/search-header/search-header";
import ContactWithUs from "./components/search-header/contact-with-us/contact-with-us";
import Posts from "./components/posts/posts";
import Filter from "./components/filter/filter";

function App() {
  const isTablet = window.matchMedia("(max-width: 1279px)").matches;
  const isMiniTablet = window.matchMedia("(max-width: 999px)").matches;

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <SearchHeader />
        {!isTablet && <Filter />}
        {isMiniTablet && <ContactWithUs />}
        <Posts />
      </div>
    </div>
  );
}

export default App;
