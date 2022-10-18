import React from "react";
import defaultImage from "../images/beer.jpeg";

const Brewery = ({ item }) => {
  return (
    <div>
      <img src={defaultImage} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.brewery_type}</p>
    </div>
  );
};

export default Brewery;
