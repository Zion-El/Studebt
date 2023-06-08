import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Logo} from '../../assets/Logo.png'
import Icon from '../../assets/icon.png'

const NavBar = () => {

    const [active, setActive] = useState(false)

    const HandleActive = ({isActive}) =>{
        return({
            borderBottom: isActive ? "3px solid #27ae60" : "none",
            color: isActive ? "grey" : "#000",
            transition: ".2s ease-in",
            fontWeight: "500"
        }
        )
    }

  return (
    <div className='w-full fixed bg-[#fff] px-[150px] py-4 flex justify-between items-center'>
        {/* LOGO */}
        <div>{Icon}</div>

        {/* NAV LINKS */}
        <div className='flex justify-between items-center gap-4'>
            <NavLink to='/' style={HandleActive} onClick={()=> setActive(!active)}>
               <p className='text-[#202020] text-[14px]'>Home</p> 
            </NavLink>
            <NavLink to='/help'>
               <p className='text-[#202020] text-[14px]'>How It Works</p> 
            </NavLink>
            <NavLink to='/about'>
               <p className='text-[#202020] text-[14px]'>About Us</p> 
            </NavLink>
            <NavLink to='/contact'>
               <p className='text-[#202020] text-[14px]'>Contact Us</p> 
            </NavLink>
        </div>

        {/* AUTH BUTTONS */}
        <div className='flex justify-between items-center gap-4'>
            <Link to='/signin'>
                <p>Sign In</p>
            </Link>
            <Link to='/register'>
                <p>Register</p>
            </Link>
        </div>
    </div>
  )
}

export default NavBar