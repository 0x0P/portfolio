"use client";
import styles from "@/styles/about.module.css";
import { ReactNode, use, useEffect, useState } from "react";
import AOS from "aos";
import Repo from "@/component/repo";

export default function Home() {
  const data = use(getData());
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
          <h1 className={styles.bigText} data-aos="fade-right">
            저는
          </h1>
          <div className={styles.textBox} data-aos="fade-right">
            <div className={styles.scrollContainer}>
              <div className={styles.scroll} />
            </div>
            <h1 className={styles.scrollText}>프론트엔드</h1>
            <h1 className={styles.scrollText}>백엔드</h1>
            <h1 className={styles.scrollText}>중학생 </h1>
          </div>
          <h1 className={styles.bigText} data-aos="fade-right">
            개발자 입니다
          </h1>
        </div>
        <div className={styles.halfContainer}>
          <div className={styles.leftContent}>
            <div className={styles.halfContent}>
              <h1 className={styles.bigText} data-aos="fade-right">
                <span className={styles.markedOne}>다양한것</span>들을
              </h1>
              <h1 className={styles.bigText} data-aos="fade-right">
                개발하고
              </h1>
            </div>
          </div>
          <div data-aos="fade-up" className={styles.rightContent}>
            {data.map((repo: any, index: number) => {
              <Repo title={repo.name} text={repo.description} link={repo.html_url} key={index} number={index} />;
            })}
          </div>
        </div>
        <div className={styles.halfContainer}>
          <div className={styles.leftContent}>
            <div className={styles.halfContent}>
              <h1 className={styles.bigText} data-aos="fade-right">
                <span className={styles.markedTwo}>새로운도전</span>을
              </h1>
              <h1 className={styles.bigText} data-aos="fade-right">
                이어나가는
              </h1>
            </div>
          </div>
          <div data-aos="fade-up" className={styles.rightContent}>
            {}
          </div>
        </div>
        <div className={styles.container}>
          <h1 className={styles.bigText} data-aos="fade-up">
            저는
          </h1>
          <h1 className={styles.bigText} data-aos="fade-up">
            김민겸 입니다
          </h1>
          <h1 className={styles.aboutText} data-aos="fade-up">
            #낭만을_즐기는_개발자
          </h1>
        </div>
      </div>
    </div>
  );
}

export async function getData() {
  const res = await fetch("https://api.github.com/users/0x0P/repos", { cache: "no-cache" });
  return res.json();
}
