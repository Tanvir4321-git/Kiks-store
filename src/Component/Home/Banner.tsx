import React from 'react';

const Banner = () => {
    return (
        <div className='max-w-330 mx-auto pt-6'>
            <h1 className='font-bold text-[223.5px] text-center mb-6'>
                DO IT<span className='text-[#4A69E2]'> Right</span>
            </h1>

            <div className='w-full h-187.5 rounded-xl bg-[url(/bannerBG.png)] bg-cover bg-center bg-no-repeat'>
            </div>
        </div>
    );
};

export default Banner;