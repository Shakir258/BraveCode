import axios from './axios';
import React, { useEffect, useState, createContext } from 'react'; // Import createContext


export const ProductContext = createContext(); // Create Context
function Context(props) {
    const [Product, setProductState] = useState(null);


    const getProduct = async () =>{
        try{
            const { data } = await axios("/products");
            setProductState(data);
        } catch(err){
            console.error(err);
        }
    };

    useEffect(()=>{
        getProduct();
    },[])


    return (
        <ProductContext.Provider value={[Product, setProductState]}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default Context;