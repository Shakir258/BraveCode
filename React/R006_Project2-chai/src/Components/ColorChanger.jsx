import React from 'react';

function ColorChanger({change}) {
    return (
        <div className=' bg-white flex px-4 py-2 rounded-3xl flex-wrap gap-5'>
            <button
            className='text-white bg-red-600 px-4 py-2 rounded-full '
            onClick={() => change('red')}
            >
                red
            </button>
            <button
            className='text-white bg-blue-600 px-4 py-2 rounded-full '
            onClick={() => change('blue')}
            >
                blue
            </button>
            <button
            className='text-white bg-green-600 px-4 py-2 rounded-full '
            onClick={() => change('green')}
            >
                green
            </button>
            <button
            className='text-white bg-blue-300 px-4 py-2 rounded-full '
            onClick={() => change('blue')}
            >
                olive
            </button>
            <button
            className='text-white bg-black px-4 py-2 rounded-full '
            onClick={() => change('black')}
            >
                black
            </button>
            <button
            className='text-white bg-yellow-600 px-4 py-2 rounded-full '
            onClick={() => change('yellow')}
            >
                yellow
            </button>
        </div>
    );
}

export default ColorChanger;