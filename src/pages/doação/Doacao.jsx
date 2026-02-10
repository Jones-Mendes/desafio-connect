import React from "react";
import Footer from "../../components/Footer/Footer";
import styles from "./doacao.module.scss";

export default function Doacao() {
  return (
    <div className={styles.doacaoContainer}>
      <h1 className={styles.titulo}>Doação</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src="/images/cesta-basica.jpg"
            alt="Cesta de alimentos"
            className={styles.cardImg}
          />
          <div className={styles.cardTitle}>Instituto grande familia</div>
          <div className={styles.cardDesc}>
            Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.
          </div>
          <button className={styles.cardBtn}>Quero Doar</button>
        </div>
        <div className={styles.card}>
          <img
            src="/images/livros-cadernos.jpg"
            alt="Livros e cadernos"
            className={styles.cardImg}
          />
          <div className={styles.cardTitle}>Projeto Futuro na Escola</div>
          <div className={styles.cardDesc}>
            Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.
          </div>
          <button className={styles.cardBtn}>Quero Doar</button>
        </div>
        <div className={styles.card}>
          <img
            src="/images/computadores.jpg"
            alt="Computadores para jovens"
            className={styles.cardImg}
          />
          <div className={styles.cardTitle}>Instituto Conecta Jovem</div>
          <div className={styles.cardDesc}>
            Doe computadores usados, tablets ou celulares em bom estado para garantir que jovens tenham acesso ao mundo digital e novas oportunidades.
          </div>
          <button className={styles.cardBtn}>Quero Doar</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}