import React from "react";
import person2 from "../../Assets/person2.jpg";
import person1 from "../../Assets/person1.jpg";
import vwblue from "../../Assets/vwblue.jpg";
import styles from "./About.module.css";

export default function about() {
  document.getElementById("modal");
  const handleOpenModal = () => {
    document.getElementById("modal").open = true;
  };

  const handleCloseModal = () => {
    document.getElementById("modal").open = false;
  };

  return (
    <div className={styles.generalContainer}>
      <div className={styles.titleAndDescContainer}>
        <h1
          data-aos-offset="10"
          data-aos="flip-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          data-aos-once="false"
          className={styles.title}
        >
          Sobre mí
        </h1>
        <p
          data-aos-offset="10"
          data-aos="flip-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          data-aos-once="false"
          className={styles.description}
        >
          Mi nombre es Augusto, tengo 22 años, me apasiona el diseño, la
          fotografía, la música y la programación. <br /> Disfruto de compartir
          tiempo con otras personas y de ayudar.
          <br /> Durante mi aprendizaje como Full Stack Web Developer, descubrí
          que me gusta mucho el Frontend, ya que es allí donde puedo poner en
          practica mis habilidades de diseño y me desempeño mejor. <br /> Me
          considero una persona muy creativa y capaz de lograr los objetivos que se pone en
          mente, me gusta estar en constante aprendizaje y siempre me gusta dar
          lo mejor de mi en todo lo que hago.
        </p>
      </div>
      <div className={styles.btnCont}>
        <button
          data-aos-offset="10"
          data-aos="flip-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          data-aos-once="false"
          className={styles.phButton}
          onClick={handleOpenModal}
        >
          Unas muestras de mis fotografias
        </button>
      </div>
      <div className={styles.videoAndTitleCont}
          data-aos-offset="10"
          data-aos="fade-down"
          data-aos-duration="1500">
      <p className={styles.videoTitle}>Y una muestra de mis producciones</p>
      <iframe className={styles.video}
        width="460"
        height="215"
        src="https://www.youtube.com/embed/6HkySoZJeXk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowfullscreen
      ></iframe>
      </div>
      <dialog id="modal" className={styles.photographiesContainer}>
        <button className={styles.closeBtn} onClick={handleCloseModal}>
          X
        </button>
        <div className={styles.photographies}>
          <img  src={person2} alt="dogPhoto" />
          <img src={vwblue} alt="person1" />
          <img src={person1} alt="person1" />
        </div>
      </dialog>
    </div>
  );
}
