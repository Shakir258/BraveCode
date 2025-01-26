import react from "react";


function Tailwind() {
    return (
        <div className="main w-full h-screen bg-white font-['gilroy']">
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
            </div>
        </div>
    )
}

export default Tailwind;