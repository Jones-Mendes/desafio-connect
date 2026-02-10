import React from "react";
import Footer from "../../components/Footer/Footer";
import styles from "./perfil.module.scss";

export default function Perfil() {
  return (
    <div className={styles.perfilContainer}>
      <main className={styles.main}>
        <div className={styles.profileCard}>
          <div className={styles.avatarSection}>
            <img
              src="/images/Jones-Mendes.jpeg"
              alt="Jones Mendes"
              className={styles.avatar}
            />
          </div>
          <div className={styles.contentSection}>
            <h1 className={styles.name}>Jones Mendes</h1>
            <p className={styles.role}>Voluntário Ativo</p>
            <p className={styles.bio}>
              Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.
            </p>
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <img src="/images/Frame (6).png" alt="Localização" className={styles.icon} />
                <span>Fortaleza - CE</span>
              </div>
              <div className={styles.detailItem}>
                <img src="/images/Frame (7).png" alt="Email" className={styles.icon} />
                <span>jones.mendes@gmail.com</span>
              </div>
              <div className={styles.detailItem}>
                <img src="/images/Frame (8).png" alt="Data de adesão" className={styles.icon} />
                <span>Membro desde Setembro 2025</span>
              </div>
            </div>
            <div className={styles.tags}>
              <span className={styles.tag}>Educação</span>
              <span className={styles.tag}>Meio Ambiente</span>
              <span className={styles.tag}>Assistência Social</span>
              <span className={styles.tag}>Design</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
