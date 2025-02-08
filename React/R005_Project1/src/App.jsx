import React from 'react';

function App() {


    return (
        <div className='w-screen h-screen flex'>


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

                <div className=' w-[85%]  p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>

                    <div className="card mr-3 mb-3 p-3 border shadow rounded w-[18%] h-[30vh] flex justify-center items-center flex-col ">
                        <div className="hover:scale-110 mb-3 w-full  h-[80%] bg-contain bg-no-repeat bg-center" 
                        style={{backgroundImage: "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"}}></div>
                        <h1 className='hover:text-blue-300'>Lorem ipsum dolor sit.</h1>
                    </div>

                </div>

        </div>
    );
}

export default App;