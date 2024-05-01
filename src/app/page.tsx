import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/ThinkrLogo.png"
          alt="Thinkr Labs Logo"
          width={256}
          height={256}
          priority
        />
      </div>

      <div className={styles.center}>
        <p> Coming soon...</p>
      </div>

    </main>
  );
}
