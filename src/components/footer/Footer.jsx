import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      {/* <div className={styles.socialMedia}>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div> */}
      <div className={styles.footerInfo}>
        <p>&copy; {new Date().getFullYear()} Dikshant Sharma. All Rights Reserved.</p>
        <p>Created with React and styled-components.</p>
      </div>
    </div>
  );
}

export default Footer;
