import ItemPokemon from "./ItemPokemon"

function ListPokemon(){

    return (
        <div className="pokemon-list">
            <ItemPokemon data={{name: 'Fushigidane', img : process.env.PUBLIC_URL + '/pokemon/0001_Fushigidane.png', type: "grass"}} />
            <ItemPokemon data={{name: 'Fushigisou', img : process.env.PUBLIC_URL + '/pokemon/0002_Fushigisou.png', type: "grass"}} />
            <ItemPokemon data={{name: 'Fushigibana', img : process.env.PUBLIC_URL + '/pokemon/0003_Fushigibana.png', type: "grass"}} />
            <ItemPokemon data={{name: 'Hitokage', img : process.env.PUBLIC_URL + '/pokemon/0004_Hitokage.png', type: "fire"}} />
            <ItemPokemon data={{name: 'Lizardo', img : process.env.PUBLIC_URL + '/pokemon/0005_Lizardo.png', type: "fire"}} />
            <ItemPokemon data={{name: 'Lizardon', img : process.env.PUBLIC_URL + '/pokemon/0006_Lizardon.png', type: "fire"}} />
            <ItemPokemon data={{name: 'Zenigame', img : process.env.PUBLIC_URL + '/pokemon/0007_Zenigame.png', type: "water"}} />
            <ItemPokemon data={{name: 'Zenigame', img : process.env.PUBLIC_URL + '/pokemon/0008_Kameil.png', type: "water"}} />
            <ItemPokemon data={{name: 'Kamex', img : process.env.PUBLIC_URL + '/pokemon/0009_Kamex.png', type: "water"}} />
            <ItemPokemon data={{name: 'Caterpie', img : process.env.PUBLIC_URL + '/pokemon/0010_Caterpie.png', type: "insects"}} />
            <ItemPokemon data={{name: 'Transell', img : process.env.PUBLIC_URL + '/pokemon/0011_Transell.png', type: "insects"}} />
            <ItemPokemon data={{name: 'Butterfree', img : process.env.PUBLIC_URL + '/pokemon/0012_Butterfree.png', type: "insects"}} />
            <ItemPokemon data={{name: 'Beedle', img : process.env.PUBLIC_URL + '/pokemon/0013_Beedle.png', type: "insects"}} />
            <ItemPokemon data={{name: 'Cocoon', img : process.env.PUBLIC_URL + '/pokemon/0014_Cocoon.png', type: "insects"}} />
            <ItemPokemon data={{name: 'Spear', img : process.env.PUBLIC_URL + '/pokemon/0015_Spear.png', type: "insects"}} />
            <ItemPokemon data={{name: 'Poppo', img : process.env.PUBLIC_URL + '/pokemon/0016_Poppo.png', type: "normal"}} />
            <ItemPokemon data={{name: 'Pigeon', img : process.env.PUBLIC_URL + '/pokemon/0017_Pigeon.png', type: "normal"}} />
            <ItemPokemon data={{name: 'Pigeot', img : process.env.PUBLIC_URL + '/pokemon/0018_Pigeot.png', type: "normal"}} />
            <ItemPokemon data={{name: 'Koratta', img : process.env.PUBLIC_URL + '/pokemon/0019_Koratta.png', type: "normal"}} />
            <ItemPokemon data={{name: 'Ratta', img : process.env.PUBLIC_URL + '/pokemon/0020_Ratta.png', type: "normal"}} />
        </div>
    )
}

export default ListPokemon;