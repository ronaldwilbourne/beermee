import Cocktail from "./Brewery";

const Breweries = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <Cocktail key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Breweries;
