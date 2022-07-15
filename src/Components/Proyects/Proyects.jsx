import React from "react";
import styles from "./Proyects.module.css";
import videogamesProyect from "../../../src/Assets/VideogamesProyect.jpg";
import foodarity from "../../../src/Assets/foodarity.jpg";
import turcortina from "../../../src/Assets/tucortina.jpg";

export default function Proyects() {
  return (
    <div className={styles.generalContainer}>
      <h1
        data-aos-offset="10"
        data-aos="flip-left"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
        data-aos-once="false"
        className={styles.title}
      >
        Mis Proyectos
      </h1>
      <div className={styles.cardsContainer}>
        <div className={styles.proyect1}>
          <img src={videogamesProyect} alt="Proyecto Videojuegos" />
          <div className={styles.buttonsDivs}>
            <h2>Future Games</h2>
            <button>
              <a href="https://futuregames.vercel.app/">Web</a>
            </button>
            <button>
              <a href="https://github.com/Augustofrx/Proyecto-Videojuegos">
                Repositorio
              </a>
            </button>
          </div>
        </div>
        <div className={styles.proyect2}>
          <img src={foodarity} alt="Proyecto Foodarity" />
          <div className={styles.buttonsDivs}>
            <h2>Foodarity</h2>
            <button> <a href="https://foodarity.herokuapp.com">Web</a></button>
            <button><a href="https://github.com/Augustofrx/foodarity-app">Repositorio</a></button>
          </div>
        </div>
        <div className={styles.proyect3}>
          <img src={turcortina} alt="Proyecto TuCortina" />
          <div className={styles.buttonsDivs}>
            <h2>Tú cortina</h2>
            <button><a href="http://www.tucortina.com.ar/">Web</a></button>
            <button><a href="https://github.com/Augustofrx/tucortina.com.ar">Repositorio</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}
