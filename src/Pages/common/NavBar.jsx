import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import Logo_Icon from '../../assets/icon.png'

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
    <div className='w-[100%] fixed bg-[#fff] px-[100px] py-4 flex justify-between items-center'>
        {/* LOGO */}
        <div className=''>
            <img className='inline' src={Logo_Icon} alt="logo icon" />
            <img className='inline' src={Logo} alt="logo" />
        </div>

        {/* NAV LINKS */}
        <div className='flex justify-between items-center gap-10'>
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
            <Link to='/signin' className='flex items-center justify-center w-[104px] h-[44px] border border-[#097E72] rounded-[10px]'>
                <p className='text-[#097E72]'>Sign In</p>
            </Link>
            <Link to='/register' className='flex items-center justify-center w-[104px] h-[44px] bg-[#097E72] rounded-[10px]'>
                <p className='text-white'>Register</p>
            </Link>
        </div>
    </div>
  )
}

export default NavBar