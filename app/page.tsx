"use client";
import styles from "@/styles/page.module.css";
import Button from "@/component/button";
import Link from "next/link";
import IG from "@/public/instagram.svg";
import Github from "@/public/github.svg";
import Email from "@/public/email.svg";
import { useEffect } from "react";
import AOS from "aos";

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
            <Button bg="#000" color="#FFD600" text={"아직 공사중이에요"} />
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
            <Button bg="#000" color="#FFD600" text={"아직 공사중이에요"} data-aos="fade-right" />
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <div className={styles.textBox}>
            <h1 className={styles.bigText} data-aos="fade-right">
              당신의 연락
            </h1>
            <h1 className={styles.bigText} data-aos="fade-right">
              기다리고있어요
            </h1>
            <h1 className={styles.aboutText} data-aos="fade-right">
              #우리_친해져요
            </h1>
          </div>
          <div className={styles.contacts}>
            <Link href="https://www.instagram.com/standardlister/">
              <IG className={styles.contact} data-aos="fade-up" />
            </Link>
            <Link href="https://github.com/0x0P/">
              <Github className={styles.contactBackground} data-aos="fade-up" data-aos-delay="50" />
            </Link>
            <Link href="mailto::0x0p@cream.ink">
              <Email className={styles.contactBackground} data-aos="fade-up" data-aos-delay="100" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
