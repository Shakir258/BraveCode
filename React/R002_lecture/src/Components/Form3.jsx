import React from 'react';
import { useForm } from 'react-hook-form';


function Form3({handleSubmitForm}) {

    const {register , handleSubmit , reset} = useForm();

    const handleSubmits = (data) => {
        handleSubmitForm(data);
        reset();
    }

    return (
        <>
        <form action="" onSubmit={handleSubmit(handleSubmits)}>
            <input {...register('name')} className='outline-none text-black bg-white ml-2 p-2 rounded-md'  type="text" placeholder='Enter your name' />
            <input {...register('email')} className='outline-none text-black bg-white ml-2 p-2 rounded-md' type="email" placeholder='Enter your Mail' />
            <input {...register('image')} className='outline-none text-black bg-white ml-2 p-2 rounded-md' type="text" placeholder='Enter your image'/>
            <input className='outline-none text-black bg-white ml-2 p-2 rounded-md' type="submit" />
        </form>
        </>
    );
}

export default Form3;