import React, { useState } from "react";
import Propes from "./Components/Propess.jsx";
import Navi from "./Components/Navi.jsx";
import Music from "./Components/Music.jsx";


function App() {

  const data =[
    {name: "Chale Aare" , image:"https://images.unsplash.com/photo-1735627062325-c978986b1871?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D", create:"Aasif", added:false},
    {name: "Aaj ki Rat" , image:"https://images.unsplash.com/photo-1735627062325-c978986b1871?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D", create:"Shakir", added:false},
    {name: "Chamak Challo" , image:"https://images.unsplash.com/photo-1735627062325-c978986b1871?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D", create:"Amaan", added:false},
    {name: "Chumma Chumma" , image:"https://images.unsplash.com/photo-1735627062325-c978986b1871?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D", create:"GuruRandhava", added:true},
  ]

  const [songdata , setsongdata]= useState(data);

  const AddToFav = (index)=>(
    setsongdata((items)=>(
      items.map((item, i)=>(
        i===index ? {...item, added: !item.added} : item
      ))
    ))
  )

  return (
  <div className="w-full h-screen bg-zinc-300 px-20">
    <Navi count={songdata.filter((item)=>item.added).length} />
    <div className="flex flex-wrap  gap-10">
      {songdata.map((items,index)=>(
        <Music data={items} AddTofav={AddToFav} index={index} key={index}/>
      ))}
    </div>
  </div>
  );
}

export default App;
