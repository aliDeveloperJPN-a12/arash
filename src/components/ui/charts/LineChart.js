'use client';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
import { toFarsiNumber } from '@/utils/data';

const LineChart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
    console.log(data);
  }, []);
  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data: [
      { "country": "سال", "date": 1965, "value": 1390.5 },
      { "country": "سال", "date": 1966, "value": 1469.5 },
      { "country": "سال", "date": 1967, "value": 1521.7 },
      { "country": "سال", "date": 1968, "value": 1615.9 },
      { "country": "سال", "date": 1969, "value": 1703.7 },
      { "country": "سال", "date": 1970, "value": 1767.8 },
      { "country": "سال", "date": 1971, "value": 1806.2 },
      { "country": "سال", "date": 1972, "value": 1903.5 },
      { "country": "سال", "date": 1973, "value": 1986.6 },
      { "country": "سال", "date": 1974, "value": 1952 },
      { "country": "سال", "date": 1975, "value": 1910.4 },
      { "country": "سال", "date": 1976, "value": 2015.8 },
      { "country": "سال", "date": 1977, "value": 2074.7 },
      { "country": "سال", "date": 1978, "value": 2092.7 },
      { "country": "سال", "date": 1979, "value": 2123.8 },
      { "country": "سال", "date": 1980, "value": 2068.3 },
      { "country": "سال", "date": 1981, "value": 2018 },
      { "country": "سال", "date": 1982, "value": 1951.5 },
      { "country": "سال", "date": 1983, "value": 1941.1 },
      { "country": "سال", "date": 1984, "value": 2046.2 },
      { "country": "سال", "date": 1985, "value": 2053.1 },
      { "country": "سال", "date": 1986, "value": 2060.7 },
      { "country": "سال", "date": 1987, "value": 2130.8 },
      { "country": "سال", "date": 1988, "value": 2223.5 },
      { "country": "سال", "date": 1989, "value": 2275.9 },
      { "country": "سال", "date": 1990, "value": 2280.7 },
      { "country": "سال", "date": 1991, "value": 2282 },
      { "country": "سال", "date": 1992, "value": 2319.7 },
      { "country": "سال", "date": 1993, "value": 2366.6 },
      { "country": "سال", "date": 1994, "value": 2420.2 },
      { "country": "سال", "date": 1995, "value": 2466.9 },
      { "country": "سال", "date": 1996, "value": 2547.4 },
      { "country": "سال", "date": 1997, "value": 2569 },
      { "country": "سال", "date": 1998, "value": 2585.2 },
      { "country": "سال", "date": 1999, "value": 2633.8 },
      { "country": "سال", "date": 2000, "value": 2699.4 },
      { "country": "سال", "date": 2001, "value": 2640.1 },
      { "country": "سال", "date": 2002, "value": 2687.7 },
      { "country": "سال", "date": 2003, "value": 2700.7 },
      { "country": "سال", "date": 2004, "value": 2759.4 },
      { "country": "سال", "date": 2005, "value": 2775.6 },
      { "country": "سال", "date": 2006, "value": 2761.9 },
      { "country": "سال", "date": 2007, "value": 2809.5 },
      { "country": "سال", "date": 2008, "value": 2759.4 },
      { "country": "سال", "date": 2009, "value": 2632.5 },
      { "country": "سال", "date": 2010, "value": 2720.7 },
      { "country": "سال", "date": 2011, "value": 2722.9 },
      { "country": "سال", "date": 2012, "value": 2665.1 },
      { "country": "سال", "date": 2013, "value": 2738.3 },
      { "country": "سال", "date": 2014, "value": 2766.8 },
      { "country": "سال", "date": 2015, "value": 2739.7 },
      { "country": "سال", "date": 2016, "value": 2761.9 },
      { "country": "سال", "date": 2017, "value": 2772.8 },
      { "country": "ماه", "date": 1965, "value": 109.2 },
      { "country": "ماه", "date": 1966, "value": 115.7 },
      { "country": "ماه", "date": 1967, "value": 120.5 },
      { "country": "ماه", "date": 1968, "value": 128 },
      { "country": "ماه", "date": 1969, "value": 134.4 },
      { "country": "ماه", "date": 1970, "value": 142.2 },
      { "country": "ماه", "date": 1971, "value": 157.5 },
      { "country": "ماه", "date": 1972, "value": 169.5 },
      { "country": "ماه", "date": 1973, "value": 186.3 },
      { "country": "ماه", "date": 1974, "value": 195.5 },
      { "country": "ماه", "date": 1975, "value": 198 },
      { "country": "ماه", "date": 1976, "value": 211.7 },
      { "country": "ماه", "date": 1977, "value": 223.8 },
      { "country": "ماه", "date": 1978, "value": 236.5 },
      { "country": "ماه", "date": 1979, "value": 251.8 },
      { "country": "ماه", "date": 1980, "value": 262.9 },
      { "country": "ماه", "date": 1981, "value": 262.7 },
      { "country": "ماه", "date": 1982, "value": 265.9 },
      { "country": "ماه", "date": 1983, "value": 268.3 },
      { "country": "ماه", "date": 1984, "value": 278.3 },
      { "country": "ماه", "date": 1985, "value": 285.2 },
      { "country": "ماه", "date": 1986, "value": 304.2 },
      { "country": "ماه", "date": 1987, "value": 315.4 },
      { "country": "ماه", "date": 1988, "value": 324.6 },
      { "country": "ماه", "date": 1989, "value": 329.9 },
      { "country": "ماه", "date": 1990, "value": 331.1 },
      { "country": "ماه", "date": 1991, "value": 339.7 },
      { "country": "ماه", "date": 1992, "value": 355.8 },
      { "country": "ماه", "date": 1993, "value": 368.8 },
      { "country": "ماه", "date": 1994, "value": 390.9 },
      { "country": "ماه", "date": 1995, "value": 408.3 },
      { "country": "ماه", "date": 1996, "value": 425.8 },
      { "country": "ماه", "date": 1997, "value": 448.2 },
      { "country": "ماه", "date": 1998, "value": 465.5 },
      { "country": "ماه", "date": 1999, "value": 463.7 },
      { "country": "ماه", "date": 2000, "value": 476.1 },
      { "country": "ماه", "date": 2001, "value": 477.7 },
      { "country": "ماه", "date": 2002, "value": 483.5 },
      { "country": "ماه", "date": 2003, "value": 489.3 },
      { "country": "ماه", "date": 2004, "value": 515.5 },
      { "country": "ماه", "date": 2005, "value": 533.6 },
      { "country": "ماه", "date": 2006, "value": 564 },
      { "country": "ماه", "date": 2007, "value": 587 },
      { "country": "ماه", "date": 2008, "value": 605.8 },
      { "country": "ماه", "date": 2009, "value": 596.8 },
      { "country": "ماه", "date": 2010, "value": 632.5 },
      { "country": "ماه", "date": 2011, "value": 658.9 },
      { "country": "ماه", "date": 2012, "value": 676.5 },
      { "country": "ماه", "date": 2013, "value": 692 },
      { "country": "ماه", "date": 2014, "value": 697.7 },
      { "country": "ماه", "date": 2015, "value": 701.1 },
      { "country": "ماه", "date": 2016, "value": 696.8 },
      { "country": "ماه", "date": 2017, "value": 700.6 },
      { "country": "هفته", "date": 1965, "value": 1058.1 },
      { "country": "هفته", "date": 1966, "value": 1089.7 },
      { "country": "هفته", "date": 1967, "value": 1121.7 },
      { "country": "هفته", "date": 1968, "value": 1196.6 },
      { "country": "هفته", "date": 1969, "value": 1285.5 },
      { "country": "هفته", "date": 1970, "value": 1369 },
      { "country": "هفته", "date": 1971, "value": 1406.2 },
      { "country": "هفته", "date": 1972, "value": 1472.7 },
      { "country": "هفته", "date": 1973, "value": 1558 },
      { "country": "هفته", "date": 1974, "value": 1535.5 },
      { "country": "هفته", "date": 1975, "value": 1519.3 },
      { "country": "هفته", "date": 1976, "value": 1606.9 },
      { "country": "هفته", "date": 1977, "value": 1632.4 },
      { "country": "هفته", "date": 1978, "value": 1687.5 },
      { "country": "هفته", "date": 1979, "value": 1749.6 },
      { "country": "هفته", "date": 1980, "value": 1706.4 },
      { "country": "هفته", "date": 1981, "value": 1661.4 },
      { "country": "هفته", "date": 1982, "value": 1630.2 },
      { "country": "هفته", "date": 1983, "value": 1645.2 },
      { "country": "هفته", "date": 1984, "value": 1686.9 },
      { "country": "هفته", "date": 1985, "value": 1779.4 },
      { "country": "هفته", "date": 1986, "value": 1811.3 },
      { "country": "هفته", "date": 1987, "value": 1849.7 },
      { "country": "هفته", "date": 1988, "value": 1870 },
      { "country": "هفته", "date": 1989, "value": 1875 },
      { "country": "هفته", "date": 1990, "value": 1853.3 },
      { "country": "هفته", "date": 1991, "value": 1844.6 },
      { "country": "هفته", "date": 1992, "value": 1814.1 },
      { "country": "هفته", "date": 1993, "value": 1805.3 },
      { "country": "هفته", "date": 1994, "value": 1791.3 },
      { "country": "هفته", "date": 1995, "value": 1836.2 },
      { "country": "هفته", "date": 1996, "value": 1896.1 },
      { "country": "هفته", "date": 1997, "value": 1896.4 },
      { "country": "هفته", "date": 1998, "value": 1918.8 },
      { "country": "هفته", "date": 1999, "value": 1907.7 },
      { "country": "هفته", "date": 2000, "value": 1932.1 },
      { "country": "هفته", "date": 2001, "value": 1959.2 },
      { "country": "هفته", "date": 2002, "value": 1954.8 },
      { "country": "هفته", "date": 2003, "value": 1991.6 },
      { "country": "هفته", "date": 2004, "value": 2025.4 },
      { "country": "هفته", "date": 2005, "value": 2037.4 },
      { "country": "هفته", "date": 2006, "value": 2056.4 },
      { "country": "هفته", "date": 2007, "value": 2041.7 },
      { "country": "هفته", "date": 2008, "value": 2038.5 },
      { "country": "هفته", "date": 2009, "value": 1932.1 },
      { "country": "هفته", "date": 2010, "value": 2001.1 },
      { "country": "هفته", "date": 2011, "value": 1949.1 },
      { "country": "هفته", "date": 2012, "value": 1944.3 },
      { "country": "هفته", "date": 2013, "value": 1934 },
      { "country": "هفته", "date": 2014, "value": 1871.2 },
      { "country": "هفته", "date": 2015, "value": 1908.7 },
      { "country": "هفته", "date": 2016, "value": 1934.6 },
      { "country": "هفته", "date": 2017, "value": 1969.5 },
      { "country": "روز", "date": 1965, "value": 593.3 },
      { "country": "روز", "date": 1966, "value": 630.9 },
      { "country": "روز", "date": 1967, "value": 663.2 },
      { "country": "روز", "date": 1968, "value": 687.8 },
      { "country": "روز", "date": 1969, "value": 719 },
      { "country": "روز", "date": 1970, "value": 754.8 },
      { "country": "روز", "date": 1971, "value": 791.9 },
      { "country": "روز", "date": 1972, "value": 832.3 },
      { "country": "روز", "date": 1973, "value": 875.1 },
      { "country": "روز", "date": 1974, "value": 923.3 },
      { "country": "روز", "date": 1975, "value": 969 },
      { "country": "روز", "date": 1976, "value": 1006.5 },
      { "country": "روز", "date": 1977, "value": 1051.4 },
      { "country": "روز", "date": 1978, "value": 1094.2 },
      { "country": "روز", "date": 1979, "value": 1127.1 },
      { "country": "روز", "date": 1980, "value": 1150.1 },
      { "country": "روز", "date": 1981, "value": 1174.5 },
      { "country": "روز", "date": 1982, "value": 1204 },
      { "country": "روز", "date": 1983, "value": 1229 },
      { "country": "روز", "date": 1984, "value": 1274.6 },
      { "country": "روز", "date": 1985, "value": 1257 },
      { "country": "روز", "date": 1986, "value": 1282 },
      { "country": "روز", "date": 1987, "value": 1318 },
      { "country": "روز", "date": 1988, "value": 1341.5 },
      { "country": "روز", "date": 1989, "value": 1332.5 },
      { "country": "روز", "date": 1990, "value": 1350.3 },
      { "country": "روز", "date": 1991, "value": 1308.9 },
      { "country": "روز", "date": 1992, "value": 1233.1 },
      { "country": "روز", "date": 1993, "value": 1121 },
      { "country": "روز", "date": 1994, "value": 1012.2 },
      { "country": "روز", "date": 1995, "value": 951.2 },
      { "country": "روز", "date": 1996, "value": 920 },
      { "country": "روز", "date": 1997, "value": 878.4 },
      { "country": "روز", "date": 1998, "value": 871.7 },
      { "country": "روز", "date": 1999, "value": 881.3 },
      { "country": "روز", "date": 2000, "value": 888.5 },
      { "country": "روز", "date": 2001, "value": 905.5 },
      { "country": "روز", "date": 2002, "value": 904 },
      { "country": "روز", "date": 2003, "value": 924.3 },
      { "country": "روز", "date": 2004, "value": 938.7 },
      { "country": "روز", "date": 2005, "value": 942.3 },
      { "country": "روز", "date": 2006, "value": 978.6 },
      { "country": "روز", "date": 2007, "value": 989.8 },
      { "country": "روز", "date": 2008, "value": 998.1 },
      { "country": "روز", "date": 2009, "value": 926.8 },
      { "country": "روز", "date": 2010, "value": 967.8 },
      { "country": "روز", "date": 2011, "value": 1006 },
      { "country": "روز", "date": 2012, "value": 1014.1 },
      { "country": "روز", "date": 2013, "value": 989.2 },
      { "country": "روز", "date": 2014, "value": 987 },
      { "country": "روز", "date": 2015, "value": 960.7 },
      { "country": "روز", "date": 2016, "value": 972 },
      { "country": "روز", "date": 2017, "value": 978 }
     
    ],
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
    color: ['#6897a7', '#8bc0d6', '#60d7a7', '#dedede'],
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${toFarsiNumber(v)} میلیون`,
      },
    },
    xAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${toFarsiNumber(v)}`,
      },
    },
  };

  return <Area {...config} className="" />;
};
export default LineChart;
