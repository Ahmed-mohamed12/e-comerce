import React, { useState, useEffect } from "react";
import { Data } from "./Data";
import Card from "./Card";

export default function Home(props) {
  const [color, setColor] = useState([]);

  useEffect(() => {
    setColor(Data);
  }, []);

  const cards = color.map((e, id) => (
    <Card key={id} id={e.id} title={e.title} price={e.price} img={e.thumb}>
     
    </Card>
  ));

  return (
    <>
      <button id="i"> انقر </button>
      <div style={{
  height: "100vh",
  overflowX: "hidden",
  display: "grid",
  gridTemplateRows: "auto auto auto",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  flexWrap: "wrap",
  backgroundColor:"#000",
  marginLeft: "auto",
  marginRight: "auto",
  padding:"20px",
  gap: "5px",
  
}}>
  {cards}
</div>

    </>
  );
}
