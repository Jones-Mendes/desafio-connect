import React from "react";
import Footer from "../../components/Footer/Footer";
import styles from "./voluntariado.module.scss";

export default function Voluntariado() {
  return (
    <div className={styles.voluntariadoContainer}>
      <h1 className={styles.titulo}>Voluntariado</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src="/images/reciclagem.png"
            alt="Reciclagem"
            className={styles.cardImg}
          />
          <div className={styles.cardTitle}>Mutirão de reciclagem</div>
          <div className={styles.cardDesc}>
            Coletar materiais recicláveis e orientar sobre descarte consciente.
          </div>
          <button className={styles.cardBtn}>Quero participar</button>
        </div>
        <div className={styles.card}>
          <img
            src="/images/sabor-trabalho.jpg"
            alt="Aulas de tecnologia"
            className={styles.cardImg}
          />
          <div className={styles.cardTitle}>Aulas de Tecnologia</div>
          <div className={styles.cardDesc}>
            Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.
          </div>
          <button className={styles.cardBtn}>Quero participar</button>
        </div>
        <div className={styles.card}>
          <img
            src="/images/voluntario.jpg"
            alt="Esporte e inclusão"
            className={styles.cardImg}
          />
          <div className={styles.cardTitle}>Esporte e Inclusão</div>
          <div className={styles.cardDesc}>
            Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.
          </div>
          <button className={styles.cardBtn}>Quero participar</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}