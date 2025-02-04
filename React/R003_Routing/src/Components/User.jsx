import React from 'react';
import { Link } from 'react-router-dom';

function User() {
    return (
        <div className='w-1/2 bg-red-300 m-auto p-4'>
            <h1 className=' text-2xl text-black-700 mb-10'>User</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum fuga eveniet veritatis voluptates dicta debitis nisi iure maxime est!</p>


            <br />

            <div className='w-fit m-auto p-4 flex flex-col gap-3'>
                <Link  className='w-fit bg-yellow-300 m-auto px-4 py2' to="/user/shakir">Shakir</Link>
                <Link className='w-fit bg-yellow-300 m-auto px-4 py2' to="/user/ayush">Ayush</Link>
                <Link className='w-fit bg-yellow-300 m-auto px-4 py2' to="/user/aman">Aman</Link>
                <Link className='w-fit bg-yellow-300 m-auto px-4 py2' to="/user/aasif">Aasif</Link>
            </div>
        </div>

        
    );
}

export default User;