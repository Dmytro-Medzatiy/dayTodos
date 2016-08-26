import React from 'react';
import styles from './styles.css';
import Img from 'components/Img';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>Made for better effectiveness by </span>
        <a href="https://github.com/Dmytro-Medzatiy">
          <span>D.Medzatyi </span>
          <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-256.png"
             alt="github repo"
             height="30px"
             width="30px"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
