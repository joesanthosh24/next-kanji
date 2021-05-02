import KanjiCard from "../../components/kanji-card/kanji-card.component";
import {
  CharactersContainer,
  CharacterHeading,
} from "../../styles/characters.style";
import { useRouter } from "next/router";

import styles from "../../styles/Home.module.css";

export async function getStaticProps() {
  let characters = [];

  await fetch(`https://kanjiapi.dev/v1/kanji/all`, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return (characters = data);
    });

  return {
    props: { characters },
  };
}

const Characters = ({ characters }) => {
  const router = useRouter();

  return (
    <div
      className={styles.containerNotHome}
      style={{ textAlign: "center", color: "white" }}
    >
      <CharacterHeading>All {characters.length} Characters</CharacterHeading>
      <CharactersContainer>
        {characters.map((char) => (
          <KanjiCard
            key={char}
            character={char}
            curvedMd
            selectCharacter={() => router.push(`/kanji/${char}`)}
          />
        ))}
      </CharactersContainer>
    </div>
  );
};

export default Characters;
