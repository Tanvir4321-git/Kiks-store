'use client'

import YouAlsoMayLike from '@/Component/Product/ProductDetails/YouAlsoMayLike';
import axios from 'axios';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
        id: number;
        name: string;
        image: string;
    };
    images: string[];
}
const ProductDetails = () => {

    const { id } = useParams();
    const [products, setProducts] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios(`https://api.escuelajs.co/api/v1/products/${id}`);

            setProducts(res.data);
            setLoading(false);
        };
        fetchProducts();
    }, [id]);

    const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];


// skeleton
     if (loading) {
        return (
            <div className='md:max-w-330 max-w-89.5 mx-auto pt-8 animate-pulse'>
                <div className='flex md:flex-row flex-col gap-4'>

                    <div className='md:grid md:grid-cols-2 gap-4 w-full md:w-2/3 hidden md:block'>
                        <div className='h-[510px] bg-gray-300 rounded-tl-[48px]' />
                        <div className='h-[510px] bg-gray-300 rounded-tr-[48px]' />
                        <div className='h-[510px] bg-gray-300 rounded-bl-[48px]' />
                        <div className='h-[510px] bg-gray-300 rounded-br-[48px]' />
                    </div>

                    <div className='md:w-1/3 w-full space-y-4'>
                        <div className='h-6 bg-gray-300 w-32 rounded'></div>
                        <div className='h-8 bg-gray-300 w-3/4 rounded'></div>
                        <div className='h-6 bg-gray-300 w-24 rounded'></div>
                        <div className='h-10 bg-gray-300 w-full rounded'></div>
                        <div className='h-24 bg-gray-300 w-full rounded'></div>
                    </div>

                </div>
            </div>
        );
    }

    
    /* Empty State */
   

    if (!products) {
        return (
            <div className='md:max-w-330 max-w-89.5 mx-auto pt-20 text-center'>
                <h2 className='text-2xl font-semibold text-gray-700'>
                    No Product Found
                </h2>
                <p className='text-gray-500 mt-2'>
                    The product you are looking for does not exist.
                </p>
            </div>
        );
    }


    return (
        <div className='md:max-w-330 max-w-89.5 mx-auto pt-8'>
            {/* fits section */}
            <div className='flex md:flex-row flex-col gap-4 '>
                {/* image div */}
                <div className='md:grid md:grid-cols-2 gap-4 w-full md:w-2/3 hidden'>
                    <Image src={products?.images[0]} alt='' width={429} height={510} className='rounded-tl-[48px]' />
                    <Image src={products?.images[1]} alt='' width={429} height={510} className='rounded-tr-[48px]' />
                    <Image src={products?.images[2]} alt='' width={429} height={510} className='rounded-bl-[48px]' />
                    <Image src={products?.images[0]} alt='' width={429} height={510} className='rounded-br-[48px]' />
                </div>
                {/* mobile responsive image */}
                <div className='md:hidden '>
                    <Image src={products?.images[0]} alt='' width={358} height={273} className='rounded-2xl' />
                    <span className='flex justify-center -mt-5'>

                    <svg width="48" height="6" viewBox="0 0 48 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#4A69E2" />
                        <circle opacity="0.4" cx="17" cy="3" r="3" fill="#232321" />
                        <circle opacity="0.4" cx="31" cy="3" r="3" fill="#232321" />
                        <circle opacity="0.4" cx="45" cy="3" r="3" fill="#232321" />
                    </svg>
                    </span>
                    <div className='flex items-center gap-2 my-6'>
                         <Image src={products?.images[0]} alt='' width={64} height={64} className='rounded-lg' />
                    <Image src={products?.images[1]} alt='' width={64} height={64} className='rounded-lg' />
                    <Image src={products?.images[2]} alt='' width={64} height={64} className='rounded-lg' />
                    <Image src={products?.images[0]} alt='' width={64} height={64} className='rounded-lg' />
                    </div>

                </div>

                {/* text div */}

                <div className='md:w-1/3 w-full'>
                    <h3 className='rounded-xl text-[12px] md:text-[16]  py-2 md:py-3 px-4 bg-[#4A69E2] text-white inline'>
                        New Release
                    </h3>
                    <h1 className='text-[#232321] font-semibold text-[20px] md:text-[32px] md:my-4 my-2'>
                        {products.title}
                    </h1>
                    <h3 className='font-semibold text-2xl text-[#4A69E2] mb-8'>
                        ${products.price}
                    </h3>
                    <h4 className='font-semibold text-[#232321] mb-2'>
                        Color
                    </h4>
                    <svg className='w-18 h-8  md:w-24 md:h-12' viewBox="0 0 96 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="16" fill="#253043" />
                        <circle cx="24" cy="24" r="22.5" stroke="#232321" stroke-width="3" />
                        <circle cx="80" cy="24" r="16" fill="#707E6E" />
                    </svg>

                    <div>
                        <div className='flex items-center justify-between mt-8 mb-2'>
                            <h3 className='text-[#232321] font-semibold'>Size</h3>
                            <h3 className='text-[#232321] font-medium underline text-[14px]'>Size chart</h3>
                        </div>
                        {/*                            
                           sizes */}

                        <div className="flex flex-wrap gap-1">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    className={`w-12.5 h-12 rounded-lg text-sm font-medium
                                          ${size === 38
                                            ? 'bg-[#232321] text-white'
                                            : size === 39 || size === 40
                                                ? 'bg-[#D2D1D3] text-[#8F8C91]'
                                                : 'bg-white text-[#232321]'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>

                    </div>

                    {/* button */}
                    <div className='flex items-center gap-2 mt-8'>
                        <button className='py-2 px-4 rounded-lg bg-[#232321] text-white w-full'> Add to cart</button>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="8" fill="#232321" />
                            <path d="M27.0291 18.5C25.0003 18.5 24.0003 20.5 24.0003 20.5C24.0003 20.5 23.0003 18.5 20.9716 18.5C19.3228 18.5 18.0172 19.8794 18.0003 21.5253C17.9659 24.9419 20.7106 27.3716 23.7191 29.4134C23.802 29.4699 23.9 29.5 24.0003 29.5C24.1006 29.5 24.1986 29.4699 24.2816 29.4134C27.2897 27.3716 30.0344 24.9419 30.0003 21.5253C29.9834 19.8794 28.6778 18.5 27.0291 18.5V18.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                    <button className='py-2 px-4 rounded-lg bg-[#4A69E2] text-white w-full'> Buy it now</button>

                    {/* about the porduct */}
                    <div className='mt-8'>
                        <h3 className='font-semibold text-[#232321]'>
                            About the product
                        </h3>
                        <h3 className='text-[#232321] mt-2' >
                            Shadow Navy / Army Green
                        </h3>
                        <h3 className='text-[#232321] my-4' >
                            This product is excluded from all promotional discounts and offers.
                        </h3>
                        <ul className='list-disc pl-4'>
                            <li>Pay over time in interest-free installments with Affirm, Klarna or Afterpay.</li>
                            <li>Join adiClub to get unlimited free standard shipping, returns, & exchanges.</li>
                        </ul>
                    </div>


                </div>
            </div>
          
              {/* second section // you also may like this */}
              <div>
                <YouAlsoMayLike></YouAlsoMayLike>
              </div>

        </div>
    );
};

export default ProductDetails;