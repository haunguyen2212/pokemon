import { useState } from "react";
import Blog from "../common/Blog";
import Posts from "../../json/post.json";


function ListPost() {
    // eslint-disable-next-line no-unused-vars
    const [listPost, setListPost] = useState(Posts);

    return (
        <div className="blog">
            <div className="blog__header">Danh sách bài viết</div>
            <div className="blog__container">
            { listPost.map((item) =>  <Blog key={item.id} data={item} />)}
            </div>
        </div>
    );
}

export default ListPost;