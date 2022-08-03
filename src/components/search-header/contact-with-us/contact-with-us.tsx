import styles from "./contact-with-us.module.scss";

const ContactWithUs = () => {
  return (
    <section className={styles.containerContact}>
      <p className={styles.text}>
        Есть вопрос, на который не нашли ответ? Просто напишите нам, и мы
        свяжемся с вами
      </p>
      <button className={styles.buttonContactWithUs}>Связаться с нами</button>
    </section>
  );
};

export default ContactWithUs;
