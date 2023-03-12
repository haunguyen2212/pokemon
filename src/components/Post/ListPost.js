import { useState } from "react";
import Card from "../common/Card";
import Posts from "../../json/post.json";


function ListPost() {
    const [listPost] = useState(Posts);

    return (
        <div className="block">
            <div className="block__header">Danh sách bài viết</div>
            <div className="block__container">
            { listPost.map((item) =>  <Card key={item.id} data={item} />)}
            </div>
        </div>
    );
}

export default ListPost;