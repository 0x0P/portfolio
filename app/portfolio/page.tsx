"use client";
import { useEffect } from "react";
import styles from "@/styles/portfolio.module.css";
import AOS from "aos";
import Image from "next/image";
import Card from "@/component/card";

export default function Portfolio() {
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
    <div className={styles.container}>
      <div>
        <h1 className={styles.bigText} data-aos="fade-right">
          포트폴리오
        </h1>
        <h1 className={styles.aboutText} data-aos="fade-right" data-aos-delay="100">
          #제가_만든것들_모아놨어요
        </h1>
      </div>
      <div className={styles.grid}>
        <Card number={1} title="포트폴리오" text="지금 이 사이트!" src="/pf.webp" link="/" />
        <Card number={2} title="파운드위키" text="Lightvalley를 기반으로 만들어진 위키 사이트에요" link="https://wiki.cream.ink" />
        <Card number={3} title="LightValley" text="Typescript로 만든 익명 위키 엔진이에요" src="/lightvalley.png" link="https://github.com/0x0p/lightvalley" />
        <Card number={4} title="뉴스픽담당일진" text="쿠팡링크 보고오라는거 없애줌" link="https://github.com/0x0P/pic" />
      </div>
    </div>
  );
}
