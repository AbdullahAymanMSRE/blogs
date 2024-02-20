import Link from "next/link";
import styles from "./navLink.module.scss";
import { usePathname } from "next/navigation";

export default function NavLink({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      className={styles.link + " " + (pathname === path && styles.active)}
      href={path}
    >
      {title}
    </Link>
  );
}
