import styles from "@/styles/page.module.css";
import Button from "@/component/button";
import Link from "next/link";
import IG from "@/public/instagram.svg";
import Github from "@/public/github.svg";
import Email from "@/public/email.svg";

export default function Home() {
  return (
    <div className={styles.containers}>
      <div className={styles.container}>
        <div>
          <div className={styles.textBox}>
            <h1 className={styles.bigText}>안녕하세요</h1>
            <h1 className={styles.bigText}>접니다</h1>
            <h1 className={styles.aboutText}>#낭만을_즐기는_개발자</h1>
          </div>
          <Link href="/about">
            <Button bg="#555" text={"아직 공사중이에요"} />
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <div className={styles.textBox}>
            <h1 className={styles.bigText}>제가 만든것들</h1>
            <h1 className={styles.bigText}>보고가세요</h1>
            <h1 className={styles.aboutText}>#포트폴리오</h1>
          </div>
          <Link href="/portfolio">
            <Button bg="#555" text={"아직 공사중이에요"} />
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <div className={styles.textBox}>
            <h1 className={styles.bigText}>당신의 연락</h1>
            <h1 className={styles.bigText}>기다리고있어요</h1>
            <h1 className={styles.aboutText}>#우리_친해져요</h1>
          </div>
          <div className={styles.contacts}>
            <Link href="https://www.instagram.com/standardlister/">
              <IG className={styles.contact} />
            </Link>
            <Link href="https://github.com/0x0P/">
              <Github className={styles.contactBackground} />
            </Link>
            <Link href="mailto::0x0p@cream.ink">
              <Email className={styles.contactBackground} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
