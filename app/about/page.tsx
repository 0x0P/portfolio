"use client";
import styles from "@/styles/about.module.css";
import Button from "@/component/button";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";

export default function About() {
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
    <div>
      <div className={styles.containers}>
        <div className={styles.container}>
          <h1 className={styles.bigText} data-aos="fade-up">
            만나서 반가워요!
          </h1>
        </div>
        <div className={styles.container}>
          <h1 className={styles.bigText} data-aos="fade-up">
            저는
          </h1>
          <div className={styles.textBox}>
            <div className={styles.scrollContainer}>
              <div className={styles.scroll} />
            </div>
            <h1 className={styles.scrollText}>프론트엔드</h1>
            <h1 className={styles.scrollText}>백엔드</h1>
            <h1 className={styles.scrollText}>중학생 </h1>
          </div>
          <h1 className={styles.bigText}>개발자 입니다</h1>
        </div>
      </div>
    </div>
  );
}
