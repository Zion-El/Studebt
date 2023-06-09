import React from 'react'
import BG from "../assets/hero_bg.png"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div style={{backgroundImage:`url(${BG})`, backgroundRepeat: "no-repeat", backgroundSize:"cover"}} className='w-screen h-[100vh] pl-[120px] pt-[8rem] flex justify-center items-center '>
        
        <div className='flex flex-col max-w-[50%] items-start gap-2'>
            <h1 className='text-[#202020] text-[56px] leading-[65px] font-[700]'>The Debt Validation <br/> Service For Schools</h1>
            
            <p className='w-[80%] text-[#454545] leading-[150%] text-[20px] text-left'>StuDebt is built to help schools around Lagos list debtors, find debtors, clear debts. </p>

            <div className='flex gap-6 mt-6'>
                <Link to='/register' className='flex items-center justify-center w-[140px] h-[44px] bg-[#097E72] rounded-[10px]'>
                    <p className='text-white'>Set Started</p>
                </Link>
                <Link to='/signin' className='flex items-center justify-center w-[140px] h-[44px] border border-[#097E72] rounded-[10px]'>
                    <p className='text-[#097E72]'>Sign In</p>
                </Link>
               
            </div>

        </div>
        <div className='w-[50%]'></div>
    </div>
  )
}

export default Hero