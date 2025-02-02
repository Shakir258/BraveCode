import React from 'react';


function  Navi({count}){
    return (
        <div className='w-full h-20 flex justify-between items-center'>
            <h1 className='font-bold text-2xl'>MusicApp</h1>
            <div className='flex gap-4 bg-orange-400 py-2 px-4 rounded-md text-white text-sm font-semibold'>
                <h3>Favourite</h3>
                <h5>{count}</h5>
            </div>
        </div>
    )
}

export default Navi;