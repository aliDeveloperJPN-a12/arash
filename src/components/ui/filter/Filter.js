"use client"

import React from 'react'
const Filter = () => {
  return (
    <div className='border border-[#E1E2E9] w-[350px] h-[450px] rounded-[5px] ml-[20px]'>


        <div className=' flex border border-[#E1E2E9] h-[50px] '>

            <div >
                <div className='flex m-[5px]'>
                    <div className='flex border border-[#E1E2E9] w-[60px] rounded-[5px] '>
                        <svg className='mt-[7px] ml-[5px]' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g clip-path="url(#clip0_1012_8785)">
                            <path d="M11 1.5H1L5 6.23V9.5L7 10.5V6.23L11 1.5Z" stroke="#027AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs className=''>
                            <clipPath id="clip0_1012_8785">
                            <rect width="15" height="15" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg>
                        <p className='pb-[2px]  text-[#a7a8ac]'>روش</p> 
                    </div>
                    <svg className='mt-[7px] ml-[5px]' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <circle cx="7.5" cy="7.5" r="7.5" transform="matrix(-1 0 0 1 15 0)" fill="#7D8693"/>
                    </svg>
                    <p className='text-[11px] -ml-[10px] mt-[7px] text-white'>?</p>
                </div>
            </div>
            <div className='w-[150px] h-[35px] border border-[#E1E2E9] rounded-[5px] mt-[5px] ml-[150px] flex mr-[5px]'>
                <svg className='mt-[7px]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.05859 8.8667L10.0003 11.8L12.9419 8.8667" stroke="#7D8693" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className='m-[7px] text-[#a7a8ac] text-[8px] ml-[20px]'>کاربران تاثیر گذار</p>
            </div>

        
        </div>
        
        <div className='border border-[#E1E2E9] h-[50px] pt-[10px]'>
            <div className='flex space-x-[50px]'>
                <div className='flex'>
                <svg className='mt-[10px] ml-[9px] mr-[5px]' xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M14 5.66675H2C1.72667 5.66675 1.5 5.44008 1.5 5.16675C1.5 4.89341 1.72667 4.66675 2 4.66675H14C14.2733 4.66675 14.5 4.89341 14.5 5.16675C14.5 5.44008 14.2733 5.66675 14 5.66675Z" fill="#323130"/>
                <path d="M12 9H4C3.72667 9 3.5 8.77333 3.5 8.5C3.5 8.22667 3.72667 8 4 8H12C12.2733 8 12.5 8.22667 12.5 8.5C12.5 8.77333 12.2733 9 12 9Z" fill="#323130"/>
                <path d="M9.33366 12.3333H6.66699C6.39366 12.3333 6.16699 12.1066 6.16699 11.8333C6.16699 11.5599 6.39366 11.3333 6.66699 11.3333H9.33366C9.60699 11.3333 9.83366 11.5599 9.83366 11.8333C9.83366 12.1066 9.60699 12.3333 9.33366 12.3333Z" fill="#323130"/>
                </svg>
                <p className=''>روش</p>
                </div>
                <div className='flex'>
                <svg className='mt-[10px] ml-[9px] mr-[5px]' xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M14 5.66675H2C1.72667 5.66675 1.5 5.44008 1.5 5.16675C1.5 4.89341 1.72667 4.66675 2 4.66675H14C14.2733 4.66675 14.5 4.89341 14.5 5.16675C14.5 5.44008 14.2733 5.66675 14 5.66675Z" fill="#323130"/>
                <path d="M12 9H4C3.72667 9 3.5 8.77333 3.5 8.5C3.5 8.22667 3.72667 8 4 8H12C12.2733 8 12.5 8.22667 12.5 8.5C12.5 8.77333 12.2733 9 12 9Z" fill="#323130"/>
                <path d="M9.33366 12.3333H6.66699C6.39366 12.3333 6.16699 12.1066 6.16699 11.8333C6.16699 11.5599 6.39366 11.3333 6.66699 11.3333H9.33366C9.60699 11.3333 9.83366 11.5599 9.83366 11.8333C9.83366 12.1066 9.60699 12.3333 9.33366 12.3333Z" fill="#323130"/>
                </svg>
                <p className=''>نام کاربری</p>
                </div>
                <div className='flex'>
                <svg className='mt-[10px] ml-[9px] mr-[5px]' xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M14 5.66675H2C1.72667 5.66675 1.5 5.44008 1.5 5.16675C1.5 4.89341 1.72667 4.66675 2 4.66675H14C14.2733 4.66675 14.5 4.89341 14.5 5.16675C14.5 5.44008 14.2733 5.66675 14 5.66675Z" fill="#323130"/>
                <path d="M12 9H4C3.72667 9 3.5 8.77333 3.5 8.5C3.5 8.22667 3.72667 8 4 8H12C12.2733 8 12.5 8.22667 12.5 8.5C12.5 8.77333 12.2733 9 12 9Z" fill="#323130"/>
                <path d="M9.33366 12.3333H6.66699C6.39366 12.3333 6.16699 12.1066 6.16699 11.8333C6.16699 11.5599 6.39366 11.3333 6.66699 11.3333H9.33366C9.60699 11.3333 9.83366 11.5599 9.83366 11.8333C9.83366 12.1066 9.60699 12.3333 9.33366 12.3333Z" fill="#323130"/>
                </svg>
                <p className=''>رتبه</p>
                </div>
            </div>


            <div className='mt-[20px]'>
                
                <div className='flex mt-[7px] text-[#8e8f94]'>
                    <p className='text-[13px] ml-[10px]'>Extended metod</p>
                    <p className='text-[13px] ml-[30px]'>ATEEZofficial</p>
                    <p className='text-[13px] ml-[100px]'>1</p>
                </div>
                <div className='flex mt-[7px] text-[#8e8f94]'>
                    <p className='text-[13px] ml-[10px]'>Extended metod</p>
                    <p className='text-[13px] ml-[30px]'>ATEEZofficial</p>
                    <p className='text-[13px] ml-[100px]'>1</p>
                </div>
                <div className='flex mt-[7px] text-[#8e8f94]'>
                    <p className='text-[13px] ml-[10px]'>Extended metod</p>
                    <p className='text-[13px] ml-[30px]'>ATEEZofficial</p>
                    <p className='text-[13px] ml-[100px]'>1</p>
                </div>
                <div className='flex mt-[7px] text-[#8e8f94]'>
                    <p className='text-[13px] ml-[10px]'>Extended metod</p>
                    <p className='text-[13px] ml-[30px]'>ATEEZofficial</p>
                    <p className='text-[13px] ml-[100px]'>1</p>
                </div>
                <div className='flex mt-[7px] text-[#8e8f94]'>
                    <p className='text-[13px] ml-[10px]'>Extended metod</p>
                    <p className='text-[13px] ml-[30px]'>ATEEZofficial</p>
                    <p className='text-[13px] ml-[100px]'>1</p>
                </div>
                <div className='flex mt-[7px] text-[#8e8f94]'>
                    <p className='text-[13px] ml-[10px]'>Extended metod</p>
                    <p className='text-[13px] ml-[30px]'>ATEEZofficial</p>
                    <p className='text-[13px] ml-[100px]'>1</p>
                </div>
                <div className='flex mt-[7px] text-[#8e8f94]'>
                    <p className='text-[13px] ml-[10px]'>Extended metod</p>
                    <p className='text-[13px] ml-[30px]'>ATEEZofficial</p>
                    <p className='text-[13px] ml-[100px]'>1</p>
                </div>
                <div className='flex mt-[7px] text-[#8e8f94]'>
                    <p className='text-[13px] ml-[10px]'>Extended metod</p>
                    <p className='text-[13px] ml-[30px]'>ATEEZofficial</p>
                    <p className='text-[13px] ml-[100px]'>1</p>
                </div>
                <div className='flex mt-[7px] text-[#8e8f94]'>
                    <p className='text-[13px] ml-[10px]'>Extended metod</p>
                    <p className='text-[13px] ml-[30px]'>ATEEZofficial</p>
                    <p className='text-[13px] ml-[100px]'>1</p>
                </div>
                <div className='flex mt-[7px] text-[#8e8f94]'>
                    <p className='text-[13px] ml-[10px]'>Extended metod</p>
                    <p className='text-[13px] ml-[30px]'>ATEEZofficial</p>
                    <p className='text-[13px] ml-[100px]'>1</p>
                </div>
                <div className='flex mt-[7px] text-[#8e8f94]'>
                    <p className='text-[13px] ml-[10px]'>Extended metod</p>
                    <p className='text-[13px] ml-[30px]'>ATEEZofficial</p>
                    <p className='text-[13px] ml-[100px]'>1</p>
                </div>


                <div className='flex space-x-[20px] m-[20px] ml-[70px]'>
                    <p className='text-[#8e8f94]'>صفحه ها</p>
                    <svg className='mt-[6px]' xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 4 6" fill="none">
                    <path d="M3.5 4.91289L3.5 1.08711C3.5 0.659934 2.99894 0.429479 2.6746 0.707482L0.4429 2.62037C0.210094 2.81992 0.210094 3.18008 0.4429 3.37963L2.6746 5.29252C2.99894 5.57052 3.5 5.34007 3.5 4.91289Z" fill="#027AFF"/>
                    </svg>
                    <p>1</p>
                    <svg className='mt-[6px]' xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 4 6" fill="none">
                    <path d="M0.5 1.08711L0.5 4.91289C0.5 5.34007 1.00106 5.57052 1.3254 5.29252L3.5571 3.37963C3.78991 3.18008 3.78991 2.81992 3.5571 2.62037L1.3254 0.707482C1.00106 0.429479 0.5 0.659934 0.5 1.08711Z" fill="#027AFF"/>
                    </svg>
                    <p className='text-[#8e8f94]'>30</p>
                </div>


            </div>



        </div>



    </div>
  )
}

export default Filter