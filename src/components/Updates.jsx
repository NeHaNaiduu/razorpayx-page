import React from 'react'
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { GrPowerCycle } from "react-icons/gr";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GiArrowDunk } from "react-icons/gi";


const Updates = () => {
  return (
    <>
        <section className='my-16'>
            <div className='flex flex-col items-start mb-8'>
                <div className='flex items-center '>
                    <img src="X.jpg" alt="" className='h-5 mr-3'/>
                    <span className='font-semibold mr-2 text-neutral-300'>RazorpayX Lite </span>
                    <span className='italic text-neutral-400'>as of a few seconds ago</span>
                    <GrPowerCycle className='ml-2 text-neutral-400'/>
                </div>
                <div className='flex items-center justify-between w-6/12'>
                    <p className='flex items-baseline text-neutral-400'><FaIndianRupeeSign/><span className='font-bold text-white text-2xl'>100</span>.09</p>
                    <p className='text-blue-500 border-l pl-4 border-neutral-500 text-sm font-semibold'>+ Add balance</p>
                </div>
            </div>
            <div className='border-dashed border-neutral-700 text-neutral-400 border-2 p-2 mb-5 pl-4'>
                &#127881; You're all caught up. There are no more items pending on you.
            </div>
            <div>
                <p>Onboarding updates <span className='text-xs text-neutral-500'>(1)</span></p>
                <div className='flex items-center rounded-xl py-5 mt-3 bg-slate-800 overflow-hidden relative'>
                    <div className='h-full w-48 bg-indigo-800 absolute rotate-45 -left-20'></div>
                    <div className='flex flex-col items-center z-20'>
                        <HiMiniBuildingLibrary className='text-6xl'/>
                        <h2 className='text-center uppercase font-bold w-1/2'>Current account</h2>
                    </div>
                    <div className='z-20 ml-5'>
                        <h2 className='font-bold text-xl mb-1'>Open your RazorpayX account.</h2>
                        <p className='text-neutral-500'>Don't let bankache come in the way of your growth. Apply for your RazorpayX account with a few basic details.</p>
                        <div className='flex mt-5 mb-3'>
                            <div className='bg-neutral-400 h-1 w-1/4 rounded relative'>
                                <div className='absolute bg-green-400 h-1 w-1/2'></div>
                            </div>
                            <div className='bg-neutral-400 h-1 w-1/4 rounded mx-1'></div>
                            <div className='bg-neutral-400 h-1 w-1/4 rounded mr-1'></div>
                            <div className='bg-neutral-400 h-1 w-1/4 rounded'></div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <button className='text-white bg-indigo-600 py-2 px-5 rounded flex items-center'>Start Application<FaArrowRight className='ml-2'/></button>
                            <p className='text-neutral-500'>0/4</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 bg-slate-800'>
                <div className='border-green-600 border-t-2 flex justify-between pt-5 pb-10'>
                    <h2 className='font-bold w-1/5 text-lg text-left ml-10'>Amazon Instant Settlements</h2>
                    <div className='flex items-start mr-14'>
                        <div className='mr-4'>
                            <input type="radio" name="start" id="start" defaultChecked className='text-blue-700'/>
                        </div>
                        <label htmlFor="start">
                            <div>
                                <p>Let's get you started</p>
                                <p>Complete your application and get instant access to your Amazon payouts</p>
                                <button className='uppercase bg-indigo-600 rounded py-2 px-6 mt-3'>Apply now</button>
                            </div>
                        </label>
                    </div>
                </div>
                <div className='border-t-2 border-green-600 flex justify-between pt-5 pb-5'>
                    <h2 className='font-bold text-lg w-1/6 ml-10'>Creating payouts in Live mode</h2>
                    <div className='flex mr-32'>
                        <div className='mr-4 flex flex-col items-center'>
                            <ImCheckboxChecked/>
                            <div className='bg-neutral-600 h-5 w-1'></div>
                            <input type="radio" defaultChecked/>
                        </div>
                        <div>
                            <p className='border-b pb-2 text-neutral-400 border-neutral-500 mb-2'><span className='font-semibold text-lg'>Add balance</span> to create payouts in Live mode</p>
                            <div>
                                <h3 className='font-bold text-lg'>Create payout</h3>
                                <p className='text-neutral-400 '>There are multiple ways in which you can create the first payout:</p>
                                <div className='flex items-center justify-between mt-3'>
                                    <button className='py-2 px-3 bg-indigo-600 rounded uppercase'>Make a payout</button>
                                    <button className='py-2 px-3 bg-neutral-600 uppercase rounded'>Show apps for me</button>
                                    <button className='py-2 px-3 bg-neutral-600 uppercase rounded'>API Payouts</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center bg-slate-800 mt-7 rounded py-4 pl-4 pr-12 justify-between mb-5 border-2 border-indigo-500 relative overflow-hidden'>
                <div className='absolute z-10 h-full w-52 bg-indigo-800 -left-8 skew-x-[24deg]'></div>
                <div className='w-24 z-20 h-28 bg-black relative p-2'>
                    <img src="X.jpg" alt="" className='h-8 rounded-lg'/>
                    <div className='bg-white rounded h-6 w-14 flex items-center justify-center absolute bottom-7 -right-10'>
                        <img src="zoho.png" alt="" className='object-cover'/>
                    </div>
                    <div className='bg-gradient-to-r from-blue-600 to-purple-600 inline-block p-2 rounded-full absolute top-2 -right-2 text-xl'>
                        <GrPowerCycle/>
                    </div>
                    <div className='absolute top-7 -right-5'>
                        <GiArrowDunk className='text-green-400 text-2xl'/>
                    </div>
                </div>
                <div className='w-1/2 z-20'>
                    <div className='font-semibold text-lg flex items-center'>
                        <div className='w-1 h-4 bg-green-500 -rotate-12 mr-2'></div>
                        Automate Bookkeeping For Payouts
                    </div>
                    <p className='text-neutral-500'>Close your books 60% faster and with better accuracy by automating bookkeeping for your Payouts.</p>
                </div>
                <div>
                    <button className='py-2 px-3 border-2 border-indigo-600 text-indigo-400 rounded flex items-center'>Connect Zoho Books <FaArrowRight className='ml-2'/></button>
                </div>
                <div className='absolute top-0 right-0 p-2 text-lg text-neutral-500'><IoMdClose/></div>
            </div>
            
        </section>
    </>
  )
}

export default Updates