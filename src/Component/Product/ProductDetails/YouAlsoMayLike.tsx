'use client'
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
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

const YouAlsoMayLike = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios('https://api.escuelajs.co/api/v1/products?categoryId=4');
            const limited = res.data.slice(0, 4);
            setProducts(limited);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    return (
        <div className='pb-6 pt-6 md:pb-15 md:pt-22.5'>

            {/* Title */}
            <div className='flex justify-between items-end mb-6 md:mb-8'>
                <h1 className='font-semibold text-2xl text-[#232321] md:text-[48px] uppercase'>
                    You may also like
                </h1>

                {/* arrow */}
                <div className='flex items-center gap-2'>
                    <svg  className='w-8 h-8 md:w-10 md:h-10 '  viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <rect x="40" y="40" width="40" height="40" rx="8" transform="rotate(180 40 40)" fill="#232321" />
                            <path d="M22 24.5L17.5 20L22 15.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>

                    <svg className='w-8 h-8 md:w-10 md:h-10 ' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#232321" />
                        <path d="M18 15.5L22.5 20L18 24.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>



                </div>
            </div>

            {/* Grid */}
            <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
                {products.map((product) => (
                    <div key={product.id} className='flex flex-col'>

                        <div className='rounded-[24px] overflow-hidden relative border-6 border-white bg-[#eceef0]'>

                            {/* New Badge */}
                            <div className='bg-[#4A69E2] py-1.5 px-3 rounded-tl-[16px] rounded-br-[16px] absolute left-0 top-0 z-10'>
                                <h3 className='font-semibold text-[12px] text-white'>New</h3>
                            </div>

                            {/* Image */}
                            <div className='relative w-full md:h-65 h-41 '>
                                <Image
                                    src={product.images[0]}
                                    alt={product.title}
                                    fill
                                    className='object-cover '
                                    unoptimized
                                />
                            </div>
                        </div>

                        <h2 className='md:text-2xl text-[16px] font-semibold my-4'>
                            {product.title}
                        </h2>
                        <Link href={`/product/${product.id}`} className='py-2 px-4 rounded-lg text-[12px] text-center font-medium bg-black text-white w-full mt-auto' >
                            View Product - <span className='text-[#FFA52F] text-[12px] font-medium'>${product.price}</span>
                        </Link>



                    </div>
                ))}
            </div>
            <span className='flex justify-center mt-8'>
                <svg width="172" height="6" viewBox="0 0 172 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="6" rx="3" fill="#4A69E2"/>
<rect opacity="0.25" x="44" width="40" height="6" rx="3" fill="#232321"/>
<rect opacity="0.25" x="88" width="40" height="6" rx="3" fill="#232321"/>
<rect opacity="0.25" x="132" width="40" height="6" rx="3" fill="#232321"/>
</svg>


            </span>

        </div>
    );
};

export default YouAlsoMayLike;