import './App.css';
import pokemons from './img/pokemons.json'
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import React from 'react'
import PokemonList from './components/LoadPokemons/PokemonList'

function App() {
  const [language, setLanguage] = React.useState("fr");
  const [research, setReasearch] = React.useState(pokemons);
  return (
    <>
      <HeaderComponent language={language} setLanguage={setLanguage} setResearch={setReasearch} research={research}/>
      <PokemonList language={language} research={research}/>
    </>
  );
}

export default App;
