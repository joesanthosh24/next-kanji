import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { GradesPage } from "../../styles/grades.styles.js";

import GradeScroll from "../../components/grade-scroll/grade-scroll.component";

export async function getStaticProps(context) {
  const grades = [1, 2, 3, 4, 5, 6, 8];
  const results = [];

  for await (let grade of grades) {
    await fetch(`https://kanjiapi.dev/v1/kanji/grade-${grade}`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        results.push({ grade, kanji: data });
      });
  }

  return {
    props: { results },
  };
}

const Grades = ({ results }) => {
  return (
    <div className={styles.containerNotHome}>
      <GradesPage>
        <h1 className="heading-primary">Grades</h1>
        <h2 className="heading-secondary">Kanji taught from Grades 1-8</h2>
        {results.length > 0 &&
          results.map(({ grade, kanji }) => (
            <GradeScroll key={grade} grade={grade} characters={kanji} />
          ))}
      </GradesPage>
    </div>
  );
};

export default Grades;
