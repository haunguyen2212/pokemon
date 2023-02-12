import '../../css/blog.css';

function Blog({ data }){
    return (
        <div className="blog">
            <div className="blog__left">
                <div className="blog__card">
                    <div className='blog__title--main'>{data.title}</div>
                    <h5>Title description, Dec 7, 2017</h5>
                    <div className="blog__image--main">
                        <img src={ process.env.PUBLIC_URL + '/img/blog/' + data.thumbnail } alt={ data.title } />
                    </div>
                    <p className='blog__abstract'>{data.abstract}</p>
                    <div className='blog__description' dangerouslySetInnerHTML={{__html: data.description}} />
                </div>
            </div>
            <div className="blog__right">
                <div className="blog__card">
                    <h2>About Me</h2>
                    <div className="blog__image--sub">Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                </div>
            </div>
      </div>
    );
}

export default Blog;