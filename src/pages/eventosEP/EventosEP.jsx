import React from "react";
import Footer from "../../components/Footer/Footer";
import styles from "./eventosEP.module.scss";

export default function EventosEP() {
  return (
    <div className={styles.eventosContainer}>
      <h1 className={styles.titulo}>Eventos & Palestras</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src="/images/criancas.jpg"
            alt="Empoderando Jovens para o Futuro"
            className={styles.cardImg}
          />
          <div className={styles.cardTitle}>Empoderando Jovens para o Futuro</div>
          <div className={styles.cardDesc}>
            <b>Atividade:</b> Palestra motivacional sobre liderança jovem e transformação social.<br />
            <b>Impacto:</b> Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.
          </div>
          <button className={styles.cardBtn}>Quero Participar</button>
        </div>
        <div className={styles.card}>
          <img
            src="/images/ensinando.jpg"
            alt="Tecnologia que Transforma"
            className={styles.cardImg}
          />
          <div className={styles.cardTitle}>Tecnologia que Transforma</div>
          <div className={styles.cardDesc}>
            <b>Atividade:</b> Workshop de introdução à programação e inovação digital.<br />
            <b>Impacto:</b> Preparar jovens para o mercado de trabalho através da tecnologia.
          </div>
          <button className={styles.cardBtn}>Quero Participar</button>
        </div>
        <div className={styles.card}>
          <img
            src="/images/piadocas.png"
            alt="Carreira e Primeiro Emprego"
            className={styles.cardImg}
          />
          <div className={styles.cardTitle}>Carreira e Primeiro Emprego</div>
          <div className={styles.cardDesc}>
            <b>Atividade:</b> Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado.<br />
            <b>Impacto:</b> Ajudar jovens a conquistar oportunidades de trabalho.
          </div>
          <button className={styles.cardBtn}>Quero Participar</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}