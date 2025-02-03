import React from 'react';

function Card3({items,handleRemov ,index } ) {
    return (
        <>
            <div className='w-40 p-2 bg-zinc-100 flex flex-col items-center rounded-md' >
            <div className='w-[3vw] h-[3vw] bg-amber-300 rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover ' src={items.image} alt="" />
            </div>
            <h1 className='text-sm font-semibold mt-1'>{items.name}</h1>
            <h3 className='text-xs font-semibold text-zinc-400'>{items.email}</h3>
            <p className='text-xs text-center '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, laboriosam.</p>
            <button onClick={()=>handleRemov(index)} className='text-xs font-semibold bg-red-600 px-4 py-1 rounded-md'>Remove</button>
        </div>
        
        </>
    );
}

export default Card3;