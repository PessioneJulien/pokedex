import logo from '../../img/logo.svg';
import './HeaderComponent.css'
import React from 'react';
import pokemons from '../../img/pokemons.json'

function HeaderComponent({language,setLanguage,setResearch,research}) {

  const pokemonLangue = pokemons[0].names


  const handleLanguageChange = (e) => setLanguage(e.target.value)
  const handleResearcheChange = (e)=> setResearch(pokemons.filter(pokemons => pokemons.names[language].toLowerCase().includes(e.target.value.toLowerCase())))

  return (
    <header>
        <div>
            <img src={logo}/>
          <select value={language}
            onChange={e => handleLanguageChange(e)}
            className="browser-default custom-select" >
            {
              Object.keys(pokemonLangue).map((address) => <option value={address}>{address}</option>)
            }
          </select>
        </div>
        <input
  placeholder='Quel pokémon voulez vous chercher'
  onChange={e=> handleResearcheChange(e)}
  />
    </header>
  );
}

export default HeaderComponent;
