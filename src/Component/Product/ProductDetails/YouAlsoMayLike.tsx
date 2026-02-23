'use client'
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

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

 
    /*  Loading Skeleton */
    if (loading) {
        return (
            <div className='pb-6 pt-6 md:pb-15 md:pt-22.5 animate-pulse'>
                <div className='flex justify-between items-end mb-6 md:mb-8'>
                    <div className='h-8 bg-gray-300 w-48 rounded'></div>
                    <div className='h-8 bg-gray-300 w-20 rounded'></div>
                </div>

                <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className='flex flex-col space-y-3'>
                            <div className='rounded-[24px] bg-gray-300 md:h-65 h-41'></div>
                            <div className='h-4 bg-gray-300 w-3/4 rounded'></div>
                            <div className='h-8 bg-gray-300 w-full rounded'></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }


    /*  Empty State */


    if (!products.length) {
        return (
            <div className='pb-20 pt-20 text-center'>
                <h2 className='text-2xl font-semibold text-gray-700'>
                    No Related Products Found
                </h2>
                <p className='text-gray-500 mt-2'>
                    Please check back later for more products.
                </p>
            </div>
        );
    }


    /*  Original UI (Unchanged) */
  

    return (
        <div className='pb-6 pt-6 md:pb-15 md:pt-22.5'>

            <motion.div
                className='flex justify-between items-end mb-6 md:mb-8'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <h1 className='font-semibold text-2xl text-[#232321] md:text-[48px] uppercase'>
                    You may also like
                </h1>

                <div className='flex items-center gap-2'>
                    <svg className='w-8 h-8 md:w-10 md:h-10' viewBox="0 0 40 40" fill="none">
                        <g opacity="0.5">
                            <rect x="40" y="40" width="40" height="40" rx="8" transform="rotate(180 40 40)" fill="#232321" />
                            <path d="M22 24.5L17.5 20L22 15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>

                    <svg className='w-8 h-8 md:w-10 md:h-10' viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" rx="8" fill="#232321" />
                        <path d="M18 15.5L22.5 20L18 24.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </motion.div>

            <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        className='flex flex-col'
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                    >

                        <div className='rounded-[24px] overflow-hidden relative border-6 border-white bg-[#eceef0]'>

                            <div className='bg-[#4A69E2] py-1.5 px-3 rounded-tl-[16px] rounded-br-[16px] absolute left-0 top-0 z-10'>
                                <h3 className='font-semibold text-[12px] text-white'>New</h3>
                            </div>

                            <div className='relative w-full md:h-65 h-41'>
                                <Image
                                    src={product.images[0]}
                                    alt={product.title}
                                    fill
                                    className='object-cover'
                                    unoptimized
                                />
                            </div>
                        </div>

                        <h2 className='md:text-2xl text-[16px] font-semibold my-4'>
                            {product.title}
                        </h2>

                        <MotionLink
                            href={`/product/${product.id}`}
                            className='py-2 px-4 rounded-lg text-[12px] text-center font-medium bg-black text-white w-full mt-auto'
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                        >
                            View Product -
                            <span className='text-[#FFA52F] text-[12px] font-medium'>
                                ${product.price}
                            </span>
                        </MotionLink>

                    </motion.div>
                ))}
            </div>

        </div>
    );
};

export default YouAlsoMayLike;