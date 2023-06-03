"use client";
import styles from "@/styles/page.module.css";
import Button from "@/component/button";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import Contact from "./contact/page";

export default function Home() {
  useEffect(() => {
    AOS.init();
    const aosAnimation = document.querySelectorAll("[data-aos]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("aos-animate");
        } else {
          entry.target.classList.remove("aos-animate");
        }
      });
    });
    aosAnimation.forEach((aosObject) => {
      observer.observe(aosObject);
    });
  });
  return (
    <div className={styles.containers}>
      <div className={styles.container}>
        <div>
          <div className={styles.textBox}>
            <h1 className={styles.bigText} data-aos="fade-right">
              안녕하세요
            </h1>
            <h1 className={styles.bigText} data-aos="fade-right">
              접니다
            </h1>
            <h1 className={styles.aboutText} data-aos="fade-right">
              #낭만을_즐기는_개발자
            </h1>
          </div>
          <Link href="/about">
            <Button bg="var(--construction)" color="var(--constructionText)" text={"아직 공사중이에요"} data-aos="fade-right" />
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <div className={styles.textBox}>
            <h1 className={styles.bigText} data-aos="fade-right">
              제가 만든것들
            </h1>
            <h1 className={styles.bigText} data-aos="fade-right">
              보고가세요
            </h1>
            <h1 className={styles.aboutText} data-aos="fade-right">
              #포트폴리오
            </h1>
          </div>
          <Link href="/portfolio">
            <Button bg="var(--construction)" color="var(--constructionText)" text={"아직 공사중이에요"} data-aos="fade-right" />
          </Link>
        </div>
      </div>
      <Contact />
    </div>
  );
}
