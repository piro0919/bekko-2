import styles from "./style.module.scss";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>&copy; 2015 Natsuzolab</div>
    </footer>
  );
}
