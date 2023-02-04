import { useState } from "react";
import ItemPokemon from "./ItemPokemon";
import Pokemon from "../../json/pokemon.json";

function ListPokemon(){

    const [pokemonList, setPokemonList] = useState(Pokemon);

    const handleSearchType = type => {
        setPokemonList(Pokemon.filter(item => item.type === type || item.secondType === type));
    }

    return (
        <div className="pokemon-list">
            { pokemonList.map((item) => <ItemPokemon key={item.id} data={item} onSearch={handleSearchType} />) }
        </div>
    )
}

export default ListPokemon;