"use client";
import styles from "@/styles/button.module.css";
export default function Button({ text, bg, color, onClick }: { text: any; bg?: string; color?: string; onClick?: () => void }) {
  return (
    <button style={{ background: bg, color: color }} className={styles.button} onClick={onClick}>
      <h1>{text}</h1>
    </button>
  );
}
