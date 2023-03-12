import '../../css/pokemon_card.css';

function ItemPokemon({data, onSearch}){
    return (
        <div className={`pokemon-card bg-half-circle-${data.type[0]}`}>
            <div className="pokemon-card__no">{String(data.no).padStart(3, '0')}</div>
            <img className="pokemon-card__image" src={process.env.PUBLIC_URL + '/pokemon/' + data.image} alt={data.name} />
            <div className="pokemon-card__name">
                {data.name}
            </div>
            <div className="pokemon-card__type">
                <span onClick={() => onSearch(data.type[0])} className={`badge-${data.type[0]}`}>{data.type[0]}</span>
                {typeof data.type[1] !== "undefined" ? <span onClick={() => onSearch(data.type[1])} className={`badge-${data.type[1]}`}>{data.type[1]}</span> : ''}
            </div>
            <div className="pokemon-card__stats">
                <div>
                    <div>Height</div>
                    <div>{Number.parseFloat(data.height).toFixed(1)}</div>
                </div>
                <div>
                    <div>Weight</div>
                    <div>{Number.parseFloat(data.weight).toFixed(1)}</div>
                </div>
            </div>
        </div>
    )
}

export default ItemPokemon;