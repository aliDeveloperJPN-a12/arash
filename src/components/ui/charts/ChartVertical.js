import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const ChartVertical = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/cK%24sTxSsah/stack-group-column.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'month',
    yField: 'value',
    isGroup: true,
    isStack: true,
    seriesField: 'type',
    groupField: 'name',
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

  return <Column {...config} className='w-[800px] -mt-[20px] -mr-[30px]'/>;
};


export default ChartVertical