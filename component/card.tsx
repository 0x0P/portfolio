"use client";
import Image from "next/image";
import styles from "@/styles/portfolio.module.css";

export default function Card({ title, text, src, link, number }: { title: string; text: string; src?: string; link: string; number: number }) {
  function imageDisplay() {
    if (src) {
      return <Image className={styles.cardImage} src={src} width={500} height={5000} alt="portfolio" />;
    }
  }
  return (
    <div className={styles.card} data-aos="fade-up" data-aos-delay={number * 100 + 100}>
      <div className={styles.cardTop}>
        <h1 className={styles.cardTitle}>{title}</h1>
        <h1 className={styles.cardText}>{text}</h1>
      </div>
      {imageDisplay()}
      <div className={styles.cardTop}>
        <a href={link} className={styles.cardButton}>
          보러가기
        </a>
      </div>
    </div>
  );
}
