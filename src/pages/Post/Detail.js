import { useState } from "react";
import { useParams } from "react-router-dom";
import Blog from "../../components/common/Blog";
import Posts from '../../json/post.json'

function Detail(){
    const params = useParams();
    console.log(params);

    // eslint-disable-next-line no-unused-vars
    const [blog, setBlog] = useState(Posts.find(item => item.id === parseInt(params.id)));

    return (
        <Blog data={blog} />
    ); 
}

export default Detail;