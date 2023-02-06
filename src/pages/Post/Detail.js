import { useParams } from "react-router-dom";

function Detail(){
    const params = useParams();

    return (
    <>
        {params.id}
    </>
    ); 
}

export default Detail;