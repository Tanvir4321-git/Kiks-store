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
  image: string[]
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
}

const NewDrops = () => {
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
    <div className='md:max-w-330 max-w-89.5 mx-auto pb-32 pt-22.5'>

      {/* Title */}
      <motion.div
        className='flex justify-between items-end mb-8'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className='font-semibold text-2xl text-[#232321] md:text-[74px] uppercase'>
          Don't miss out <br /> new drops
        </h1>
        <motion.button
          className='bg-[#4A69E2] py-2 md:px-8 px-4 rounded-lg mb-3 text-white text-[14px] font-medium'
          whileHover={{ scale: 1.05, backgroundColor: '#3a56c5' }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
        >
          Shop New Drops
        </motion.button>
      </motion.div>

      <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>

        {/*  Skeleton*/}
        {loading &&
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className='flex flex-col animate-pulse'>
              <div className='rounded-[24px] overflow-hidden relative border-6 border-white bg-[#eceef0]'>
                <div className='w-full md:h-65 h-41 bg-gray-300' />
              </div>
              <div className='h-6 bg-gray-300 rounded my-4 w-3/4'></div>
              <div className='h-9 bg-gray-300 rounded w-full mt-auto'></div>
            </div>
          ))}

        {/* Empty  */}
        {!loading && products.length === 0 && (
          <div className='col-span-4 flex flex-col items-center justify-center py-24 text-center'>
            <h3 className='text-2xl font-semibold text-gray-700'>
              No Product Found
            </h3>
            <p className='text-gray-500 mt-2'>
              There are no new drops available right now.
            </p>
          </div>
        )}

        {/* Products */}
        {!loading && products.map((product, index) => (
          <motion.div
            key={product.id}
            className='flex flex-col'
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.1 }}
          >

            <motion.div
              className='rounded-[24px] overflow-hidden relative border-6 border-white bg-[#eceef0]'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >

              <div className='bg-[#4A69E2] py-1.5 px-3 rounded-tl-[16px] rounded-br-[16px] absolute left-0 top-0 z-10'>
                <h3 className='font-semibold text-[12px] text-white'>New</h3>
              </div>

              <div className='relative w-full md:h-65 h-41 '>
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  className='object-cover '
                  unoptimized
                />
              </div>
            </motion.div>

            <h2 className='md:text-2xl text-[16px] font-semibold my-4'>
              {product.title}
            </h2>
            <MotionLink
              href={`/product/${product.id}`}
              className='py-3 px-4 rounded-lg text-[12px] text-center font-medium bg-black text-white w-full mt-auto'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              View Product - <span className='text-[#FFA52F] text-[12px] font-medium'>${product.price}</span>
            </MotionLink>

          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default NewDrops;