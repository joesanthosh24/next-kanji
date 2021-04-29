import { ItemCard } from "./kanji-card.styles";

const KanjiCard = ({ character, selectCharacter, ...otherProps }) => {
  return (
    <ItemCard onClick={() => selectCharacter(character)} {...otherProps}>
      <h1>{character}</h1>
    </ItemCard>
  );
};

export default KanjiCard;
