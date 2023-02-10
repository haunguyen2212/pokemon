import '../../css/blog.css';

function Blog({ id }){
    return (
        <div className="blog">
            <div className="blog__left">
                <div className="blog__card">
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Dec 7, 2017</h5>
                    <div className="blog__image" style={{ height: '200px' }}>Image</div>
                    <p>Some text..{id}</p>
                </div>
            </div>
            <div className="blog__right">
                <div className="blog__card">
                    <h2>About Me</h2>
                    <div className="blog__image" style={{height: '100px'}}>Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                </div>
            </div>
      </div>
    );
}

export default Blog;