import React from 'react'
import { navItems } from '../constant/content'
import { FaArrowRightLong } from "react-icons/fa6";


const Sidebar = () => {

  return (
    <div className='bg-slate-800 w-56 h-screen fixed'>
        <div className='flex flex-col items-start'>
            <div className='h-16 flex items-center justify-center'>
                <img src="logo.png" alt="" />
            </div>
            <ul className='w-full'>
                {navItems.map((item,index)=>(
                    <li key={index} className='flex items-center flex-wrap my-4 w-full cursor-pointer p-2 text-sm hover:bg-neutral-700 font-semibold'>
                        <div className='mr-2'>{item.logo}</div>
                        <p>{item.name}</p>
                        {item.name === "Loans" && <div className='bg-green-600 rounded-xl text-xs ml-3 px-2'>NEW</div>}
                        {item.name === "Vendor Payments" && 
                        <div className='flex items-center mt-3'>
                            <div className='bg-green-600 rounded-xl text-xs ml-3 px-2 mr-1'>NEW</div>
                            <div className='text-indigo-400 flex items-center'>Invoice approvals<FaArrowRightLong className='ml-2'/></div>
                        </div>}
                        {item.name === "Contact" && <div></div>}
                    </li>
                ))}
                
            </ul>
        </div>
    </div>
  )
}

export default Sidebar