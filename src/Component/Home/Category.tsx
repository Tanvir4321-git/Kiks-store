'use client'
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Category {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}

const Category = () => {
    const [Categorries, setcategories] = useState<Category | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios('https://api.escuelajs.co/api/v1/categories/4');
            setcategories(res.data);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    return (
        <div className='bg-black'>
            <div className='md:max-w-330 max-w-89.5 mx-auto'>

                {/* Title Motion */}
                <motion.div
                    className='flex justify-between items-center'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <div>
                        <h1 className='font-semibold md:text-[74px] text-2xl text-white pt-6 md:pt-22.5 md:pb-16 pb-6'>
                            Categories
                        </h1>
                    </div>

                    <div className='flex items-center gap-2'>
                        {/* svg same as before */}
                    </div>
                </motion.div>

                {/* Skeleton */}
                {loading && (
                    <div className='bg-[#eceef0] flex md:flex-row flex-col rounded-tl-[64px] ml-4 w-full animate-pulse'>
                        {/* unchanged skeleton */}
                    </div>
                )}

                {/* Empty State */}
                {!loading && !Categorries && (
                    <div className='flex flex-col items-center justify-center py-24 text-center'>
                        <h3 className='text-2xl font-semibold text-gray-200'>
                            No Category Found
                        </h3>
                        <p className='text-gray-400 mt-2'>
                            This category is not available right now.
                        </p>
                    </div>
                )}

                {/* Category Content Motion */}
                {!loading && Categorries &&
                    <motion.div
                        className='bg-[#eceef0] flex md:flex-row flex-col rounded-tl-[64px] ml-4 w-full'
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        {/* First Block */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className='relative h-[348px] md:h-[600px] md:w-[650px] w-[358px]'>
                                <Image
                                    src={Categorries.image}
                                    alt={Categorries.name}
                                    fill
                                    className='object-cover rounded-tl-[64px]'
                                />
                            </div>
                            <div className='md:my-8 my-4 flex justify-between items-end px-15'>
                                <h1 className='font-semibold text-2xl md:text-4xl uppercase'>
                                    {Categorries.name}
                                </h1>
                                <svg className=' w-8 h-8 md:w-12 md:h-12' viewBox="0 0 48 48" fill="none">
                                    <rect width="48" height="48" rx="8" fill="#232321" />
                                    <path d="M18.1668 17.1057H30.8947V29.8336M30.0108 17.9895L17.1061 30.8942"
                                        stroke="#E7E7E3"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round" />
                                </svg>
                            </div>
                        </motion.div>

                        {/* Second Block */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className='relative h-[348px] md:h-[600px] md:w-[668px] w-[358px]'>
                                <Image
                                    src={Categorries.image}
                                    alt={Categorries.name}
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <div className='md:my-8 my-4 flex justify-between items-end px-15'>
                                <h1 className='font-semibold text-2xl md:text-4xl uppercase'>
                                    {Categorries.name}
                                </h1>
                                <svg className=' w-8 h-8 md:w-12 md:h-12' viewBox="0 0 48 48" fill="none">
                                    <rect width="48" height="48" rx="8" fill="#232321" />
                                    <path d="M18.1668 17.1057H30.8947V29.8336M30.0108 17.9895L17.1061 30.8942"
                                        stroke="#E7E7E3"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round" />
                                </svg>
                            </div>
                        </motion.div>

                    </motion.div>
                }

            </div>
        </div>
    );
};

export default Category;