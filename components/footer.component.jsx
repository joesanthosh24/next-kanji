import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://joe-santhosh-portfolio.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        &#169; <span className={styles.footerLink}>Joe Santhosh</span>
      </a>
    </footer>
  );
};

export default Footer;
