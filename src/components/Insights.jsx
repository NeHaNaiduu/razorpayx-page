import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { insights } from '../constant/content';
import { FaIndianRupeeSign } from "react-icons/fa6";

const Insights = () => {
  return (
    <div className='mb-5'>
        <div className='flex items-center justify-between mb-2'>
            <h2 className='font-bold'>Insights</h2>
            <p className='flex items-center text-indigo-400'>Detailed insights <FaArrowRight className='ml-2'/></p>
        </div>
        <div className='bg-slate-800 pt-7 pl-6 h-44 border-b-8 border-slate-800 relative mb-4'> 
            <p className='text-neutral-500 font-semibold'>Payout volume - last 30 days</p>
            <p className='flex items-baseline text-xs text-neutral-500'><FaIndianRupeeSign/><span className='text-xl font-bold text-white'>236,695</span>.00</p>
            <div className='absolute bg-blue-500 w-full h-1 bottom-0 left-0'></div>
            <div className='w-20 h-1 bottom-8 left-11 rotate-[55deg]  bg-blue-500 absolute'></div>
            <div className='w-20 h-1 bottom-8 left-0 -rotate-[55deg] bg-blue-500 absolute'></div>
            <div className='h-1 w-[84px] left-5 bg-slate-800 absolute bottom-0'></div>
        </div>
        <div className='bg-slate-800 pt-5 pl-5 pr-10 pb-10 overflow-hidden relative'>
            <div className='flex items-center justify-between mb-10'>
                <div className='flex items-center'>
                    <h3 className='font-semibold  text-lg'>Activity Feed</h3>
                    <p className='text-neutral-500 flex items-center ml-4'><IoMdInformationCircleOutline/> updated a few seconds ago</p>
                </div>
                <p className='flex items-center text-indigo-400'>Show filters<IoIosArrowDown className='ml-3'/></p>
            </div>

            {insights.map((item,index)=>(
                <div className='flex items-center  w-1/2 bg-gradient-to-r from-gray-700 via-slate-800 to bg-slate-800 p-10 rounded pl-24 mb-5 w-full ml-20'>
                    <div className='flex-col mr-10'>
                        <p className='text-lg font-bold'>{item.date}</p>
                        <p className='text-neutral-400'>{item.day}</p>
                    </div>
                    <div className='w-1 h-12 bg-neutral-500 mr-10'></div>
                    <div className='flex items-center'>
                        <img src={item.logo} alt=""  className='h-7 mr-5'/>
                        {item.content}
                    </div>
                </div>
            ))}

            <div className='flex items-center justify-center mt-7'>
                <button className='bg-gray-700 py-2 px-4 rounded uppercase flex items-center font-semibold'>look for older activities <IoMdArrowDown className='ml-2'/></button>
            </div>
            <div className='h-7 w-20 absolute bottom-0 right-9 bg-indigo-900'></div>
            <div className='h-12 w-12 bg-indigo-900 absolute -bottom-6 -left-6 rotate-45'></div>
            <div className='absolute h-14 w-5 bg-indigo-900 top-20 right-0'></div>
        </div>
    </div>
  )
}

export default Insights