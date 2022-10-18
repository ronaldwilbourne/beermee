
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Breweries from "./components/Breweries";
import NavBar from "./components/NavBar";

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
    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<Breweries data={Breweries}/>} />
        <Route path="/About" element={<About />} />

                       
      </Routes>
    </>
  );
}

export default App;
