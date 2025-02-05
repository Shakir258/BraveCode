import React from 'react';
import axios from 'axios';

function App1() {

    const getProduct = ()=> {
        const api = 'https://fakestoreapi.com/products/';
        axios.get(api)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }


    const addProduct = ()=> {
        const api = 'https://fakestoreapi.com/products/';
        axios.post(api , {
            title : 'shakir',
            price : 123,
            description : 'hello',
            images : 'https://i.ibb.co/wv6DkRc/shakir.png',
            category : 'shakir'

        })
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }


    return (
        <div>
            <h1>Shakir</h1>
            <button onClick={getProduct } className=' px-3 py-2 bg-red-700 text-white'>fetch data </button>
            <br /><br />
            <button onClick={addProduct } className=' px-3 py-2 bg-red-700 text-white'>ADD data </button>
        </div>
    );
}

export default App1;