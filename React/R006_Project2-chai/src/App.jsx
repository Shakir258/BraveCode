import React, { useCallback, useEffect, useRef, useState } from 'react';

function App() {

    const [length ,  setlength] =  useState(8);
    const [numAllo ,  setNumAllo] = useState(false);
    const [charAllo ,  setCharAllo] = useState(false);
    const [Password ,  setPassword] = useState("");

    const PasswordRef =  useRef(null)

    const passwordgenerator =  useCallback(()=>{
        let pass = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(numAllo) str += "0123456789"
        if(charAllo) str += "!@#$%^&*()`~[]{}"

        for(let i = 0; i < length; i++){
            let char =  Math.floor(Math.random() * str.length+1);

            pass +=  str.charAt(char)

        }
        setPassword(pass)

    }, [length , numAllo , charAllo,setPassword]);

    const copyOnClipBord = useCallback(()=>{
        PasswordRef.current?.select()
        window.navigator.clipboard.writeText(Password)
    },[Password])

    useEffect(()=>{
        passwordgenerator()
    },[length , numAllo , charAllo , passwordgenerator]);
    return (
        <>
            <div className='bg-black w-full h-screen'>
                <div className= 'mx-auto bg-gray-800 w-[60%] text-white items-center  '>
                    <h1>PasswordGenerator</h1>
                    <  input type="text" placeholder='password' readOnly ref={PasswordRef}  className='w-[80%] p-3 m-5 text-gray-800 bg-amber-50 rounded-md'
                    value={Password}/>
                    <button 
                    onClick={copyOnClipBord}
                    className='p-2 rounded-md bg-blue-600 text-white'>Copy</button>


                    <div>
                        <input type="range"
                        min={8}
                        max={100} 
                        value={length}
                        onChange={(e) =>{setlength(e.target.value)}}
                        
                        />
                        <label >length : {length}</label>
                    </div>
                    <div>
                        <input type="checkbox"
                        defaultChecked= {numAllo}
                        id='numberinput'
                        onChange={()=>{
                            setNumAllo((pre)=>!pre)
                        }} />
                        <label htmlFor="NumberInput">Number</label>
                    </div>
                    <div>
                        <input type="checkbox"
                        defaultChecked= {charAllo}
                        id='charinput'
                        onChange={()=>{
                            setCharAllo((pre)=>!pre)
                        }} />
                        <label htmlFor="charInput">Charactor</label>
                    </div>

                </div>

            </div>
        </>
    );
}



export default App;