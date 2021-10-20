import { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";


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
            <li>
              <Link to="/perfil">
                <p>Perfil</p>
              </Link>
            </li>
            <li>
              <a href="/imoveis">
                <p>Imóveis</p>
              </a>
            </li>
            <li>
              <a href="/cadastro">
                <p>Cadastro</p>
              </a>
            </li>
          </ul>
        </div>
      ) : null}

      <Link to="/chat">
        <img className={styles.chat} src="/conversation.png" alt="chat" />
      </Link>
    </div>
  );
}
