// COMPONENTS
import SingleCard from "./components/SingleCard";
// CSS
import "./SiteCard.css";
// PROPS
import { SiteCardProps } from "./SiteCardProps";
// TOOLS
import { GridSpanSwitcher } from "Tools/GridTools";

const SiteCards = (props: SiteCardProps) => {
  // PROPS
  const { card_size, data } = props;

  const displayCards = data.map((card) => (
    // returns a card for each object in the array
    <SingleCard
      {...card}
      key={card.title}
      // Size of card can be passed through, default is "small" (4 cards a row)
      span={GridSpanSwitcher(card_size)}
    />
  ));

  return <div className="site-grid-system">{displayCards}</div>;
};

export default SiteCards;
