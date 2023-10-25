import Image from "next/image";
import styles from "./page.module.css";
import { useAppSelector } from "@/redux/hooks";

export default function Home() {
  return <main className={styles.main}>this is a main</main>;
}
