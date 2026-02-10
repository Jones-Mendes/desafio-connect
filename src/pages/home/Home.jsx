import React from "react";
import styles from "./home.module.scss";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <main className={styles.main}>

        <section className={styles.hero}>
          <div className={styles.content}>
            <div className={styles.info}>
              <h1 className={styles.title}>
                Projetos Sociais<br />
                que transformam
              </h1>
              <p className={styles.subtitle}>
                Conectamos sua empresa com projetos sociais impactantes.<br />
                Juntos, criamos mudanças reais na comunidade.
              </p>
              <button className={styles.ctaButton}>
                Cadastrar Empresa →
              </button>
              {/* Estatísticas só aparecem aqui no mobile */}
              <div className={styles.statsMobile}>
                <div className={styles.statItem}>
                  <h2 className={styles.statNumber}>500+</h2>
                  <p className={styles.statLabel}>Empresas Voluntárias</p>
                </div>
                <div className={styles.statItem}>
                  <h2 className={styles.statNumber}>1.2K+</h2>
                  <p className={styles.statLabel}>Projetos Realizados</p>
                </div>
                <div className={styles.statItem}>
                  <h2 className={styles.statNumber}>50K+</h2>
                  <p className={styles.statLabel}>Vidas Impactadas</p>
                </div>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img 
                src="/src/assets/images/mão.crianca.papel.mundo.png" 
                alt="Mãos segurando o mundo com pessoas" 
                className={styles.heroImage}
              />
            </div>
          </div>
        </section>

        {/* Estatísticas só aparecem aqui no desktop */}
        <section className={styles.statsDesktop}>
          <div className={styles.statItem}>
            <h2 className={styles.statNumber}>500+</h2>
            <p className={styles.statLabel}>Empresas Voluntárias</p>
          </div>
          <div className={styles.statItem}>
            <h2 className={styles.statNumber}>1.2K+</h2>
            <p className={styles.statLabel}>Projetos Realizados</p>
          </div>
          <div className={styles.statItem}>
            <h2 className={styles.statNumber}>50K+</h2>
            <p className={styles.statLabel}>Vidas Impactadas</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}