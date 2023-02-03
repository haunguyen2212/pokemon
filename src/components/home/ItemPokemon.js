function ItemPokemon({data}){
    return (
        <div className={`pokemon-card bg-half-circle-${data.type}`}>
            <div className="pokemon-card__no">{String(data.id).padStart(3, '0')}</div>
            <img className="pokemon-card__image" src={process.env.PUBLIC_URL + '/pokemon/' + data.image} alt={data.name} />
            <div className="pokemon-card__name">
                {data.name}
            </div>
            <div className="pokemon-card__type">
                <span className={`badge-${data.type}`}>{data.type}</span>
                {data.secondType !== null ? <span className={`badge-${data.secondType}`}>{data.secondType}</span> : ''}
            </div>
            <div className="pokemon-card__stats">
                <div>
                    <div>60</div>
                    <div>Attack</div>
                </div>
                <div>
                    <div>60</div>
                    <div>Defense</div>
                </div>
            </div>
        </div>
    )
}

export default ItemPokemon;