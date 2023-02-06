import { Link } from "react-router-dom";

function Blog({data}) {
    return (
        <div className="blog__card">
            <Link to={'/post/' + data.id}>
                <div className="blog__image">
                    <img src={ process.env.PUBLIC_URL + '/img/blog/' + data.thumbnail} alt={data.title} />
                </div>
                <div className="blog__content">
                    <div className="blog__time">{Intl.DateTimeFormat("vi").format(new Date(data.created_at))}  - {data.created_by}</div>
                    <div className="blog__title">{data.title}</div>
                    <div className="blog__description">
                        {data.abstract}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Blog;