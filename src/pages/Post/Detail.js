import { useState } from "react";
import { useParams } from "react-router-dom";
import Blog from "../../components/common/Blog";
import Posts from '../../json/post.json'

function Detail(){
    const params = useParams();

    const [blog] = useState(Posts.find(item => item.id === parseInt(params.id)));
    const [subBlog] = useState(Posts.filter(item => item.id !== parseInt(params.id)).slice(0, 5));

    return (
        <Blog blog={blog} subBlog={subBlog} />
    ); 
}

export default Detail;