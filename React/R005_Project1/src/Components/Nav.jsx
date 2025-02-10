import React from 'react';

function Nav() {
    return (
        <nav className='w-[15%] h-screen bg-zinc-50 flex flex-col items-center pt-5'>
                    <a className=' px-5 py-3 border rounded-md text-xs text-blue-300 font-semibold border-blue-200' href="">Add New Prodect</a>
                    <hr className='w-[80%] my-3 ' />
                    <h1 className='text-2xl mb-3 w-[80%]'>Category</h1>

                    <ul className='w-[80%]'>

                        <li className='mb-3 flex  items-center' >
                            <span className='w-[15px] h-[15px] mr-2 bg-red-200 rounded-full '></span>
                            <h1>car 1</h1>
                        </li>

                        <li className='mb-3 flex  items-center' >
                            <span className='w-[15px] h-[15px] mr-2 bg-gray-200 rounded-full '></span>
                            <h1>car 1</h1>
                        </li>

                        <li className='mb-3 flex  items-center' >
                            <span className='w-[15px] h-[15px] mr-2 bg-blue-200 rounded-full '></span>
                            <h1>car 1</h1>
                        </li>

                    </ul>
                </nav>
    );
}

export default Nav;