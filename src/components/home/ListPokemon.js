import { useEffect, useState } from "react";
import ItemPokemon from "./ItemPokemon";
import { onSnapshot, orderBy, query, where } from "firebase/firestore";
import { colRef } from "../../firebase";

function ListPokemon(){

    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        getListPokemon();
    }, []);

    const getListPokemon = () => {
        const q = query(colRef, orderBy("no"));
        onSnapshot(q, (snapshot) => {
            let pokemon = [];
            snapshot.docs.forEach((doc) => {
                pokemon.push({ id: doc.id, ...doc.data() });
            });
            setPokemonList(pokemon);
        });  
    }
    
    const handleSearchType = type => {
        const q = query(colRef, where("type", "array-contains", type), orderBy("no", 'asc'));
        onSnapshot(q, (snapshot) => {
            let pokemon = [];
            snapshot.docs.forEach((doc) => {
                pokemon.push({ id: doc.id, ...doc.data() });
            });
            setPokemonList(pokemon);
        });
    }

    return (
        <div className="pokemon-list">
            { pokemonList.map((item) => <ItemPokemon key={item.id} data={item} onSearch={handleSearchType} />) }
        </div>
    )
}

export default ListPokemon;