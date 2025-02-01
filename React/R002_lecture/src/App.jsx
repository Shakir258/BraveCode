import React, { useState } from "react";
import Propes from "./Components/Propess.jsx";

function App() {
  const data = [
    { name: "Shakir", profession: "Web Developer", image: "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=7ALPYLBf4Lt2pG60Vz5mGsWGxj1Y4y8iCQZD6b-oeeE=", friend: false },
    { name: "Amaan", profession: "Freelancer", image: "https://media.istockphoto.com/id/953587362/photo/businessman-standing-with-his-arms-folded-stock-image.webp?a=1&b=1&s=612x612&w=0&k=20&c=mPW5qvGvDq-8SAiavlGhqT5p3eiur2DqdhSmYCUfPgY=", friend: false },
    { name: "Aasif", profession: "Java Developer", image: "https://media.istockphoto.com/id/1288039261/photo/portrait-of-a-smiling-middle-aged-man-of-indian-origin.webp?a=1&b=1&s=612x612&w=0&k=20&c=sWcFk1vSJ1MOgQANqzzBnVn5CMg4RyJMVS_Nee7nvcc=", friend: false },
    { name: "Rohit", profession: "Python Developer", image: "https://media.istockphoto.com/id/1170154554/photo/young-handsome-business-man-dressed-in-casual-denim-shirt-with-smartwatch-on-wrist-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=97Py9o77T-n1akShK3jHnJMXcs8y4O0NkeQB51gprXg=", friend: false }
  ];

  const [realdata, setRealData] = useState(data);

  const dum = (index) => {
    setRealData((previous) => {
      return previous.map((item, idx) => { 
      if(idx === index){
        return {...item, friend: !item.friend}
        
      }
      else{
        return item;
      }
    })
  });
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-400 flex items-center justify-center gap-10">
        {realdata.map((item, index) => (
          <Propes key={index} index={index} value={item} dummy={() => dum(index)} />
        ))}
      </div>
    </>
  );
}

export default App;
