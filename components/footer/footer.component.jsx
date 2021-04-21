import styles from "./footer.module.css";

import FireKanji from "../../public/images/fire-kanji.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FireKanji />
      <a
        href="https://joe-santhosh-portfolio.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        &#169; Fire Kanji by{" "}
        <span className={styles.footerLink}>Joe Santhosh</span>
      </a>
    </footer>
  );
};

export default Footer;
