import Image from "next/image";
import styles from "./home.module.scss";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Fullstack Web Developer</h2>
        <p className={styles.text}>
          with 3 years of expertise crafting immersive digital experiences.
          Proficient in PHP Laravel, Python Django, and React JS, I bring
          creativity and precision to every project. Let &apos; s turn your
          ideas into captivating web realities!
        </p>
        <div className={styles.buttons}>
          <Link
            className={styles.learn}
            href="https://abdullah-ayman.vercel.app"
            target="_blank"
          >
            Learn More
          </Link>
          <Link
            className={styles.contact}
            href="https://abdullah-ayman.vercel.app#contact"
            target="_blank"
          >
            Contact
          </Link>
        </div>
        <Image
          src="/images/brands.png"
          alt="brands"
          height={50}
          width={500}
          className={styles.brands}
        />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/hero.gif"
          alt="hero"
          width={500}
          height={500}
          className={styles.hero}
        />
      </div>
    </div>
  );
}
