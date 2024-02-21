import IBlog from "@/types/Blog";
import Image from "next/image";
import styles from "./blogDetail.module.scss";

export default function BlogPage() {
  const blog: IBlog = {
    title: "Title",
    description: "desc",
    img: "test",
    slug: "test",
  };

  const author = {
    img: "",
    name: "test",
    date: "11/12/2022",
  };

  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src={`/images/${blog.img}`}
          width={400}
          height={600}
          alt={blog.title}
        />
      </div>
      <div className={styles.blogContainer}>
        <p className={styles.title}>{blog.title}</p>
        <div className={styles.author}>
          <Image
            src={`/images/${author.img}`}
            alt={author.name}
            width={50}
            height={50}
          />
          <div className={styles.name}>
            <span>Author</span>
            <p>{author.name}</p>
          </div>
          <div className={styles.date}>
            <span>Published</span>
            <p>{author.date}</p>
          </div>
        </div>
        <p className={styles.desc}>{blog.description}</p>
      </div>
    </div>
  );
}
