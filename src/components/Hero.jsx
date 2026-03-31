import React from 'react';
import banner from '../assets/banner.png';
const Hero = () => {

  return (
        <div className='max-w-[1600px] mx-auto gap-5 flex flex-col-reverse lg:flex-row justify-around items-center my-10'>
            <div className='max-w-[600px] p-2 text-center lg:text-left space-y-3 mx-auto'>
                <span className='flex items-center gap-2 p-2 rounded-2xl  bg-[#E1E7FF] w-fit mx-auto lg:mx-0'>
                    <img src=  ""alt="" />
                    <span className='bg-linear-to-r from-blue-600 to bg-purple-500 bg-clip-text text-transparent font-bold'> New: AI-Powered Tools Available</span>
                </span>
                <h1 className='text-5xl font-bold'>Supercharge YourDigital Workflow</h1>
                <p className='text-gray-500'>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.

                    Explore Products
                </p>
                <div className='flex gap-2 text-center w-fit mx-auto lg:mx-0'>
                    <button className='bg-purple-600 text-white px-5 py-2 rounded-full'>Explore Products</button>
                    <button className='border px-5 py-2 rounded-full'>
                        Watch Demo</button>
                </div>
            </div>
            {/* image div */}
            <div className='max-w-[600px] mx-auto'>
                <img src={banner} alt="" />
            </div>

        </div>
    )
};

export default Hero;