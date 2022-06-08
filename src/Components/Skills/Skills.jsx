import React from "react";
import styles from "./Skills.module.css";
import htmlIcon from "../../Assets/html.png";
import cssIcon from "../../Assets/css.png";
import javascriptIcon from "../../Assets/javascript.png";
import reactIcon from "../../Assets/React.png";
import reduxIcon from "../../Assets/redux.png";
import nextIcon from "../../Assets/next.png";
import nodeIcon from "../../Assets/node.png";
import expressIcon from "../../Assets/express.png";
import sequelizeIcon from "../../Assets/sequelize.png";
import postgresqlIcon from "../../Assets/postgresql.png";
import githubIcon from "../../Assets/github.png";
import materialIcon from "../../Assets/materialui.png";
import photoshopIcon from "../../Assets/photoshop.png";
import figmaIcon from "../../Assets/figma.png";

export default function Skills() {
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
        Habilidades
      </h1>
      <div className={styles.cardsContainer}>
        <section className={styles.topSection}>
          <div className={styles.htmlIcon}>
            <img src={htmlIcon} alt="htmlIcon" />
            <p>HTML</p>
          </div>
          <div className={styles.cssIcon}>
            <img src={cssIcon} alt="cssIcon" />
            <p>CSS</p>
          </div>
          <div className={styles.jsIcon}>
            <img src={javascriptIcon} alt="javascriptIcon" />
            <p>JAVASCRIPT</p>
          </div>
          <div className={styles.reactIcon}>
            <img src={reactIcon} alt="reactIcon" />
            <p>REACT</p>
          </div>
          <div className={styles.reduxIcon}>
            <img src={reduxIcon} alt="reduxIcon" />
            <p>REDUX</p>
          </div>
          <div className={styles.nextIcon}>
            <img src={nextIcon} alt="nextIcon" />
            <p>NEXT</p>
          </div>
          <div className={styles.nodeIcon}>
            <img src={nodeIcon} alt="nodeIcon" />
            <p>NODE</p>
          </div>
        </section>
        <section className={styles.bottomSection}>
          <div className={styles.expressIcon}>
            <img src={expressIcon} alt="expressIcon" />
            <p>EXPRESS</p>
          </div>
          <div className={styles.sequelizeIcon}>
            <img src={sequelizeIcon} alt="sequelizeIcon" />
            <p>SEQUELIZE</p>
          </div>
          <div className={styles.postgresIcon}> 
            <img src={postgresqlIcon} alt="postgresqlIcon" />
            <p>POSTGRES SQL</p>
          </div>
          <div className={styles.githubIcon}>
            <img src={githubIcon} alt="githubIcon" />
            <p>GITHUB</p>
          </div>
          <div className={styles.materialIcon}>
            <img src={materialIcon} alt="materialUiIcon" />
            <p>MATERIAL UI</p>
          </div>
          <div className={styles.photoshopIcon}>
            <img src={photoshopIcon} alt="photoshopIcon" />
              <p>PHOTOSHOP</p>
          </div>
          <div className={styles.figmaIcon}>
            <img src={figmaIcon} alt="figmaIcon" />
            <p>FIGMA</p>
          </div>
        </section>
      </div>
    </div>
  );
}
