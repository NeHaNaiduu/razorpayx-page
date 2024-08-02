import React from 'react'
import { IoSearch } from "react-icons/io5";
import { RxSpeakerLoud } from "react-icons/rx";
import { FiUserCheck } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Additional = () => {
  return (
    <section className='w-1/6 pr-5 mt-3'>
        <div className='flex items-center justify-between'>
            <div>
                <button className='flex items-center rounded-sm bg-blue-600 py-2 px-2 w-full uppercase font-semibold text-sm'>+ Payout <span className='text-neutral-500 mx-2'>|</span> <IoIosArrowDown/></button>
            </div>
            <IoSearch className='text-indigo-500'/>
            <RxSpeakerLoud className='text-orange-500'/>
            <FiUserCheck className='text-indigo-500'/>
        </div>
    </section>
  )
}

export default Additional