import { useRouter } from "next/router";
import { connect } from "react-redux";

import { addToListSuccess } from "../../redux/actions/study-list-actions";

import styles from "../../styles/Home.module.css";

import ArrayTextDisplay from "../../components/array-text-display/array-text-display.component";
import ButtonContainer from "../../components/button-container/button-container.component";
import CustomButton from "../../components/button/button.component";

import {
  DisplayHeader,
  CharacterInfoContainer,
} from "../../styles/kanji-char.styles";

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

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  let character = params.char;

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

const CharacterInfoPage = ({ character, charData, addKanji }) => {
  const router = useRouter();

  const decodedCharacter = decodeURI(character);
  const { grade, jlpt, stroke_count, meanings, kun_readings, on_readings } =
    charData;

  return (
    <div className={styles.containerNotHome}>
      <DisplayHeader>
        <h1>{decodedCharacter}</h1>
      </DisplayHeader>
      <CharacterInfoContainer>
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
      </CharacterInfoContainer>
      <ButtonContainer direction="column">
        <CustomButton onClick={() => addKanji(charData)} fit hXlg>
          Add To Study List
        </CustomButton>
        <CustomButton onClick={() => router.back()} fit hXlg invertedBtn>
          Go Back
        </CustomButton>
      </ButtonContainer>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addKanji: (kanji) => dispatch(addToListSuccess(kanji)),
});

export default connect(null, mapDispatchToProps)(CharacterInfoPage);
