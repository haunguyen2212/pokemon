import { useState } from "react";
import Pokemons from '../json/pokemon.json';

function ItemPokemon(){

    const [state, setState] = useState(Pokemons[0]);

    const increase = index => {
        setState(Pokemons[(index+1) % Pokemons.length]);
    }

    return(
        <div style={{ 'marginTop' : '60px' }}>
            <div style={{ 'width' : '100%' }}>
                <img src={ process.env.PUBLIC_URL + '/pokemon/' + state.image} width="100px" alt="pokemon" />
            </div>
            
            <button type="button" onClick={() => increase(state.id)}>Click me</button>
        </div>
    );
}

export default ItemPokemon;