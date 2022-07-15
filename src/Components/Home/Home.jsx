import React from "react";
import { handleScrollAbout } from "../utils/utils";
import PortfolioBackground from "../../Assets/PortfolioBackground.png";
import NavBar from "../Navbar/NavBar";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Proyects from "../Proyects/Proyects"
import Contact from "../Contact/Contact";
import styles from "./Home.module.css";
import "animate.css";

export default function Home() {

 
  return (
    <>
    <NavBar/>
      <div className={styles.generalDiv}>
        <div className={styles.text}>
          <h1 class="animate__animated animate__lightSpeedInLeft animate__delay-2s">
            Augusto Iphar
          </h1>
          <h3 class="animate__animated animate__lightSpeedInLeft animate__delay-2s">
            {"<"} FullStack / Frontend Web Developer /{">"}
          </h3>
          <div onClick={handleScrollAbout} className={styles.scrollCont}>
          <h4>Scroll</h4>
          <ion-icon name="caret-down-sharp"></ion-icon>
          </div>
        </div>
        <div className={styles.effectContainer}>
          <div className={styles.PortfolioBackgroundImg}>
            <img src={PortfolioBackground} alt="BackgroundImg" />
          </div>
        </div>
      </div>
        <About/>
        <Skills/>
        <Proyects/>
        <Contact/>
    </>
  );
}
