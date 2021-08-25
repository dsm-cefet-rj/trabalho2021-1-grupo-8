import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./chat.module.css";

export default function Chat() {
  const [values, setValues] = useState({});

  function onChange(event) {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();

    axios.post("http://localhost:5000/chat", values);
  }
  const [chat, setChat] = useState([])
  useEffect(()=>{
    
    axios.get("http://localhost:5000/chat").then((response)=>{
      setChat(response.data);
    })
  },[])
  function resize(){
    window.location.reload();
} 
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
        <div className={styles.chat2}>
         {chat.map((c)=>(
           <div className={styles.msg}>
             <span>{c.chat}</span>
            </div>
         ))}
        </div>
        <div className={styles.send}>
          <form onSubmit={onSubmit}>
            <input name="chat" onChange={onChange}  />
            <button onClick={resize} >Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
