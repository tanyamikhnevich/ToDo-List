import React from 'react';
import styles from './App.module.css';
import SearchHeader from "./components/SearchHeader/SearchHeaderForm";
import ChoiceItemsArea from "./components/ChoiseItemsArea/ChoiseItemsArea";
import ContainerOfItems from "./components/ContainerOfItems/ContainerOfItems";

//search-header название папки

function App() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
          <SearchHeader/>
          <ChoiceItemsArea/>
          <ContainerOfItems/>
      </div>
    </div>
  );
}

export default App;
