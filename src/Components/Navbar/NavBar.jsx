import React from "react";
import styles from "./NavBar.module.css";
import "animate.css";
import {
  handleScrollAbout,
  handleScrollHome,
  handleScrollSkills,
  handleScrollProyects,
  handleScrollContact,
} from "../utils/utils";

export default function NavBar() {
  return (
    <div className={styles.navigation}>
      <ul class="animate__animated animate__slideInLeft animate__delay-2s">
        <li onClick={(e) => handleScrollHome(e)}>
          <ion-icon name="home-sharp"></ion-icon>
        </li>
        <li onClick={(e) => handleScrollAbout(e)}>
          <ion-icon name="person-sharp"></ion-icon>
        </li>
        <li onClick={(e) => handleScrollSkills(e)}>
          <ion-icon name="settings-sharp"></ion-icon>
        </li>
        <li onClick={(e) => handleScrollProyects(e)}>
          <ion-icon name="folder-open-sharp"></ion-icon>
        </li>
        <li onClick={(e) => handleScrollContact(e)}>
          <ion-icon name="mail-sharp"></ion-icon>
        </li>
      </ul>
    </div>
  );
}
