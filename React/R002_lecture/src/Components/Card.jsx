import React from "react";

function Card(){

    var data = [{image : "https://images.unsplash.com/photo-1736230990003-a98eea26ea1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" , name: "samsung" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veritatis.", instock: true},
        {image : "https://images.unsplash.com/photo-1604212666403-8af98b2081e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D" , name: "apple" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veritatis.",instock: false },
        {image : "https://images.unsplash.com/photo-1611648694964-a4cbd6ab1c70?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name: "laptop" , description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veritatis.",instock: true},
    ]

    const shakir=()=>{
        alert("shakir")
    }

    return (
        <div className="flex justify-center items-center gap-4 w-screen h-screen">
            {data.map((data , index)=>  {
                return(
                    <div key={index} className=" w-60 h-80 bg-gray-200 rounded-lg overflow-hidden">
                
                        <div className="w-full h-1/2">
                        <img src={data.image} className="w-full h-full object-cover" alt=""/>
                        </div>
                        <h2 className="pt-2 pl-3 text-xl font-bold">{data.name}</h2>
                        <p className="pt-1 pl-3 text-sm font-semibold opacity-50">{data.description}</p>
                        <button onClick={shakir} className={`px-4 py-1 m-3 ${data.instock ? "bg-blue-700" : "bg-red-700"} rounded `}>{data.instock ? "instock" : "out of stock"}</button>
                    </div>
                    )
            })}
        </div>
    )
}

export default Card;