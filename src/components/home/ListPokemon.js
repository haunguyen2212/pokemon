import ItemPokemon from "./ItemPokemon";
import Pokemon from "../../json/pokemon.json";

function ListPokemon(){

    return (
        <div className="pokemon-list">
            { Pokemon.map((item) => <ItemPokemon key={item.id} data={item} />) }
        </div>
    )
}

export default ListPokemon;