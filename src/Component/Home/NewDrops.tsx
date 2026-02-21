'use client'
import axios from 'axios';
import Image from 'next/image';
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
      <div className='flex justify-between items-end mb-8'>
        <h1 className='font-semibold text-2xl text-[#232321] md:text-[74px] uppercase'>
          Don't miss out <br /> new drops
        </h1>
        <button className='bg-[#4A69E2] py-2 md:px-8 px-4 rounded-lg mb-3 text-white text-[14px] font-medium'>
          Shop New Drops
        </button>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-4 gap-4'>
        { products.map((product) => (
              <div key={product.id} className='flex flex-col'>
            
             <div className='rounded-[24px] overflow-hidden relative border-6 border-white bg-[#eceef0]'>
                
                {/* New Badge */}
                <div className='bg-[#4A69E2] py-1.5 px-3 rounded-tl-[16px] rounded-br-[16px] absolute left-0 top-0 z-10'>
                  <h3 className='font-semibold text-[12px] text-white'>New</h3>
                </div>

                {/* Image */}
                <div className='relative w-full h-[260px] '>
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    className='object-cover'
                    unoptimized
                  />
                </div>
             </div>

                <h2 className='text-2xl font-semibold my-4'>
                   {product.title}
                </h2>
                <button className='py-2 px-4 rounded-lg bg-black text-white w-full mt-auto' >
View Product - <span className='text-[#FFA52F]'>$125</span> 
                </button>


          
              </div>
            ))}
      </div>

    </div>
  );
};

export default NewDrops;