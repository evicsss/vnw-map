import logotipo from '../../assets/logo.png';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logotipo} alt="" /></div>
      <nav className={styles.nav}>
        <a href="#inicio" className={styles.link}>Inicio</a>
        <a href="#sobre" className={styles.link}>Sobre</a>
        <a href="#adote" className={styles.link}>Adote</a>
      </nav>
    </header>
  );
};

export default Header;
