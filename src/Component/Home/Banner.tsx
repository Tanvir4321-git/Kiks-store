import React from 'react';
import shoe1 from '../../../public/shoe1.png'
import shoe2 from '../../../public/shoe2.png'
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='md:max-w-330 max-w-89.5 mx-auto pt-6'>
            {/* title */}
            <h1 className='font-bold text-6xl md:text-[223.5px] text-center mb-6'>
                DO IT<span className='text-[#4A69E2]'> Right</span>
            </h1>



            <div className='relative  w-[full] h-95.5 md:h-187.5 rounded-xl bg-[url(/bannerBG.png)] bg-cover bg-center bg-no-repeat'>

                {/* side sticker */}

                <h3 className='absolute -left-15 md:-left-20.5 top-20 md:top-40 p-2 md:p-6 rounded-b-lg md:rounded-b-xl -rotate-90  inline bg-black text-white font-semibold text-[12px] md:text-[16px]'>Nike product of the year </h3>

                {/* bottom text */}
                <div className='absolute bottom-4 pl-4 md:bottom-12 md:pl-12'>

                    <div className='md:w-122.5 w-[235px] pr-5 md:pr-0'>

                        <h1 className='md:text-[74px] text-2xl  font-semibold text-white'>
                            NIKE AIR MAX
                        </h1>
                        <h3  className='md:text-2xl text-[14px] open-sans text-[#E7E7E3] mb-6 font-semibold '>
                            Nike introducing the new air max for  everyone's comfort
                        </h3>
                        <button className='bg-[#4A69E2] py-2 md:px-8 px-4  rounded-lg  text-white text-[14px] font-medium'>Shop now</button>
                    </div>
                </div>
                
               {/*  bottom shoe image */}
               <div className='absolute right-4 md:right-8 bottom-4 md:bottom-8 space-y-4'>
            <Image src={shoe1}  alt='shoe' width={160} className='md:w-40 w-15'  />
            <Image src={shoe2}  alt='shoe' width={160}  className='md:w-40 w-15' />
               </div>

            </div>
        </div>
    );
};

export default Banner;