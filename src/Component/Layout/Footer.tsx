import React from 'react';
import footerbn from '../../../public/footerbanner.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='bg-[#e7e7e3] -mt-5 md:-mt-12' >

           

            <div className='md:max-w-330 max-w-89.5 mx-auto bg-[#4a69e2] rounded-b-[48px]'>
                 <div className='bg-black  rounded-3xl md:rounded-[48px] p-8 '>

                <div className='flex md:flex-row gap-6 md:gap-0 flex-col mb-[97px] justify-between'>
                    

                        {/* about */}
                        <div className='md:w-1/3 w-full'>
                            <h2 className='font-semibold text-2xl md:text-4xl text-[#FFA52F] mb-2'> About us</h2>
                            <h3 className='font-semibold text-[16px] md:text-[20px] open-sans text-white'>We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</h3>
                        </div>
                    
                    <div className='flex md:flex-row flex-col gap-6 md:gap-0   justify-between w-full md:w-2/3'>
                        {/* Categories */}
                        <div>
                            <h2 className='font-semibold text-[20px] md:text-2xl text-[#FFA52F] mb-4'>
                                Categories

                            </h2>
                            <div>
                                <ul className='md:text-[20px] text-[16px] font-semibold text-[#E7E7E3] space-y-2'>
                                    <li>Runners</li>
                                    <li>Sneakers</li>
                                    <li>Basketball</li>
                                    <li>Outdoor</li>
                                    <li>Golf</li>
                                    <li>Hiking</li>
                                </ul>
                            </div>
                        </div>
                        {/* Company */}
                        <div>
                            <h2 className='font-semibold text-[20px] md:text-2xl text-[#FFA52F] mb-4'>
                                Company

                            </h2>
                            <div>
                                <ul className='md:text-[20px] text-[16px] font-semibold text-[#E7E7E3] space-y-2'>
                                    <li>About</li>
                                    <li>Contact</li>
                                    <li>Blogs</li>

                                </ul>
                            </div>
                        </div>
                        {/* Follow us */}
                        <div>
                            <h2 className='font-semibold text-[20px] md:text-2xl text-[#FFA52F] mb-4'>
                                Follow us

                            </h2>
                            <div className='flex items-center gap-6'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="#E7E7E3" />
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" fill="#E7E7E3" />
                                </svg>
                                <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.92 2C20.15 2.35 19.32 2.58 18.46 2.69C19.34 2.16 20.02 1.32 20.34 0.31C19.51 0.81 18.59 1.16 17.62 1.36C16.83 0.5 15.72 0 14.46 0C12.11 0 10.19 1.92 10.19 4.29C10.19 4.63 10.23 4.96 10.3 5.27C6.74 5.09 3.57 3.38 1.46 0.79C1.09 1.42 0.88 2.16 0.88 2.94C0.88 4.43 1.63 5.75 2.79 6.5C2.08 6.5 1.42 6.3 0.84 6V6.03C0.84 8.11 2.32 9.85 4.28 10.24C3.65073 10.4122 2.9901 10.4362 2.35 10.31C2.62161 11.1625 3.15354 11.9084 3.87102 12.4429C4.5885 12.9775 5.45545 13.2737 6.35 13.29C4.83363 14.4904 2.954 15.1393 1.02 15.13C0.68 15.13 0.34 15.11 0 15.07C1.9 16.29 4.16 17 6.58 17C14.46 17 18.79 10.46 18.79 4.79C18.79 4.6 18.79 4.42 18.78 4.23C19.62 3.63 20.34 2.87 20.92 2Z" fill="#E7E7E3" />
                                </svg>
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.44 2.82C12.44 2.82 12.95 3.32 12.44 2.82C11.7564 2.03962 11.3797 1.03743 11.38 0H8.29V12.4C8.26617 13.071 7.98287 13.7066 7.49977 14.1729C7.01666 14.6393 6.37145 14.8999 5.7 14.9C4.28 14.9 3.1 13.74 3.1 12.3C3.1 10.58 4.76 9.29 6.47 9.82V6.66C3.02 6.2 0 8.88 0 12.3C0 15.63 2.76 18 5.69 18C8.83 18 11.38 15.45 11.38 12.3V6.01C12.633 6.90985 14.1374 7.39265 15.68 7.39V4.3C15.68 4.3 13.8 4.39 12.44 2.82Z" fill="#E7E7E3" />
                                </svg>



                            </div>
                        </div>

                    </div>
                </div>

                <Image src={footerbn} alt='footerbn' width={1262} height={313}  className='mx-auto -mb-8'/>
                 </div>

            </div>
        </div>
    );
};

export default Footer;