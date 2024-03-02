import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
   
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full h-[50vh] bg-[#004D43]  text-white py-[6vh]  rounded-t-2xl
        max-[780px]:h-[35vh]
        max-[450px]:h-[30vh]
        max-[450px]:py-[3vh]
        '>
            <div className='text border-t-[1px] border-b-[1px] border-[#437C75]  overflow-hidden flex whitespace-nowrap  pt-[5vh] mt-[5vh]   '>
                < motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:13}} className='text-[24vw] tracking-tighter leading-none font-semibold uppercase font-["Founders_Grotesk"] -mt-[1.4vh] -mb-[7vw]'>we are ochi &nbsp;</ motion.h1>
                < motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:13}} className='text-[24vw] tracking-tighter leading-none font-semibold uppercase  font-["Founders_Grotesk"] -mt-[1.4vh] -mb-[7vw]'>we are ochi &nbsp;</ motion.h1>
                < motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:13}} className='text-[24vw] tracking-tighter leading-none font-semibold uppercase  font-["Founders_Grotesk"] -mt-[1.4vh] -mb-[7vw]'>we are ochi &nbsp;</ motion.h1>
                < motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:13}} className='text-[24vw] tracking-tighter leading-none font-semibold uppercase  font-["Founders_Grotesk"] -mt-[1.4vh] -mb-[7vw]'>we are ochi &nbsp;</ motion.h1>
            </div>
        </div>
        
    )
}

export default Marquee