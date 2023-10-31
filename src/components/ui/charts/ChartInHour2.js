"use client";
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import { toFarsiNumber } from '@/utils/data';


// ChartInHour2

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data: data
      .slice(data.length - 90, data.length)
      .filter((item) => item.category === 'Gas fuel' || item.category === 'Cement production'),
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    // X 轴相关配置
    xAxis: {
      nice: true,
      // tickCount: 8,
      // 文本标签
      label: {
        // autoRotate: false,
        rotate: Math.PI / 6,
        offset: 10,
        style: {
          fill: '#aaa',
          fontSize: 12,
        },
        formatter: (name) => `${toFarsiNumber(name)}`,
      },
      // 坐标轴线的配置项 null 表示不展示
      line: {
        style: {
          stroke: '#aaa',
        },
      },
      tickLine: {
        style: {
          lineWidth: 2,
          stroke: '#aaa',
        },
        length: 5,
      },
      grid: {
        line: {
          style: {
            stroke: '#ddd',
            lineDash: [4, 2],
          },
        },
        alternateColor: 'rgba(0,0,0,0.05)',
      },
    },
    // Y 轴相关配置
    yAxis: {
      // max: 3000,
      // 文本标签
      label: {
        autoRotate: false,
        style: {
          fill: '#aaa',
          fontSize: 12,
        },
        // 数值格式化为千分位
        formatter: (v) => `${toFarsiNumber(v)}`,
      },
      // 坐标轴线的配置项 null 表示不展示
      line: {
        style: {
          stroke: '#aaa',
        },
      },
      tickLine: {
        style: {
          lineWidth: 2,
          stroke: '#aaa',
        },
        length: 5,
      },
      grid: {
        line: {
          style: {
            stroke: '#ddd',
            lineDash: [4, 2],
          },
        },
        alternateColor: 'rgba(0,0,0,0.05)',
      },
    },
    // label
    label: {
      layout: [
        {
          type: 'hide-overlap',
        },
      ],
      // 隐藏重叠label
      style: {
        textAlign: 'right',
      },
      formatter: (item) => `${toFarsiNumber(item.value)}` ,
    },
    // point
    point: {
      size: 5,
      style: {
        lineWidth: 1,
        fillOpacity: 1,
      },
      shape: (item) => {
        if (item.category === 'Cement production') {
          return 'circle';
        }

        return 'diamond';
      },
    },
    annotations: [
      // 辅助线
      {
        type: 'line',
        start: ['0%', '10%'],
        end: ['100%', '10%'],
        top: true,
        style: {
          stroke: 'l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
          lineWidth: 2,
        },
      }, // 辅助区域
      {
        type: 'region',
        start: ['0%', '0%'],
        end: ['20%', '10%'],
        top: true,
        style: {
          fill: '#1890ff',
          fillOpacity: 1,
          opacity: 1,
        },
      }, // 辅助文本
      {
        type: 'text',
        position: ['10%', '5%'],
        content: '',
        style: {
          fill: '#fff',
          fontSize: 12,
          textAlign: 'center',
          textBaseline: 'middle',
          shadowColor: '#fff',
          shadowOffsetX: 12,
          shadowOffsetY: 12,
          shadowBlur: 2,
        },
      }, // 辅助线
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: 'Turquoise',
          lineDash: [4, 2],
        },
      },
    ],
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
    // 度量相关配置
    meta: {
      // year 对应 xField || yField
      year: {
        range: [0, 1],
      },
    },
  };

  return (
    <div className='h-[270px]'>
    <div>
      <p className='-mb-[22px] text-end w-[340px] font-bold text-[#7D8693] text-[20px] font-vazir'>روند بازدید در ساعات شبانه روز</p>
    </div>
      <Line {...config} className=''/>
      <div>
      {/* -------------------------------------------------- */}
                  <div className='flex '>
                    <div className='flex mt-[15px]'>
                      <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 9 9" fill="none">
                        <path d="M3.49512 2.43754L4.45512 1.47754L5.41512 2.43754" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.45508 5.31741V1.50366" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.5 4.5C1.5 6.1575 2.625 7.5 4.5 7.5C6.375 7.5 7.5 6.1575 7.5 4.5" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p>11k</p>
                      <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 9 9" fill="none">
                        <path d="M3.49512 2.43754L4.45512 1.47754L5.41512 2.43754" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.45508 5.31741V1.50366" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.5 4.5C1.5 6.1575 2.625 7.5 4.5 7.5C6.375 7.5 7.5 6.1575 7.5 4.5" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p className='mr-[100px]'>200k</p>
                      <p className='w-[155px] text-center ml-[30px] font-bold font-vazir text-[12px]'>بازدید از تویتر</p>
                    </div>
                    <div className='mt-[12px] -ml-[20px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="#414141"/>
                      <path d="M5.03386 5L10.3964 12.1703L5 18H6.21452L10.9391 12.896L14.7564 18H18.8895L13.2252 10.4264L18.2481 5H17.0336L12.6825 9.7007L9.16693 5H5.03386ZM6.81991 5.89462H8.71865L17.1032 17.1052H15.2044L6.81991 5.89462Z" fill="url(#paint0_linear_1094_1523)"/>
                      <defs>
                        <linearGradient id="paint0_linear_1094_1523" x1="11.9447" y1="5" x2="12" y2="19.5" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white"/>
                          <stop offset="1" stop-color="#A49E9E"/>
                        </linearGradient>
                      </defs>
                    </svg>
                      <div className='bg-[#414141] w-[16px] h-[5px] mt-[5px]'></div>
                    </div>
                  </div>
      {/* -------------------------------------------------- */}
      {/* -------------------------------------------------- */}
                  <div className='flex '>
                    <div className='flex mt-[15px]'>
                      <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 9 9" fill="none">
                        <path d="M3.49512 2.43754L4.45512 1.47754L5.41512 2.43754" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.45508 5.31741V1.50366" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.5 4.5C1.5 6.1575 2.625 7.5 4.5 7.5C6.375 7.5 7.5 6.1575 7.5 4.5" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p>11k</p>
                      <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 9 9" fill="none">
                        <path d="M3.49512 2.43754L4.45512 1.47754L5.41512 2.43754" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.45508 5.31741V1.50366" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.5 4.5C1.5 6.1575 2.625 7.5 4.5 7.5C6.375 7.5 7.5 6.1575 7.5 4.5" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p className='mr-[110px]'>200k</p>
                      <p className='w-[150px] text-center ml-[20px] font-bold font-vazir text-[12px]'>بازدید از تویتر</p>
                    </div>
                    <div className='mt-[12px] -ml-[15px]'>
                      <img src='https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg'/>
                      <div className='bg-[#3eb5ec] w-[16px] h-[5px] mt-[5px]'></div>
                    </div>
                  </div>
      {/* -------------------------------------------------- */}
      {/* -------------------------------------------------- */}
                  <div className='flex'>
                    <div className='flex mt-[15px]'>
                      <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 9 9" fill="none">
                        <path d="M3.49512 2.43754L4.45512 1.47754L5.41512 2.43754" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.45508 5.31741V1.50366" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.5 4.5C1.5 6.1575 2.625 7.5 4.5 7.5C6.375 7.5 7.5 6.1575 7.5 4.5" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p>11k</p>
                      <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 9 9" fill="none">
                        <path d="M3.49512 2.43754L4.45512 1.47754L5.41512 2.43754" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.45508 5.31741V1.50366" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.5 4.5C1.5 6.1575 2.625 7.5 4.5 7.5C6.375 7.5 7.5 6.1575 7.5 4.5" stroke="#A4A4A5" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p className='mr-[110px]'>200k</p>
                      <p className='w-[150px] text-center ml-[20px] font-bold font-vazir text-[12px]'>بازدید از تویتر</p>
                    </div>
                    <div className='mt-[12px] -ml-[15px]'>
                      <img className='w-[14px]' src='https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg'/>
                      <div className='bg-[#fc3f3f] w-[16px] h-[5px] mt-[5px]'></div>
                    </div>
                  </div>
      {/* -------------------------------------------------- */}



              </div>


    </div>
  );
};
export default Page