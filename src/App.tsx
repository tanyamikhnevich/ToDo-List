import React from "react";
import styles from "./App.module.css";
import SearchHeader from "./components/search-header/search-header";
import ChoiceItemsArea from "./components/choise-items-area/choise-items-area";
import ContainerOfItems from "./components/container-of-items/container-of-items";
import ContactWithUs from "./components/search-header/contact-with-us";

// убрать border у Показать теги
// курсор на кнопках
// В SearchHeader исправить width на проценты
// В input search переделать лупу залупу с помощью before
// itemMessage => message
// прееименовать condition в ContainerOfItems и убрать ? :

// Задание: кликаешь на тег => меняется ссылка => идет фильтрация карточек
// react-router-dom (что такое query и как их получить, NavLink)
// const {query} = useRouter()
// const [tag, setTag] = useState('')
// useEffect(() => {
//   setTag(query.tag)
// }, [query])
// console.log(query.tag)
//<NavLink a={'/?tag=Пук'}></NavLink>

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
