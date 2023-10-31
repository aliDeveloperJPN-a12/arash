'use client';
import ChartInHour2 from '@/components/ui/charts/ChartInHour2';
import DoughuntChart from '@/components/ui/charts/DoughuntChart';
import LineChart from '@/components/ui/charts/LineChart';
import ChartVertical from '@/components/ui/charts/ChartVertical';
import Filter from '@/components/ui/filter/Filter';
import News from '@/components/ui/charts/news/News';
const page = () => {
  return (
    <div className="m-[10px] grid grid-cols-3 gap-12  mt-[50px] w-[90%] mx-auto">
      <div className='col-span-2 bg-white p-4 rounded-lg'><LineChart /></div>
      <div className='col-span-1 bg-white p-4 rounded-lg'><ChartInHour2 /></div>
      <div className='col-span-1 bg-white p-4 rounded-lg'><Filter /></div>
      <div className='col-span-2 bg-white p-4 rounded-lg h-[350px]'><ChartVertical /></div>
      <div className='w-[420px] bg-white p-4 rounded-lg'><DoughuntChart /></div>
      <div className='w-[885px] bg-white p-4 rounded-lg mr-[60px] -mt-[150px]'><News /></div>
    </div>
  );
};

export default page;
