import React, {  useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from '../utils/axios';
import Loding from './Loding';

function Details() {
    const { id } = useParams();

    const [Product, setProduct] = useState(null)

    const getSingleProduct = async () =>{
        try{
            const { data } = await axios(`/products/${id}`);
            setProduct(data);
        } catch(err){
            console.error(err);
        }
    };

    useEffect(() => {
        getSingleProduct();
    }, []);

    return  ( Product ? 
        <div className='w-[70%] justify-between gap-20 items-center h-full mx-auto p-[10%] flex'>
            

            <img className='w-[40%] h-[90%]  object-contain' src={`${Product.image}`} alt="a bag image" />

            <div className="content w-[80%] h-[80%] content-center">
                <h1 className='text-3xl mb-3 font-semibold'>{Product.title}</h1>
                <h3 className='text-zinc-400 mb-3'>{Product.category}</h3>
                <h2 className='text-red-400 mb-3'>{Product.price}</h2>
                <p className='mb-3' >{Product.description}</p>
                <Link className=' px-5 py-3 border rounded-md text-xs text-red-300 font-semibold border-red-200 mr-3'>Edit</Link>
                <Link className=' px-5 py-3 border rounded-md text-xs text-blue-300 font-semibold border-blue-200'>Delete</Link>
            </div>

        </div> : <Loding />
    );
}

export default Details;