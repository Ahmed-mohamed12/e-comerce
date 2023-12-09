import { Link } from "react-router-dom";
import "./index.css"

export default function Card(props){
    return(
    <Link to={`/${props.id}`} style={{textDecoration:"none"}}>
    <div className="card" style={{ display:"flex",transitionDuration: "0.8s",
transition: "transform 0.3s",

flexDirection:"column",borderRadius:"18px",backgroundColor:"gray"}}>
    <div  style={{width:"100%"}}>

<img src={props.img} alt="img" style={{width:"100%",minHeight:"250px"
,borderRadius:"18px"}}/>
    </div>
    <div className="text" style={{display:"flex",
    alignItems:"center",justifyContent:"space-between",color:"#fff"}}>

    
<h2>{props.title}</h2>
<h3>{props.price}</h3>
    </div>
</div>
        </Link>
)}