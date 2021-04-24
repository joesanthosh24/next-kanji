import { GradeScrollWrapper, Item } from "./grade-scroll.styles";

const GradeScroll = ({ grade, characters }) => {
  const textToDisplay =
    grade < "8" ? `Grade ${grade} Kanji` : "Middle and High School Kanji";

  return (
    <div>
      <h3>{textToDisplay}</h3>
      <GradeScrollWrapper>
        {characters.map((character) => (
          <Item key={character}>{character}</Item>
        ))}
      </GradeScrollWrapper>
    </div>
  );
};

export default GradeScroll;
