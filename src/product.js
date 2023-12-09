 import {useParams} from "react-router-dom"
 import './App.css';
 import { Data } from "./Data"

// import { useEffect } from "react";
export default function Product(props){
  const{id}=useParams();
  const i=Data.filter(function(item){ 
    return item["id"] == id;}
  )
  
  
    // useEffect(() => {
    //   console.log("ID from useParams:", id);
    //   console.log("Filtered Data:", i);
    // }, [id, i]);
    
    return(<div style={{display:"flex",
    flexDirection:"column",
    width:"300px",height:"280px",ackgroundColor:"red",margin:"15px auto",padding:"0 15px"}}>
        
          
         <div className="img-div" style={{Width:"300px",height:"230px",}} >
              <img style={{maxWidth:"100%",height:"100%"}} className="rounded-sm h-80" src={i[0].thumb} alt="product" />
        </div> 

         
         <div className="m" style={{display:"flex",justifyContent:"space-between",
        }}>


          <p>
                {i[0].title}
          </p>
          <p>
                {i[0].price}
          </p>

        
         </div>

       
        
        </div>
    )
}