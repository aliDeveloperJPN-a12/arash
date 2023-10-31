"use client";
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';


const DoughnutChart = () => {
  const data = [
    {
      type: '.',
      value: 27,
    },
    {
      type: '/',
      value: 25,
    },
    {
      type: '\\',
      value: 18,
    }
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '',
      },
    },
    legend: {
      title: {
        text: '',
      },
      visible: false,
      position: 'top-right',
      itemName: {
        style: {
          fill: '#000',
        },
        formatter: (name) => '',
      },
    },
  };
  return (
    <div className='m-[20px] ml-[30px]'>
    <div className='flex w-[300px] space-x-[150px]'>
    <div>
      <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <circle cx="7.5" cy="7.5" r="7.5" transform="matrix(-1 0 0 1 15 0)" fill="#7D8693"/>
      </svg>
      <p className='text-[11px] text-white relative top-[px] left-[5px]'>?</p>
    </div>
        <p className='font-bold text-[#7D8693] mb-[60px] -mt-[10px]'>متوسط انتشار پست</p>
    </div>
      <div className=''>
        <Pie {...config} className='w-[150px] absolute -mt-[130px] -ml-[20px]'/>
        {/* for hide controller chart */}
        
        <div>
{/* -------------------------------------------------- */}
            <div className='flex mt-[5px] ml-[135px]'>
              <div >
                <p className='w-[150px] text-center ml-[10px] font-bold'>۵,۹۶۷ پست</p>
                <p className='w-[150px] text-center text-green-500'>%۳ بیشتر از دیروز</p>
              </div>
              <div className='mt-[12px] -ml-[15px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#414141"/>
                <path d="M5.03386 5L10.3964 12.1703L5 18H6.21452L10.9391 12.896L14.7564 18H18.8895L13.2252 10.4264L18.2481 5H17.0336L12.6825 9.7007L9.16693 5H5.03386ZM6.81991 5.89462H8.71865L17.1032 17.1052H15.2044L6.81991 5.89462Z" fill="url(#paint0_linear_1094_1523)"/>
                <defs>
                  <linearGradient id="paint0_linear_1094_1523" x1="11.9447" y1="5" x2="12" y2="19.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="#A49E9E"/>
                  </linearGradient>
                </defs>
              </svg>
                <div className='bg-[#414141] w-[24px] h-[5px] mt-[5px]'></div>
              </div>
            </div>
{/* -------------------------------------------------- */}
{/* -------------------------------------------------- */}
            <div className='flex mt-[20px]  ml-[135px]'>
              <div >
                <p className='w-[150px] text-center ml-[10px] font-bold'>۲,۷۴۵ پست</p>
                <p className='w-[150px] text-center text-red-600'>%۲ کمتر از دیروز</p>
              </div>
              <div className='mt-[12px] -ml-[15px]'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg'/>
                <div className='bg-[#3eb5ec] w-[24px] h-[5px] mt-[5px]'></div>
              </div>
            </div>
{/* -------------------------------------------------- */}
{/* -------------------------------------------------- */}
            <div className='flex mt-[20px] ml-[135px]'>
              <div >
                <p className='w-[150px] text-center ml-[10px] font-bold'>۸,۱۹۳ پست</p>
                <p className='w-[150px] text-center text-green-500'>%۲ بیشتر از دیروز</p>
              </div>
              <div className='mt-[12px] -ml-[15px]'>
                <img className='w-[24px]' src='https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg'/>
                <div className='bg-[#fc3f3f] w-[24px] h-[5px] mt-[5px]'></div>
              </div>
            </div>
{/* -------------------------------------------------- */}


        </div>


      </div>
    </div>
  );
};

export default DoughnutChart;









