import React from 'react'
import Heading from './common/Heading'
import School  from '../assets/imagesschool.png'
import Parent from '../assets/imagesparent.png'

const Beneficiary = () => {
  return (
    <div className='w-[100%] bg-[#EFEBEB] px-[120px] py-16 '>
        <Heading title='Who Our Services Are For...'/>

        <div className='flex justify-between items-center'>
            <div className='w-[48%] h-[562px]'>
                <div className='w-[]'>
                    <div>
                        <img src={School} alt="" />
                    </div>
                    <div className='m-auto w-[90%]' >
                        <h3 className='text-center font-[700] text-[24px] my-6 text-[#202020]'>Schools</h3>
                        <p className='text-center text-[#6A6A6A] text-[14px]'>Schools in Lagos who register on the platform can make a list of school debtors, find information about a certain debtor or remove information once the debt has been cleared.</p>
                    </div>
                </div>
            </div>

            <div className='w-[48%] h-[562px]'>
                <div className='w-[]'>
                    <div>
                        <img src={Parent} alt="" />
                    </div>
                    <div className='w-[90%] m-auto'>
                        <h3 className='text-center font-[700] text-[24px] my-6 text-[#202020]'>Parents or Students</h3>
                        <p className='text-center text-[#6A6A6A] text-[14px]'>Although parents or students are not permitted to list or remove information from the platform, they’re allowed to file a complaint if they find inaccurate information on StuDebt regarding them or their loved ones.</p>
                    </div>
                </div>
            </div>
        </div>
        


    </div>
  )
}

export default Beneficiary