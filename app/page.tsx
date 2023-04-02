import Featured from "@/components/Featured";
import styles from "./page.module.css";
import StoreInfo from "@/components/StoreInfo";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <h1>Root page</h1> */}
      <Hero />
      <div className="mt-12"></div>
      <Featured />
      <div className="mt-12"></div>
      <StoreInfo />
    </main>
  );
}
