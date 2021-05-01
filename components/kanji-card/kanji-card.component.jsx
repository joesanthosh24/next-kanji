import { ItemCard } from "./kanji-card.styles";

const KanjiCard = ({ character, selectCharacter, ...otherProps }) => {
  const handleClick = () => {
    if (selectCharacter) {
      selectCharacter(character);
    } else {
      return;
    }
  };

  return (
    <ItemCard onClick={handleClick} {...otherProps}>
      <h1>{character}</h1>
    </ItemCard>
  );
};

export default KanjiCard;
