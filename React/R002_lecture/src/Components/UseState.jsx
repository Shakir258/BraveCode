import React, { useState } from 'react';




function UseState(){


    const [count , setcount] = useState({name:"shakir",ishuman:true});

    const [num,setnum] = useState([1,2,3,4,5,6,7,8]);



    return (
        <div className='p-4'>
            <h1>UseState</h1>
            <h2>{count.ishuman.toString()}</h2>
            <button onClick={()=>(setcount({...count, ishuman: !count.ishuman}))} className={`py-2 px-4 ${count.ishuman ?"bg-blue-500":"bg-red-700"} text-white rounded-full`}>Increment</button>

            <br />

            {num.map(item=><h1 className='py-2 px-4 '>{item}</h1>)}
            <button onClick={()=>setnum(()=>num.filter((item, index)=>{
                return index != num.length-1;
            }))} className ='py-2 px-4 bg-red-700 text-white rounded-full'>POP</button>
        </div>
    )
}
export default UseState;