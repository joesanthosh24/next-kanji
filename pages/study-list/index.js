import { connect } from "react-redux";
import { useRouter } from "next/router";

import KanjiCard from "../../components/kanji-card/kanji-card.component";

import styles from "../../styles/Home.module.css";

import { ListContainer, StudyContainer } from "../../styles/study.styles";

const StudyListPage = ({ studyList }) => {
  const router = useRouter();

  return (
    <div className={styles.containerNotHome}>
      <StudyContainer>
        <h1>Study List</h1>
        <ListContainer>
          {studyList.map(({ kanji }) => (
            <KanjiCard
              onClick={() => router.push(`/kanji/${kanji}`)}
              key={kanji}
              character={kanji}
            />
          ))}
        </ListContainer>
      </StudyContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  studyList: state.studyList.list,
});

export default connect(mapStateToProps)(StudyListPage);
