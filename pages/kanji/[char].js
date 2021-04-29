import styles from "../../styles/Home.module.css";

import KanjiCard from "../../components/kanji-card/kanji-card.component";

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
      console.log(data.length);
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
  console.log(charData);
  const { grade, jlpt, stroke_count } = charData;

  return (
    <div className={styles.containerNotHome}>
      <DisplayHeader>
        <h1>{decodedCharacter}</h1>
      </DisplayHeader>
      <br style={{ backgroundColor: "white", width: "10px", height: "10px" }} />
      <div style={{ textAlign: "center", color: "white" }}>
        <p>Grade: {grade}</p>
        <p>JLPT Level N{jlpt}</p>
        <p>Stroke Count: {stroke_count}</p>
      </div>
    </div>
  );
};

export default CharacterInfoPage;
