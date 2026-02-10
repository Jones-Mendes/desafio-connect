import React from "react";
import Footer from "../../components/Footer/Footer";
import styles from "./mentoria.module.scss";

export default function Mentoria() {
  return (
    <div className={styles.mentoriaContainer}>
      <h1 className={styles.titulo}>Mentoria</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src="/src/assets/images/formalidades.jpg"
            alt="Mentoria de carreira"
            className={styles.cardImg}
          />
          <div className={styles.cardTitle}>Mentoria de Carreira e Emprego</div>
          <div className={styles.cardDesc}>
            Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho.
          </div>
          <button className={styles.cardBtn}>Quero participar</button>
        </div>
        <div className={styles.card}>
          <img
            src="/src/assets/images/jovens-trabalhando.png"
            alt="Compartilhe experiência"
            className={styles.cardImg}
          />
          <div className={styles.cardTitle}>Compartilhe Experiência</div>
          <div className={styles.cardDesc}>
            Oriente jovens e profissionais iniciantes em sua área.
          </div>
          <button className={styles.cardBtn}>Quero participar</button>
        </div>
        <div className={styles.card}>
          <img
            src="/src/assets/images/acompanhamento.png"
            alt="Acompanhamento"
            className={styles.cardImg}
          />
          <div className={styles.cardTitle}>Acompanhamento</div>
          <div className={styles.cardDesc}>
            Participe como guia em jornadas de aprendizado e desenvolvimento.
          </div>
          <button className={styles.cardBtn}>Quero participar</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}