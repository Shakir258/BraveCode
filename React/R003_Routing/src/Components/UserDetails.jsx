import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

function UserDetails() {

    const{name} = useParams()
    const navgate = useNavigate();

    const backhandle = () => {
        // navgate("/user")
        navgate(-1)
    }


    return (
        <div className='w-1/2 bg-blue-300 m-auto p-4'>
            <h1 className=' text-2xl text-black-700 mb-10'>hy {name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum fuga eveniet veritatis voluptates dicta debitis nisi iure maxime est!</p>
            <button onClick={backhandle} className='px-2 py-1 bg-blue-700 text-white'>Go Back </button>
        </div>
    );
}

export default UserDetails;