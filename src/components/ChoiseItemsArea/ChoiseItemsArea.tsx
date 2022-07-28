import styles from "./ChoiseItemsArea.module.css";
import React from "react";

interface StoreItemI {
    id: number,
    itemMessage: string
}

const store: StoreItemI[] = [
    {id: 1, itemMessage: 'Справка о не судимости'},
    {id: 2, itemMessage: 'Локдаун'},
    {id: 3, itemMessage: 'Тусим'},
    {id: 4, itemMessage: 'Ищу работу'},
    {id: 5, itemMessage: 'Какая то информация'},
    {id: 6, itemMessage: 'Локдаун'},
    {id: 7, itemMessage: 'Конец'},
]


const ChoiceItemsArea = () => {
    return <section hidden className={styles.background}>
        {store.map((p) => (
            <button className={styles.button} key={p.id}>{p.itemMessage}</button>
        ))}
       <button className={styles.buttonEnd}>Ещe</button>
    </section>
}

export default ChoiceItemsArea;