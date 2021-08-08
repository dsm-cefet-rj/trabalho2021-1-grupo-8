import { useState } from "react";
import styles from "./styles.module.css";

export default function Header() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={styles.all}>
      <button
        className={styles.button}
        onClick={() => setIsClicked(!isClicked)}
      >
        <img src="/fp.jpg" alt="perfil" />
      </button>
      {isClicked ? (
        <div className={styles.options}>
          <ul>
            <li><a href="/"><p>Perfil</p></a></li>
            <li><a href="/"><p>Imóveis</p></a></li>
            <li><a href="/"><p>Configurações</p></a></li>
          </ul>
        </div>
      ) : null}
      <a href="/"><img className={styles.chat} src="/conversation.png" alt="chat" /></a>
    </div>
  );
}
