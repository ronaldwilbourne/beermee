import { useState, useEffect } from "react";
import Breweries from "./components/Breweries";

function App() {
  const [breweries, setBreweries] = useState([]);

  const getBreweries = async () => {
    try {
      const res = await fetch(
        "https://api.openbrewerydb.org/breweries?per_page=10"
      );

      const data = await res.json();
      setBreweries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBreweries();
  }, []);

  return (
    <div className="App">
      <Breweries data={breweries} />
    </div>
  );
}

export default App;
