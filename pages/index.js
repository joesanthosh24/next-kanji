import styles from "../styles/Home.module.css";
import pageStyles from "../styles/index.module.css";

import FireKanji from "../public/images/fire-kanji.svg";

import CustomButton from "../components/button/button.component";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="page">
        <div className={pageStyles.home}>
          <FireKanji />
          <div className="heading">
            <h1 className="heading-primary">Fire Kanji</h1>
            <h2 className="heading-secondary">Learn all Grade School kanji</h2>
          </div>
          <CustomButton mtMd md hMd mrSm>
            Log In
          </CustomButton>
          <CustomButton mtLg md hMd invertedBtn mlSm>
            Sign In
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
