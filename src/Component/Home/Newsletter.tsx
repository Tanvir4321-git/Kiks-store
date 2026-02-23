import React from 'react';
import logo from '../../../public/footerlogo.png'
import Image from 'next/image';
const Newsletter = () => {
    return (
        <div className='md:max-w-330 max-w-89.5 mx-auto p-4 md:p-0 md:py-18 rounded-2xl md:rounded-[48px]   bg-[#4A69E2]'>
            <div className='flex  md:flex-row flex-col items-center justify-between'>

            <div className='md:ml-18 '>
                <h1 className='text-white font-semibold text-[32px] md:text-5xl'>Join our KicksPlus <br /> Club & get 15% off</h1>
                <h3 className='text-white open-sans md:pt-4 pt-2 pb-6 md:pb-8  font-semibold md:text-[20px] text-[16px]' >Sign up for free! Join the community.</h3>
                <input type="text"  placeholder='Email address' className=' border border-white rounded-lg   py-2 px-4'/> 
                <button className='rounded-lg py-2 px-4 md:px-6 text-[14px] bg-black text-white '>Submit</button>
            </div>
            <div className='md:mr-42 mt-10 pb-10 md:pb-0 md:mt-0 '>
                 <Image src={logo} alt='logo' width={128} />
            </div>
            
            </div>
        </div>
    );
};

export default Newsletter;