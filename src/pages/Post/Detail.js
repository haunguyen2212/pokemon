import { useParams } from "react-router-dom";
import Blog from "../../components/common/Blog";

function Detail(){
    const params = useParams();

    return (
        <Blog id={params.id} />
    ); 
}

export default Detail;