import React, {useState} from 'react';
import styles from './card.module.scss';

const Card = ({nome, imagem, nomeCientifico, classe, familia, sobre, tipo}) => {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const toggleDetalhes = () => {
    setMostrarDetalhes(!mostrarDetalhes);
  };

  return (
    <div className={styles.card} onClick={toggleDetalhes}>
      <img className={styles.image} src={imagem} alt={nome} />
      <h2 className={styles.title}>{nome}</h2>

      {mostrarDetalhes && (
        <div className={styles.details}>
          <p className={styles.subtitle}><strong>Nome Científico:</strong> {nomeCientifico}</p>
          <p className={styles.subtitle}><strong>Classe:</strong> {classe}</p>
          <p className={styles.subtitle}><strong>Família:</strong> {familia}</p>
          <p className={styles.description}><strong>Sobre:</strong> {sobre}</p>
          <p className={styles.subtitle}><strong>Tipo:</strong> {tipo}</p>
          <button className={styles.adoptButton} onClick={() => alert(`Você quer adotar ${nome}!`)}>Quero Adotar </button>
        </div>
      )}
    </div>
  );
};

export default Card;
