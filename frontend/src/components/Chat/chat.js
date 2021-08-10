import styles from "./chat.module.css";

export default function Chat() {
  return (
    <div className={styles.all}>
      <div className={styles.people}>
        <img src="/fp.jpg" />
        <img src="/fp.jpg" />
        <img src="/fp.jpg" />
      </div>
      <div className={styles.chat}>
        <div className={styles.name}>
          <p>Nome</p>
        </div>
        <div className={styles.send}>
          <input />
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
}
