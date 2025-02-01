import React from 'react';


function Propess({value ,dummy}){
    const {name , image , profession , friend} = value;
    return (
        <div className='w-52  bg-white rounded-md overflow-hidden'>
            <div className='w-full h-32 bg-sky-300'>
                <img className='w-full h-full object-cover' src={image} alt="" />
            </div>
            <div className="w-full p-3">
                <h3 className='text-xl font-semibold '>{name}</h3>
                <h5 className='text-xm'>{profession}</h5>
                <button onClick={dummy} className=' mt-4 px-3 py-1 text-xm text-white bg-blue-400 font-semibold rounded-md '> { friend === true ? "Unfollow" : "Follow"}</button>
            </div>
        </div>
    )
}

export default Propess;