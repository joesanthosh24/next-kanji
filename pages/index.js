import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kanji App</title>
        <link rel="icon" href="/images/fire-kanji.svg" />
      </Head>
      <main>
        <h1>Learn all Grade School Kanji</h1>
      </main>
    </div>
  );
}
