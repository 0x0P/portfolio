"use client";
import styles from "@/styles/nav.module.css";
import Link from "next/link";
import { useEffect } from "react";
export default function Nav() {
  useEffect(() => {
    const nav = document.querySelector(`.${styles.container}`);
    nav?.addEventListener("click", (e) => {
      if (e.target === nav) {
        nav?.classList.toggle("active");
      } else {
        nav?.classList.remove("active");
      }
    });
  });

  return (
    <div className={styles.container}>
      <Link href="/">
        <h1 className={styles.logo}>PERCENTZERO</h1>
      </Link>
      <div className={styles.navItems}>
        <Link href="/about">
          <h1 className={styles.navItem}>더 알아보기</h1>
        </Link>
        <Link href="/portfolio">
          <h1 className={styles.navItem}>포트폴리오</h1>
        </Link>
        <Link href="/contact">
          <h1 className={styles.navItem}>연락</h1>
        </Link>
        <Link href="https://blog.0x0p.ml">
          <h1 className={styles.navItem}>블로그</h1>
        </Link>
      </div>
    </div>
  );
}
