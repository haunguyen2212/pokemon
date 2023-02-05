import Blog from "../common/Blog";

function ListPosts() {
    return (
        <div className="blog">
            <div className="blog__header">Danh sách bài viết</div>
            <div className="blog__container">
                <Blog />
                <Blog />
                <Blog />
            </div>
        </div>
    );
}

export default ListPosts;