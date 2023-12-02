 import { useState,useEffect } from "react";
import Data from "./Data";
import { Link } from "react-router-dom";

export default function Home(props) {
   const [color, setColor] = useState([]);
   
  useEffect(() => {setColor(Data)}     

  ,[]) 
  const a=color.map((e,id)=>
  <div key={id}>
        
        <Link to={`/${e.id}`} >
        <h1>{e.title}</h1>
        </Link>
        <p>{props.te}</p>
   </div>  
   )
  //  function p() {
  //   setRunEffect(prev => prev + 1)
  //  };
   
  return (<>
      <button id="i"> click </button>
      <div style={{display:"flex",gap:"30px",flexWrap:"wrap"}}>{a}</div>
    </>
  );
}