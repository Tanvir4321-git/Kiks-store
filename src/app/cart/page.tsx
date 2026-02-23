'use client'

import React, { useState } from 'react';
import cartImage from '../../../public/cart.png'
import Image from 'next/image';
import YouAlsoMayLike from '@/Component/Product/ProductDetails/YouAlsoMayLike';

const Cart = () => {
    const [quantity, setquantity] = useState<number>(1);

    const price: number = 130.00
    const totalPrice: number = quantity * price;
    const totalamount: number = totalPrice+6.99


    return (
        <div className='md:max-w-330 max-w-89.5 mx-auto pt-8'>
            <h1 className='font-semibold text-2xl md:text-[32px] text-[#232321]'>
                Saving to celebrate
            </h1>
            <h4 className=' text-[#232321] text-[12px] md:text-[14px] open-sans font-semibold my-2'>
                Enjoy up to 60% off thousands of styles during the End of Year sale - while suppiles last. No code needed.
            </h4>
            <h3 className=' text-[#232321] text-[14px] md:text-[16px] open-sans font-semibold '>
                Join us  or Sign-in
            </h3>

            <div className='flex gap-6 md:gap-12 md:flex-row flex-col  items-center'>
                {/* Your bag  left div */}
                <div className='rounded-2xl p-4 md:p-6 bg-white mt-6 md:mt-8 md:w-2/3 w-full'>
                    <h1 className='font-semibold text-[20px] md:text-[32px] text-[#232321]'>
                        Your Bag
                    </h1>
                    <h3 className='text-[#232321] open-sans text-[14px] md:text-[16px]  mt-2 '>
                        Items in your bag not reserved- check out now to make them yours.
                    </h3>
                    <div className='flex gap-4 md:gap-6 mt-2 md:mt-12'>
                        {/* cart image */}
                        <div className='md:w-1/3 w-1/2'>
                            <Image src={cartImage} alt='cartImage' width={207} height={225} className='rounded-6 md:w-[207px] w-[157px] md:h-[225px] h-[216px]' />
                        </div>
                        {/* text */}
                        <div className='flex md:flex-row flex-col  gap-20 md:w-2/3 w-1/2' >
                            <div>
                                <h1 className='font-semibold text-[16px] md:text-2xl text-[#232321]'>
                                    DROPSET TRAINER SHOES
                                </h1>
                                <h3 className='text-[#232321] text-[14px] md:text-[20px] open-sans  my-2 '>
                                    Men’s Road Running Shoes
                                </h3>
                                <h3 className='text-[#232321] text-[14px] md:text-[20px]  open-sans  mb-2 md:mb-5'>
                                    Enamel Blue/ University White
                                </h3>

                                {/* size and quenttity */}
                                <div className='flex items-center'>

                                <select className="text-[#232321] appearance-none md:appearance-auto font-semibold text-[16px] md:text-[20px] open-sans   pr-6 ">
                                    <option>Size 1</option>
                                    <option>Size 2</option>
                                    <option>Size 3</option>
                                </select>
                              

                                <select
                                    value={quantity}
                                    onChange={(e) => setquantity(Number(e.target.value))}
                                    className='text-[#232321] md:ml-10 ml-4 appearance-none md:appearance-auto font-semibold text-[16px] md:text-[20px] open-sans pr-6'
                                >
                                    <option value="1">Quentity 1</option>
                                    <option value="2">Quentity 2</option>
                                    <option value="3">Quentity 3</option>
                                    <option value="4">Quentity 4</option>
                                    <option value="5">Quentity 5</option>
                                </select>
                                </div>
                                <h3 className='text-[#4A69E2] text-[20px] font-semibold mt-2   md:hidden flex  '>
                                $130.00
                            </h3>
                                {/* delete and love icon */}
                                <div className='flex items-center gap-6 mt-2 md:mt-10'>
                                    <svg  className='md:w-6.5 w-6 h-6' viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.8081 0.75C14.7506 0.75 12.7506 4.75 12.7506 4.75C12.7506 4.75 10.7506 0.75 6.69314 0.75C3.39564 0.75 0.784389 3.50875 0.750639 6.80062C0.681889 13.6337 6.17126 18.4931 12.1881 22.5769C12.354 22.6897 12.55 22.7501 12.7506 22.7501C12.9513 22.7501 13.1473 22.6897 13.3131 22.5769C19.3294 18.4931 24.8188 13.6337 24.7506 6.80062C24.7169 3.50875 22.1056 0.75 18.8081 0.75V0.75Z" stroke="#232321" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <svg  className='md:w-6.5 w-6 h-6' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27 9L25.2081 26.2337C25.1509 26.7203 24.917 27.169 24.5509 27.4946C24.1847 27.8201 23.7118 28 23.2219 28H8.77875C8.2888 28 7.8159 27.8201 7.44977 27.4946C7.08365 27.169 6.84976 26.7203 6.7925 26.2337L5 9" stroke="#232321" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M29 4H3C2.44772 4 2 4.44772 2 5V8C2 8.55228 2.44772 9 3 9H29C29.5523 9 30 8.55228 30 8V5C30 4.44772 29.5523 4 29 4Z" stroke="#232321" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19.5 15L12.5 22M19.5 22L12.5 15" stroke="#232321" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>

                            </div>
                            <h3 className='text-[#4A69E2] text-2xl font-semibold  hidden md:flex  '>
                                $130.00
                            </h3>
                        </div>
                    </div>
                </div>

                {/* order summary */}

                <div className='md:w-1/3 w-full bg-white md:bg-[#e7e7e3] rounded-2xl p-4'>

                    <h1 className='font-semibold text-[20px] md:text-[32px] text-[#232321] mb-6'>
                        Order Summary
                    </h1>

                    <div className="space-y-4">
                        {/* 1 */}
                        <div className="flex justify-between">
                            <h3 className=' text-[#232321] text-[16px] md:text-[20px] font-semibold open-sans '>
                                {quantity} ITEM
                            </h3>
                            <h3 className=' text-[#232321] text-[16px] md:text-[20px]  font-semibold open-sans '>
                                ${totalPrice}
                            </h3>

                        </div>
                        {/* 2 */}
                        <div className="flex justify-between">
                            <h3 className=' text-[#232321] text-[16px] md:text-[20px]  font-semibold open-sans '>
                                Delivery
                            </h3>
                            <h3 className=' text-[#232321] text-[16px] md:text-[20px]  font-semibold open-sans '>
                                $6.99
                            </h3>

                        </div>
                        {/* 3 */}
                        <div className="flex justify-between">
                            <h3 className=' text-[#232321] text-[16px] md:text-[20px]  font-semibold open-sans '>
                                Sales Tax
                            </h3>
                            <h3 className=' text-[#232321] text-[16px] md:text-[20px]  font-semibold open-sans '>
                               -
                            </h3>



                        </div>
                        {/* 4 */}
                        <div className="flex justify-between">
                            <h3 className=' text-[#232321] text-[20px] md:text-2xl font-semibold '>
                                Total
                            </h3>
                            <h3 className=' text-[#232321] text-[20px] md:text-2xl   font-semibold open-sans '>
                               {totalamount}
                            </h3>

                        </div>
                        <button className='rounded-lg py-3 px-4 w-full bg-black text-white uppercase text-[14px] font-medium my-4 md:my-6'>Check out</button>
                         
                         <h1 className='font-semibold text-[16px] md:text-[20px] text-[#232321] underline decoration-[#a9a9a9] open-sans'>User a promo code</h1>


                    </div>
                </div>

            </div>

            <YouAlsoMayLike></YouAlsoMayLike>
            </div>
            );
};

            export default Cart;