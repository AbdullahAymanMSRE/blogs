import IBlog from "@/types/Blog";
import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.scss";

export default function Blog({ blog }: { blog: IBlog }) {
  return (
    <section className={styles.blog}>
      <Image
        src={`/images/${blog.img}`}
        width={320}
        height={300}
        alt={blog.title}
        className={styles.img}
      />
      <div className={styles.blogContent}>
        <p className={styles.title}>{blog.title}</p>
        <p className={styles.desc}>{blog.description}</p>
        <Link href={`/blogs/${blog.slug}`} className={styles.readMore}>
          read more
        </Link>
      </div>
    </section>
  );
}
