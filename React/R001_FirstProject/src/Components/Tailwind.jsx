import react from "react";
<<<<<<< HEAD
import pr from '../assets/pf.png';
=======
// import pr from "../Components/assets/pf.png";
>>>>>>> 318693b8e12dee35dc7a650f448342bccffca5ad


function Tailwind() {
    return (
        <div className="main w-full h-screen bg-white font-['gilroy light']">
            <div className="container mx-auto ">
                <div className="navbar flex justify-between items-center w-full py-6 px-4">
                    <h3 className="font-semibold">neganou.Design</h3>
                    <div className=" hidden lg:flex links gap-10">
                        <a className="text-sm" href="#">Home</a>
                        <a className="text-sm opacity-50" href="#">About</a>
                        <a className="text-sm opacity-50" href="#">Contact</a>
                        <a className="text-sm opacity-50" href="#">Services</a>
                    </div>
                    <i class="ri-menu-line lg:hidden"></i>
                    
                </div>

                <div className="hero w-full flex flex-col justify-between items-center">
                    <div className="hero-1 w-24 h-24 bg-blue-400 rounded-full mt-20">
<<<<<<< HEAD
                        <img src={pr} alt="image" />
=======
                        <img src="{require('../assets/pf.png')}" alt="imgaes" />
>>>>>>> 318693b8e12dee35dc7a650f448342bccffca5ad
                    </div>
                    <h3 className="text-xl font-semibold mt-10">I'm Shakir siddiqui</h3>
                    <h1 className=" w-3/4  tracking-tight text-4xl leading-none font-semibold text-center mt-3">Build Digital Product, brand, and exprimce</h1>
                    <p className="w-3/4 text-center mt-4 font-semibold trancking-tight text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, dolor quaerat voluptas magnam maiores recusandae.</p>
                    <button className="bg-black text-white py-2 px-4 rounded-full mt-5 font-semibold text-sm">Connect with me</button>
                </div>
            </div> 
        </div>
    )
}

export default Tailwind;