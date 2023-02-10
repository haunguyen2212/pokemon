import { Link } from "react-router-dom";
import '../../css/card.css';

function Card({data}) {
    return (
        <div className="card">
            <Link to={'/post/' + data.id}>
                <div className="card__image">
                    <img src={ process.env.PUBLIC_URL + '/img/blog/' + data.thumbnail} alt={data.title} />
                </div>
                <div className="card__content">
                    <div className="card__time">{Intl.DateTimeFormat("vi").format(new Date(data.created_at))}  - {data.created_by}</div>
                    <div className="card__title">{data.title}</div>
                    <div className="card__description">
                        {data.abstract}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;