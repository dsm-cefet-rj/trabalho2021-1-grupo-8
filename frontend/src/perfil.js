import { useState, useEffect } from "react";
import styles from "./styles/perfil.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
const profiles = [
  {
    id: 1,
    img: "/fp.jpg",
    name: "Name",
    age: "Idade",
    money: "XXX,XX",
    username: "username@username.com",
    pet: "Sim ou Não",
    stay: "Moradia ou Estadia",
    time: "X meses X dias",
  },
  {
    id: 2,
    img: "/fp.jpg",
    name: "Name",
    age: "Idade",
    money: "XXX,XX",
    username: "username@username.com",
    pet: "Sim ou Não",
    stay: "Moradia ou Estadia",
    time: "X meses X dias",
  },
  {
    id: 3,
    img: "/fp.jpg",
    name: "Name",
    age: "Idade",
    money: "XXX,XX",
    username: "username@username.com",
    pet: "Sim ou Não",
    stay: "Moradia ou Estadia",
    time: "X meses X dias",
  },
  {
    id: 4,
    img: "/fp.jpg",
    name: "Name",
    age: "Idade",
    money: "XXX,XX",
    username: "username@username.com",
    pet: "Sim ou Não",
    stay: "Moradia ou Estadia",
    time: "X meses X dias",
  },
];

export default function Perfil(filteredStore) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [isClicked, setIsClicked] = useState(false);
  
  const [login, setLogin] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/login").then((response) => {
      setLogin(response.data);
    });
  }, []);
  return (
    <div className={styles.all}>
      <div className={styles.slider}>
        <Slider {...settings}>
          {login.map((profiles) => (
            <div key={profiles.id} className={styles.card}>
              {isClicked ? (
                <div className={styles.moreInfo}>
                  <p>{profiles.username}</p>
                </div>
              ) : (
                <div className={styles.images}>
                  {/*<img src={profiles.img} alt="foto" />
                  <img src={profiles.img} className={styles.none} alt="foto" />*/}
                </div>
              )}

              <div className={styles.basicInfo}>
              <p>{profiles.username}</p>
                <p>{profiles.password}</p>
                
              </div>
              <div className={styles.buttons}>
                <button onClick={() => setIsClicked(!isClicked)}>
                  <img src="profile.png" alt="perfil" />
                </button>
                <button className={styles.btChat}>
                  <img src="chat.png" alt="chat" />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
