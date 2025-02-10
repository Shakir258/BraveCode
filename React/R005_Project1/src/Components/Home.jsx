import React, { useContext } from 'react';
import Nav from './Nav';
import Details from './Details';
import { Link } from 'react-router-dom';
import {ProductContext} from '../utils/Context';
import Loding from './Loding';

function Home() {

    const [products] = useContext(ProductContext);
    return (
        <>
        <Nav />
        {products ? 
        (<div className=' w-[85%]  p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>

                {products.map((product,index)=>(
                    <Link  key={product.id}
                    to= {`/details/${product.id}`}
                className="card mr-3 mb-3 p-3 border shadow rounded w-[18%] h-[30vh] flex justify-center items-center flex-col ">
                    <div className="hover:scale-110 mb-3 w-full  h-[80%] bg-contain bg-no-repeat bg-center" 
                    style={{backgroundImage: `url(${product.image})`}}></div>
                    <h1 className='hover:text-blue-300'>{product.title}</h1>
                </Link>
                ))}

                    

        </div>) : (<Loding />)}
        </>
    );
}

export default Home;