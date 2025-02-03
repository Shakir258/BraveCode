import React, { useState } from 'react';
import Form3 from './Components/Form3';
import Cards3 from './Components/Cards3';


function App(){


    const [realdata , setrealdata] = useState([])

    const handleSubmitForm= (data ,index)=>{
        setrealdata([...realdata , data])
    }

    const handleRemov = (index)=>{
        setrealdata(realdata.filter((items , i)=> i !== index))
    }

    return(
        <div className='w-full h-screen bg-gray-300 flex flex-col justify-center items-center p-20 gap-10'>
            <Cards3 realdata={realdata}   handleRemov={handleRemov}/>
            <Form3  handleSubmitForm={handleSubmitForm} />
        </div>

    )
}
export default App;