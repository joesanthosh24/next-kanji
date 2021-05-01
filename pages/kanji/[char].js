import styles from "../../styles/Home.module.css";

import KanjiCard from "../../components/kanji-card/kanji-card.component";
import ArrayTextDisplay from "../../components/array-text-display/array-text-display.component";

import { DisplayHeader } from "../../styles/kanji-char.styles";

export async function getStaticPaths() {
  let kanjiData = [];

  await fetch(`https://kanjiapi.dev/v1/kanji/all`, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      kanjiData = data;
    });

  const paths = [];

  kanjiData.forEach((kanji) => paths.push({ params: { char: kanji } }));
  console.log(paths);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  let character = params.char;
  console.log(character);

  character = encodeURI(character);

  let charData = {};

  await fetch(`https://kanjiapi.dev/v1/kanji/${character}`, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      charData = data;
    });

  return {
    props: { character, charData },
  };
}

const CharacterInfoPage = ({ character, charData }) => {
  const decodedCharacter = decodeURI(character);
  const {
    grade,
    jlpt,
    stroke_count,
    meanings,
    kun_readings,
    on_readings,
  } = charData;

  return (
    <div className={styles.containerNotHome}>
      <DisplayHeader>
        <h1>{decodedCharacter}</h1>
      </DisplayHeader>
      <div style={{ textAlign: "center", color: "white" }}>
        {grade && <p>Grade: {grade}</p>}
        <br />
        {jlpt && <p>JLPT Level N{jlpt}</p>}
        <br />
        <p>Stroke Count: {stroke_count}</p>
        <br />
        <ArrayTextDisplay title="Meanings" contents={meanings} />
        {kun_readings.length > 0 && (
          <>
            <br />
            <ArrayTextDisplay
              title="Japanese Readings"
              contents={kun_readings}
            />
          </>
        )}
        {on_readings.length > 0 && (
          <>
            <br />
            <ArrayTextDisplay title="Chinese Readings" contents={on_readings} />
          </>
        )}
        <br />
      </div>
    </div>
  );
};

export default CharacterInfoPage;
