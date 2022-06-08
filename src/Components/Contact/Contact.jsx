import React, { useState } from "react";
import styles from "./Contact.module.css";
import linkedInLogo from "../../Assets/linkedIn.png";
import githubLogo from "../../Assets/github.png";
import Swal from "sweetalert2";

export default function Contact() {
  const [input, setInput] = useState({
    Nombre: "",
    Email: "",
    Message: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSuccessfulSubmit = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    if (input.Nombre !== "" && input.Email !== "" && input.Message !== "")
      return Toast.fire({
        icon: "success",
        title: "Gracias por contactarte !",
      });
  };

  return (
    <div className={styles.generalContainer}>
      <div className={styles.titleDiv}>
        <h1
          data-aos-offset="10"
          data-aos="flip-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          data-aos-once="false"
          className={styles.title}
        >
          Contáctame
        </h1>
      </div>
      <div className={styles.formDiv}>
        <form
          action="https://formsubmit.co/augustoiphar99@hotmail.com"
          method="POST"
        >
          <section className={styles.nameAndEmailDiv}>
            <div className={styles.nameInputDiv}>
              <input
                className={styles.nameInput}
                autoComplete="off"
                type="text"
                placeholder="Nombre"
                name="Nombre"
                value={input.Nombre}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className={styles.emailInputDiv}>
              <input
                className={styles.emailInput}
                autoComplete="off"
                type="email"
                placeholder="Email"
                name="Email"
                value={input.Email}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
          </section>
          <div className={styles.mensaggeInputDiv}>
            <textarea
              className={styles.message}
              placeholder="Mensaje"
              name="Message"
              id="message"
              value={input.Message}
              onChange={(e) => handleChange(e)}
              required
            ></textarea>
          </div>
          <div className={styles.buttonDiv}>
            <button
              className={styles.sendButton}
              type="submit"
              onClick={(e) => handleSuccessfulSubmit(e)}
            >
              Enviar
            </button>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://augustoiphardev.vercel.app/" />
          </div>
        </form>
      </div>
      <div className={styles.networkLogos}>
        <a href="https://www.linkedin.com/in/augustofrx/">
          <img src={linkedInLogo} alt="linkedInLogo" />
        </a>
        <a href="https://github.com/Augustofrx">
          <img src={githubLogo} alt="githubLogo" />
        </a>
      </div>
    </div>
  );
}
