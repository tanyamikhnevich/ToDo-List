import React from "react";
import styles from "./App.module.css";
import SearchHeader from "./components/search-header/search-header";
import ChoiceItemsArea from "./components/choise-items-area/choise-items-area";
import ContainerOfItems from "./components/container-of-items/container-of-items";
import ContactWithUs from "./components/search-header/contact-with-us";

// 1) назвать папочки и файлы search-header название папки +++

function App() {
  const isTablet = window.matchMedia("(max-width: 1279px)").matches;
    const isMiniTablet = window.matchMedia("(max-width: 999px)").matches;

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <SearchHeader />
        {/*<ConnectWithUs/>*/}
        {!isTablet && <ChoiceItemsArea />}
          {isMiniTablet && <ContactWithUs />}
        <ContainerOfItems />
      </div>
    </div>
  );
}

export default App;
