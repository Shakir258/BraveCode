import React from 'react';


function  Music({data , AddTofav,index}){

    const {name , image , create , added } = data;


    return (
        <div className=' h-32 bg-white mt-10  rounded-md p-3 flex gap-3 relative' >
            <div className='w-20 h-20 bg-sky-300 rounded-md overflow-hidden' >
                <img className='w-full h-full object-cover' src={image} alt="" />
            </div>
            <div className=''>
                <h3 className='text-sm font-semibold'>{name}</h3>
                <h5 className='text-sm'>{create}</h5>
            </div>
            <button onClick={()=>AddTofav(index)} className={`text-sm ${added ? "bg-teal-200" : "bg-orange-400"} px-4 py-2 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 whitespace-nowrap rounded-full`}>{added ? "Added" : "Add to Favourite"}</button>

        </div>
    )
}

export default Music;