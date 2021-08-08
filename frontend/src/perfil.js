import { useState } from "react";
import styles from "./styles/perfil.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const profiles = [
  {
    id: 1,
    img: "/fp.jpg",
    name: "Name",
    age: "Idade",
    money: "XXX,XX",
    email: "email@email.com",
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
    email: "email@email.com",
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
    email: "email@email.com",
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
    email: "email@email.com",
    pet: "Sim ou Não",
    stay: "Moradia ou Estadia",
    time: "X meses X dias",
  },
];

export default function Perfil() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={styles.all}>
      <div className={styles.slider}>
        <Slider {...settings}>
          {profiles.map((profiles) => (
            <div key={profiles.id} className={styles.card}>
              {isClicked ? (
                <div className={styles.moreInfo}>
                  <p>{profiles.email}</p>
                  <p>Aceita pet: {profiles.pet}</p>
                  <p>{profiles.stay}</p>
                  <p>Tempo que pretende ficar: {profiles.time}</p>
                </div>
              ) : (
                <div className={styles.images}>
                  <img src={profiles.img} alt="foto" />
                  <img src={profiles.img} className={styles.none} alt="foto" />
                </div>
              )}

              <div className={styles.basicInfo}>
                <p>
                  {profiles.name}, {profiles.age}
                </p>
                <p>R$ {profiles.money}</p>
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
