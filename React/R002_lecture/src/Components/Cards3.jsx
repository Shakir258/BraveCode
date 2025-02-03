import React from 'react';
import Card3 from './Card3';

function Cards3({realdata,handleRemov} ) {
    return(
        <>
        <div className='  flex  gap-10 flex-wrap justify-center rounded-md' >
            {realdata.map((items , index) =>
                {return <Card3 key={index} items={items} index={index} handleRemov={handleRemov}/>}
                )}
        </div>
        </>
    )
}

export default Cards3;