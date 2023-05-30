"use client";
import styles from "@/styles/nav.module.css";
import Link from "next/link";
import { useEffect, useRef } from "react";
export default function Nav() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    navRef.current?.addEventListener("click", (e) => {
      if (e.target === navRef.current) {
        navRef.current?.classList.toggle("active");
      } else {
        navRef.current?.classList.remove("active");
      }
    });
  });

  return (
    <div ref={navRef} className={styles.container}>
      <Link href="/">
        <h1 className={styles.logo}>PERCENTZERO</h1>
      </Link>
    </div>
  );
}
