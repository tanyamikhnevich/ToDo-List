import React from "react";
import styles from "./App.module.css";
import SearchHeader from "./components/SearchHeader/search-header-form";
import ChoiceItemsArea from "./components/ChoiseItemsArea/ChoiseItemsArea";
import ContainerOfItems from "./components/ContainerOfItems/ContainerOfItems";

// 1) назвать папочки и файлы search-header название папки

function App() {
  const isTablet = window.matchMedia("(max-width: 1279px)").matches;

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <SearchHeader />
        {/*<ConnectWithUs/>*/}
        {!isTablet && <ChoiceItemsArea />}
        <ContainerOfItems />
      </div>
    </div>
  );
}

export default App;
