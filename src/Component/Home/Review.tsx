'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import reviewimage1 from '../../../public/reviewer1.png'
import reviewimage2 from '../../../public/reviewer2.png'
import reviewimage3 from '../../../public/reviewer3.png'


import review1 from '../../../public/review1.png'
import review2 from '../../../public/review2.png'
import review3 from '../../../public/review3.png'

const Review = () => {
    return (
        <div className='md:max-w-330 max-w-89.5 mx-auto py-5  md:py-32'>
            <motion.div
                className='flex items-center justify-between mb-5 md:mb-12'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <h1 className='font-semibold md:text-[74px] text-2xl'>Reviews</h1>
                <motion.button
                    className='py-2 md:px-8 px-4  rounded-lg bg-[#4A69E2] text-white'
                    whileHover={{ scale: 1.05, backgroundColor: '#3a56c5' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                >
                    See All
                </motion.button>
            </motion.div>
            <div className='flex md:flex-row flex-col  gap-4'>
                 
                 {/* 1 */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.55, ease: 'easeOut', delay: 0 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className='bg-white md:p-8 p-4 rounded-t-2xl md:rounded-t-4xl space-y-2'>
                        <div className='flex items-center justify-between'>
                            <div>

                                <h3 className='font-semibold text-[20px] md:text-2xl '>Good Quality </h3>
                                <h4 className='open-sans w-[293px]'>I highly recommend shopping from  kicks</h4>
                            </div>
                            <div>
                                <Image src={reviewimage1} alt='review' width={64} />
                            </div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.43 10L12.96 5.16001C12.67 4.21001 11.33 4.21001 11.05 5.16001L9.57002 10H5.12002C4.15002 10 3.75002 11.25 4.54002 11.81L8.18002 14.41L6.75002 19.02C6.46002 19.95 7.54002 20.7 8.31002 20.11L12 17.31L15.69 20.12C16.46 20.71 17.54 19.96 17.25 19.03L15.82 14.42L19.46 11.82C20.25 11.25 19.85 10.01 18.88 10.01H14.43V10Z" fill="#FFA52F" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.43 10L12.96 5.16001C12.67 4.21001 11.33 4.21001 11.05 5.16001L9.57002 10H5.12002C4.15002 10 3.75002 11.25 4.54002 11.81L8.18002 14.41L6.75002 19.02C6.46002 19.95 7.54002 20.7 8.31002 20.11L12 17.31L15.69 20.12C16.46 20.71 17.54 19.96 17.25 19.03L15.82 14.42L19.46 11.82C20.25 11.25 19.85 10.01 18.88 10.01H14.43V10Z" fill="#FFA52F" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.43 10L12.96 5.16001C12.67 4.21001 11.33 4.21001 11.05 5.16001L9.57002 10H5.12002C4.15002 10 3.75002 11.25 4.54002 11.81L8.18002 14.41L6.75002 19.02C6.46002 19.95 7.54002 20.7 8.31002 20.11L12 17.31L15.69 20.12C16.46 20.71 17.54 19.96 17.25 19.03L15.82 14.42L19.46 11.82C20.25 11.25 19.85 10.01 18.88 10.01H14.43V10Z" fill="#FFA52F" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.43 10L12.96 5.16001C12.67 4.21001 11.33 4.21001 11.05 5.16001L9.57002 10H5.12002C4.15002 10 3.75002 11.25 4.54002 11.81L8.18002 14.41L6.75002 19.02C6.46002 19.95 7.54002 20.7 8.31002 20.11L12 17.31L15.69 20.12C16.46 20.71 17.54 19.96 17.25 19.03L15.82 14.42L19.46 11.82C20.25 11.25 19.85 10.01 18.88 10.01H14.43V10Z" fill="#FFA52F" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.43 10L12.96 5.16001C12.67 4.21001 11.33 4.21001 11.05 5.16001L9.57002 10H5.12002C4.15002 10 3.75002 11.25 4.54002 11.81L8.18002 14.41L6.75002 19.02C6.46002 19.95 7.54002 20.7 8.31002 20.11L12 17.31L15.69 20.12C16.46 20.71 17.54 19.96 17.25 19.03L15.82 14.42L19.46 11.82C20.25 11.25 19.85 10.01 18.88 10.01H14.43V10Z" fill="#FFA52F" />
                            </svg>

                            <h4 className='font-semibold text-[16px]'> 5.0</h4>

                        </div>

                    </div>
                    <Image src={review1} alt='review' width={429} height={325} className='md:rounded-b-4xl rounded-b-2xl w-[358px] h-[229px] md:w-[429px] md:h-[325px]' />
                </motion.div>
                {/* 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className='bg-white md:p-8 p-4 rounded-t-2xl md:rounded-t-4xl space-y-2'>
                        <div className='flex items-center justify-between'>
                            <div>

                                <h3 className='font-semibold text-[20px] md:text-2xl '>Good Quality </h3>
                                <h4 className='open-sans w-[293px]'>I highly recommend shopping from  kicks</h4>
                            </div>
                            <div>
                                <Image src={reviewimage2} alt='review' width={64} />
                            </div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.43 10L12.96 5.16001C12.67 4.21001 11.33 4.21001 11.05 5.16001L9.57002 10H5.12002C4.15002 10 3.75002 11.25 4.54002 11.81L8.18002 14.41L6.75002 19.02C6.46002 19.95 7.54002 20.7 8.31002 20.11L12 17.31L15.69 20.12C16.46 20.71 17.54 19.96 17.25 19.03L15.82 14.42L19.46 11.82C20.25 11.25 19.85 10.01 18.88 10.01H14.43V10Z" fill="#FFA52F" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.43 10L12.96 5.16001C12.67 4.21001 11.33 4.21001 11.05 5.16001L9.57002 10H5.12002C4.15002 10 3.75002 11.25 4.54002 11.81L8.18002 14.41L6.75002 19.02C6.46002 19.95 7.54002 20.7 8.31002 20.11L12 17.31L15.69 20.12C16.46 20.71 17.54 19.96 17.25 19.03L15.82 14.42L19.46 11.82C20.25 11.25 19.85 10.01 18.88 10.01H14.43V10Z" fill="#FFA52F" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.43 10L12.96 5.16001C12.67 4.21001 11.33 4.21001 11.05 5.16001L9.57002 10H5.12002C4.15002 10 3.75002 11.25 4.54002 11.81L8.18002 14.41L6.75002 19.02C6.46002 19.95 7.54002 20.7 8.31002 20.11L12 17.31L15.69 20.12C16.46 20.71 17.54 19.96 17.25 19.03L15.82 14.42L19.46 11.82C20.25 11.25 19.85 10.01 18.88 10.01H14.43V10Z" fill="#FFA52F" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.43 10L12.96 5.16001C12.67 4.21001 11.33 4.21001 11.05 5.16001L9.57002 10H5.12002C4.15002 10 3.75002 11.25 4.54002 11.81L8.18002 14.41L6.75002 19.02C6.46002 19.95 7.54002 20.7 8.31002 20.11L12 17.31L15.69 20.12C16.46 20.71 17.54 19.96 17.25 19.03L15.82 14.42L19.46 11.82C20.25 11.25 19.85 10.01 18.88 10.01H14.43V10Z" fill="#FFA52F" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.43 10L12.96 5.16001C12.67 4.21001 11.33 4.21001 11.05 5.16001L9.57002 10H5.12002C4.15002 10 3.75002 11.25 4.54002 11.81L8.18002 14.41L6.75002 19.02C6.46002 19.95 7.54002 20.7 8.31002 20.11L12 17.31L15.69 20.12C16.46 20.71 17.54 19.96 17.25 19.03L15.82 14.42L19.46 11.82C20.25 11.25 19.85 10.01 18.88 10.01H14.43V10Z" fill="#FFA52F" />
                            </svg>

                            <h4 className='font-semibold text-[16px]'> 5.0</h4>

                        </div>

                    </div>
                    <Image src={review2} alt='review' width={429} height={325} className='md:rounded-b-4xl rounded-b-2xl w-[358px] h-[229px] md:w-[429px] md:h-[325px]' />
                </motion.div>
                {/* 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className='bg-white md:p-8 p-4 rounded-t-2xl md:rounded-t-4xl space-y-2'>
                        <div className='flex items-center justify-between'>
                            <div>

                                <h3 className='font-semibold text-[20px] md:text-2xl '>Good Quality </h3>
                                <h4 className='open-sans w-[293px]'>I highly recommend shopping from  kicks</h4>
                            </div>
                            <div>
                                <Image src={reviewimage3} alt='review' width={64} />
                            </div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.43 10L12.96 5.16001C12.67 4.21001 11.33 4.21001 11.05 5.16001L9.57002 10H5.12002C4.15002 10 3.75002 11.25 4.54002 11.81L8.18002 14.41L6.75002 19.02C6.46002 19.95 7.54002 20.7 8.31002 20.11L12 17.31L15.69 20.12C16.46 20.71 17.54 19.96 17.25 19.03L15.82 14.42L19.46 11.82C20.25 11.25 19.85 10.01 18.88 10.01H14.43V10Z" fill="#FFA52F" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.43 10L12.96 5.16001C12.67 4.21001 11.33 4.21001 11.05 5.16001L9.57002 10H5.12002C4.15002 10 3.75002 11.25 4.54002 11.81L8.18002 14.41L6.75002 19.02C6.46002 19.95 7.54002 20.7 8.31002 20.11L12 17.31L15.69 20.12C16.46 20.71 17.54 19.96 17.25 19.03L15.82 14.42L19.46 11.82C20.25 11.25 19.85 10.01 18.88 10.01H14.43V10Z" fill="#FFA52F" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.43 10L12.96 5.16001C12.67 4.21001 11.33 4.21001 11.05 5.16001L9.57002 10H5.12002C4.15002 10 3.75002 11.25 4.54002 11.81L8.18002 14.41L6.75002 19.02C6.46002 19.95 7.54002 20.7 8.31002 20.11L12 17.31L15.69 20.12C16.46 20.71 17.54 19.96 17.25 19.03L15.82 14.42L19.46 11.82C20.25 11.25 19.85 10.01 18.88 10.01H14.43V10Z" fill="#FFA52F" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.43 10L12.96 5.16001C12.67 4.21001 11.33 4.21001 11.05 5.16001L9.57002 10H5.12002C4.15002 10 3.75002 11.25 4.54002 11.81L8.18002 14.41L6.75002 19.02C6.46002 19.95 7.54002 20.7 8.31002 20.11L12 17.31L15.69 20.12C16.46 20.71 17.54 19.96 17.25 19.03L15.82 14.42L19.46 11.82C20.25 11.25 19.85 10.01 18.88 10.01H14.43V10Z" fill="#FFA52F" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.43 10L12.96 5.16001C12.67 4.21001 11.33 4.21001 11.05 5.16001L9.57002 10H5.12002C4.15002 10 3.75002 11.25 4.54002 11.81L8.18002 14.41L6.75002 19.02C6.46002 19.95 7.54002 20.7 8.31002 20.11L12 17.31L15.69 20.12C16.46 20.71 17.54 19.96 17.25 19.03L15.82 14.42L19.46 11.82C20.25 11.25 19.85 10.01 18.88 10.01H14.43V10Z" fill="#FFA52F" />
                            </svg>

                            <h4 className='font-semibold text-[16px]'> 5.0</h4>

                        </div>

                    </div>
                    <Image src={review3} alt='review' width={429} height={325} className='md:rounded-b-4xl rounded-b-2xl w-[358px] h-[229px] md:w-[429px] md:h-[325px]' />
                </motion.div>
                


            </div>

        </div>
    );
};

export default Review;