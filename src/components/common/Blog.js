import '../../css/blog.css';

function Blog({ blog, subBlog }){
    return (
        <div className="blog">
            <div className="blog__left">
                <div className="blog__card">
                    <div className='blog__title--main'>{blog.title}</div>
                    <h5>Title description, Dec 7, 2017</h5>
                    <div className="blog__image--main">
                        <img src={ process.env.PUBLIC_URL + '/img/blog/' + blog.thumbnail } alt={ blog.title } />
                    </div>
                    <p className='blog__abstract'>{blog.abstract}</p>
                    <div className='blog__description' dangerouslySetInnerHTML={{__html: blog.description}} />
                </div>
            </div>
            <div className="blog__right">
                <div className="blog__card">
                    <h2>Bài viết khác</h2>
                    {subBlog.map(item => {
                        return(
                        <div key={item.id}>
                            <div className="blog__image--sub">
                                <img src={ process.env.PUBLIC_URL + '/img/blog/' + item.thumbnail } alt={ item.title } />
                            </div>
                            <p>{item.title}</p>
                        </div>
                        );
                    })}
                    
                </div>
            </div>
      </div>
    );
}

export default Blog;