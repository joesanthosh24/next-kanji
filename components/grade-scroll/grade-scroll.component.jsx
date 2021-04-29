import { GradeScrollWrapper, Item } from "./grade-scroll.styles";

import KanjiCard from "../kanji-card/kanji-card.component";

const GradeScroll = ({ grade, characters }) => {
  const textToDisplay =
    grade < "8" ? `Grade ${grade} Kanji` : "Middle and High School Kanji";

  return (
    <div>
      <h3>{textToDisplay}</h3>
      <GradeScrollWrapper>
        {characters.map((character) => (
          <KanjiCard key={character} character={character} inverted />
        ))}
      </GradeScrollWrapper>
    </div>
  );
};

export default GradeScroll;
