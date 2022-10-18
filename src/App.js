import { useEffect,useState } from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import './App.css';

function App() {
  const [cocktails,setCotcocktails] = useState('')
  const getCocktail = async () =>{
  const res = await fetch('https://www.thecocktaildb.com/api.php')
  const json = await res.json()
  setCotcocktails(json)

}

  return (
    <div className="App">
      <NavBar/>
      <About/>
    </div>
  );
}

export default App;
