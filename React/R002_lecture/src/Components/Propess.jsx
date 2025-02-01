import React from 'react';


function Propess({change,color}){
    return (
        <div>
            <button className={`${color} text-white py-2 px-4 m-10 rounded-full`} >{change}</button>
        </div>
    )
}

export default Propess;