import React from 'react';
import {   NavLink } from 'react-router-dom';

function Nav() {
    const Navsty = (e)=>{
        return {
            color: e.isActive ? "red" : "black" 
        }
    }

    return (
        <>
        <nav className="flex justify-center gap-4 p-5">
                <NavLink style={Navsty} to="/">Home</NavLink>


                <NavLink className={(e)=>{
                    return [
                        e.isActive ? "text-red-500" : "",
                        e.isActive ? "font-bold" : ""
                    ].join(" ")
                }} to="/user">User</NavLink>


                <NavLink to="/about" >
                    {(e)=>{
                        return (
                            <span  
                            className={
                                [
                                    e.isActive ? "text-red-600" : "",
                                    e.isActive ? "font-bold" : ""
                                ].join(" ")
                            }
                            >
                                About
                            </span>
                        )
                    }}
                </NavLink>
            </nav>
        </>
    );
}

export default Nav;