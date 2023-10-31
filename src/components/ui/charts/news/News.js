"use client";

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { WordCloud } from '@ant-design/plots';

const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [8, 32],
      rotation: 0,
    },
    // 返回值设置成一个 [0, 1) 区间内的值，
    // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
    random: () => 0.5,
  };

  return (
    <div className='w-full'>
    <div className='flex space-x-[700px]'>
    <div>
      <svg className='absolute mt-[10px]' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <circle cx="7.5" cy="7.5" r="7.5" transform="matrix(-1 0 0 1 15 0)" fill="#7D8693"/>
      </svg>
      <p className='text-[11px] text-white relative top-[10px] left-[5px]'>?</p>
    </div>
      <div className='space-x-[10px] border border-[#7D8693] h-[30px] w-[150px] rounded-md flex m-[15px]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7.05859 8.8667L10.0003 11.8L12.9419 8.8667" stroke="#7D8693" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p className='text-[#7D8693] font-bold font-vazir'>سوژه های داغ</p>
      </div>
    </div>  
      <WordCloud {...config} className='w-[800px] h-[900px]'/>
    </div>
  );
};


export default News