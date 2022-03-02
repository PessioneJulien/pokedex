import './LoadPokemons.css'

function PokemonsList({language,research}) {
  return (
        <div className="cards">
            {research.map(pokemon => {
              const PokeDivs = (
                <div key={pokemon.id} className={"PokeDiv"}>
                  <p>No.{pokemon.id}</p>
                  <p>{pokemon.names[language]}</p>
                  <img src={pokemon.image}/>
                  <div>
                    {pokemon.types.map((type)=>{return <div key={type} className={"type "+ type}>{type}</div>})}
                  </div>
                </div>

              )

                
                return(
                    PokeDivs
                )
            })}
        </div>
    );
}

export default PokemonsList;