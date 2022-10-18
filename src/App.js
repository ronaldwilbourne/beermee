import { useState, useEffect } from "react";

function App() {
  const [cocktails, setCocktails] = useState("");

  const getCocktails = async () => {
    try {
      const res = await fetch(
        "https://api.openbrewerydb.org/breweries?per_page=5"
      );
      const json = await res.json();
      setCocktails(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCocktails();
  }, []);

  console.log(cocktails);

  return (
    <div className="App">
      <h1>test</h1>
    </div>
  );
}

export default App;
