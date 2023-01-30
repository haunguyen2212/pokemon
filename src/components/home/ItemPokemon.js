function ItemPokemon({data}){
    return (
        <div className={`pokemon-box pokemon-box--${data.type}`}>
            <span></span>
            <div className="pokemon-box__content">
                <a className="pokemon-box__link" href="/home">
                    <img className="pokemon-box__image" src={ process.env.PUBLIC_URL + '/pokemon/' + data.image} alt={data.name} /> 
                    <div className="pokemon-box__name">{data.name}</div>
                    <div className="pokemon-box__description">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                </a>
            </div>   
        </div>
    )
}

export default ItemPokemon;