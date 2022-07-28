import styles from "./connect-with-us.module.scss";
import { useState } from "react";

const content = "hdjsjsjkkdjsnkdjshdjsjsjkkd";

export const ConnectWithUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.container}>
      <p>
        Есть вопрос, на который не нашли ответ? Просто напишите нам, и мы
        свяжемся с вами
      </p>
      <button
        onClick={() => setIsVisible((visible) => !visible)}
        className={styles.button}
      >
        тык
      </button>
      {/*{isVisible && content}*/}
    </div>
  );
};
