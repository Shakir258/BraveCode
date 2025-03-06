import React, { useState } from 'react';
import ColorChanger from './Components/ColorChanger.jsx';

function App1() {

    const [color , setcolor] =useState('olive')

    return (
        <div className='w-full h-screen  flex items-start justify-center p-5'
        style={{backgroundColor: color}}>
            <ColorChanger  change={setcolor} />
        </div>
    );
}

export default App1;