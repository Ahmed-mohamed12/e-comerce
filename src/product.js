import {useParams} from "react-router-dom"
export default function Product(){
    const Params=useParams();
    const Id=Params.userId
    return(<>
        <h1>product {Id} </h1>
        <p >444</p>
        </>
    )
}