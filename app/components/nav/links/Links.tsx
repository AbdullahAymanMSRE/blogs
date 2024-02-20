"use client";

import styles from "./links.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink/NavLink";
import { X } from "lucide-react";

export default function Links() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    {
      title: "home",
      path: "/",
    },
    {
      title: "blogs",
      path: "/blogs",
    },
  ];

  const adminLinks = [
    {
      title: "admin",
      path: "/admin",
    },
  ];

  const auth = true;
  const admin = true;

  return (
    <div className={styles.container + " " + (open && styles.open)}>
      <div className={styles.burger} onClick={() => setOpen(true)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.links} onClick={() => setOpen(false)}>
        <X className={styles.close} />
        {links.map((l) => (
          <NavLink key={l.title} title={l.title} path={l.path} />
        ))}
        {auth ? (
          <>
            {admin &&
              adminLinks.map((l) => (
                <NavLink key={l.title} title={l.title} path={l.path} />
              ))}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </div>
  );
}
