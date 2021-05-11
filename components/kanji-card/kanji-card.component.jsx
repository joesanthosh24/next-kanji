import { ItemCard } from "./kanji-card.styles";

const KanjiCard = ({ character, ...otherProps }) => {
  return (
    <ItemCard {...otherProps}>
      <h1>{character}</h1>
    </ItemCard>
  );
};

export default KanjiCard;
