import styles from './header.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="/images/image.png" alt="Logo" className={styles.logoImage} />
          </Link>
        </div>
        
        <nav className={styles.nav}>
          <Link to="/doação">Doação</Link>
          <Link to="/voluntariado">Voluntariado</Link>
          <Link to="/mentoria">Mentoria</Link>
          <Link to="/eventosEP">Eventos & Palestras</Link>
        </nav>

        <div className={styles.userMenu}>
          <button 
            className={styles.userButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src="/images/Jones-Mendes.jpeg" alt="Usuário" className={styles.avatar} />
          </button>
          
          {menuOpen && (
            <div className={styles.dropdown}>
              <Link to="/perfil" onClick={() => setMenuOpen(false)}>Jones Mendes</Link>
              <Link to="/voluntariado" onClick={() => setMenuOpen(false)}>Voluntariados</Link>
              <a href="#configuracoes">Configurações de conta</a>
              <Link to="/" onClick={() => setMenuOpen(false)}>Sair</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
