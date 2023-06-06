"use client";
import Image from "next/image";
import styles from "@/styles/repo.module.css";

export default function Repo({ title, text, src, link, number }: { title: string; text?: string; src?: string; link?: string; number?: number }) {
  return (
    <div className={styles.repo} data-aos="fade-up" data-aos-delay={(number as any) * 50 + 100}>
      <h1 className={styles.title}>{title}</h1>
      <h1 className={styles.text}>{text}</h1>
    </div>
  );
}
