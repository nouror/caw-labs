import styles from "./css/Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>© {year} Nour — All rights reserved.</p>

        <nav className={styles.links} aria-label="Footer links">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nourelimeneboumezbeur@gmail.com"
            className={styles.link}
            target="_blank"
          >
            Email
          </a>
          <a
            href="https://github.com/nouror/caw-labs"
            target="_blank"
            className={styles.link}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className={styles.link}
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;