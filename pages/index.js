import Head from "next/head";

import styles from "../styles/Home.module.css";
import pageStyles from "../styles/index.module.css";

import FireKanji from "../public/images/fire-kanji.svg";

import CustomButton from "../components/button/button.component";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kanji App</title>
        <link rel="icon" href="/images/fire-kanji.svg" />
      </Head>
      <div className="page">
        <div className={pageStyles.home}>
          <FireKanji />
          <h1 className="heading-primary">Fire Kanji</h1>
          <h2 className="heading-secondary">Learn all Grade School kanji</h2>
          <CustomButton mdBtn mrSm>
            Log In
          </CustomButton>
          <CustomButton mdBtn invertedBtn mlSm>
            Sign In
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
