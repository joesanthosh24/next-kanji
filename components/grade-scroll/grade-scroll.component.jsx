import { withRouter } from "next/router";

import { GradeScrollWrapper, Item } from "./grade-scroll.styles";

import KanjiCard from "../kanji-card/kanji-card.component";

const GradeScroll = ({ grade, characters, router }) => {
  const textToDisplay =
    grade < "8" ? `Grade ${grade} Kanji` : "Middle and High School Kanji";

  const handleSelection = (char) => {
    router.push(`/kanji/${char}`);
  };

  return (
    <div>
      <h3>{textToDisplay}</h3>
      <GradeScrollWrapper>
        {characters.map((character) => (
          <KanjiCard
            selectCharacter={handleSelection}
            key={character}
            character={character}
            inverted
          />
        ))}
      </GradeScrollWrapper>
    </div>
  );
};

export default withRouter(GradeScroll);
