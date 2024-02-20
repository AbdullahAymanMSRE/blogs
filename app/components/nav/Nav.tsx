import Links from "./links/Links";
import styles from "./nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Abdullah</div>
      <div className="links">
        <Links />
      </div>
    </nav>
  );
}
