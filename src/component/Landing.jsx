import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

function Landing() {
    return (
        <div data-scroll  data-scroll-speed="-.7" className='w-full h-[110vh] bg-[#F1F1F1] pt-[1vw] pb-[10vh] mb-[10vh] '>

            <div className='textStructure mt-[19vh] px-[4.9vw]
                max-[850px]:mt-[20vh]'>
                {["We create", "eye opening", "presentation"].map((item, index) => {
                    return (
                        <div className='masker '>
                            <div className='w-fit flex items-end '>
                                {index === 1 && <motion.div 
                                initial={{width:0}} 
                                animate={{width:"8.5vw"}} 
                                transition={{
                                    ease:[0.87, 0, 0.13, 1],
                                    delay:0.4,
                                    duration:1.5
                                }} 
                                className=' h-[9.8vh] 
                                mr-[1vw] ml-[1vw] relative
                                bg-zinc-800
                                 -top-[1vh] rounded-md  
                                max-[540px]:-top-[1vw]
                                max-[1440px]:h-[9vh] 
                                max-[1200px]:h-[4.3vw] 
                                max-[1000px]:h-[4vw]
                                max-[540px]:h-[6vw]
                                '>
                                    <img className='w-[100%]' src='./src/img/img.png' alt='hell'/>
                                    </motion.div >}


                                <h1 key={index} className="  uppercase text-[6.5vw]  leading-[13vh]  tracking-tighter 
                                font=['Founders_Grotesk_X-Cond_Lt'] font-bold
                                max-[450px]:text-[12vw] 
                                max-[650px]:leading-[5vh] 
                                max-[1200px]:leading-[7vh]
                                max-[710px]:leading-[5vh]
                                max-[540px]:text-[10vw]
                                ">{item}</h1>
                            </div>
                        </div>
                    )
                })}



            </div>
            <div className="landing2 border-t-[2px] border-[#D2D2D2] mt-[15vh] max-[1200px]:mt-[20vh]  max-[850px]:flex-col  flex justify-between item-center py-[3vw] px-[5vw]">

                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
                    return <p key={index} className='text-md  tracking-tight leading-none text-[1.3vw] max-[850px]:py-[3vh] max-[650px]:text-[3vw] '>{item}</p>

                })}
                <div className='start flex items-center gap-2'>
                    <div
                        className='px-4 py-2 my-[-6px] 
                     border-[2px] border-zinc-500 font-lighter 
                     text-sm rounded-full text-[4vw] max-[450px]:text-[3vw] '
                    >
                        START THE PROJECT
                    </div>

                    <div
                        className='w-9 h-9 border-[2px] 
                     border-zinc-500 rounded-full 
                     flex items-center justify-center'
                    >
                        <span
                            className='rotate-[140deg]'
                        ><FaArrowLeft />
                        </span>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Landing