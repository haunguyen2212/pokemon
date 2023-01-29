function ItemPokemon({data}){
    return (
        <div className={`pokemon-box pokemon-box--${data.type}`}>
            <span></span>
            <div className="pokemon-box__content">
                <a className="pokemon-box__link" href="/home">
                    <img className="pokemon-box__image" src={data.img} alt={data.name} /> 
                    <div className="pokemon-box__name">{data.name}</div>
                    <div className="pokemon-box__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                </a>
            </div>   
        </div>
    )
}

export default ItemPokemon;