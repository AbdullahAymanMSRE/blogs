import Image from "next/image";
import Blog from "./components/blog/Blog";
import IBlog from "@/types/Blog";
import styles from "./blogs.module.scss";

export default function BlogsPage() {
  const blogs: IBlog[] = [
    {
      title: "Title",
      description: "desc",
      img: "test",
      slug: "test",
    },
    {
      title: "me and sea",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      img: "test",
      slug: "test",
    },
  ];
  return (
    <div className={styles.blogsList}>
      {blogs.map((b) => (
        <Blog key={b.title} blog={b} />
      ))}
    </div>
  );
}
