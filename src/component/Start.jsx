import React, { useEffect, useState } from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function Start() {
    const [rotate, setRotate] = useState(0);
    useEffect((
    ) => {
        document.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)

            setRotate(angle - 180)
        })
    })
    return (
        <div className='relative w-full h-[120vh] bg-[#CDEA68] '>
            {/* Heading below */}
            <div className='para w-full pt-[25vh] flex flex-col justify-center items-center '>
                {["ready", "to start", "the project?"].map((item, index) =><h1 key={index} className='text-[12vw] font=["Test_Founders_Grotesk_X-Cond_SmBd"] 
                font-extrabold uppercase leading-[22vh] 
                max-[1000px]:leading-[18vh]
                max-[1000px]:text-[13vw] 
                tracking-tighter'>{item}</h1>)}

            </div>

            {/* Eyes */}
            <div className='absolute flex gap-[3vw] w- top-[35vh] left-[50%] -translate-x-[50%]'>
                <div className='flex items-center justify-center w-[13rem] h-[13rem] rounded-full bg-zinc-100
                max-[600px]:w-[10rem] max-[600px]:h-[10rem]
                 '>
                    <div className='w-[55%] h-[55%] bg-zinc-900 rounded-full relative '>
                        <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-5  flex '>
                            <div className='rectina bg-zinc-100 w-[18%] h-full rounded-full '></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-[13rem] h-[13rem] 
                max-[600px]:w-[10rem] max-[600px]:h-[10rem]
                  rounded-full bg-zinc-100'>
                    <div className='w-[55%] h-[55%] bg-zinc-900 rounded-full  relative '>
                        <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-5  flex '>
                            <div className='rectina bg-zinc-100 w-[18%] h-full rounded-full '></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* button below */}
            <div className=' flex justify-center '>
                <div className='group  mt-[10vh] w-[18vw]   bg-black rounded-full flex justify-center items-center
                 max-[1300px]:w-[20rem]
                 max-[1300px]:w-[16rem]
                  '>
                    <div className='text-white pr-[2vw] pl-[1.5vw] py-[2.5vh] uppercase font-["Neue_Montreal"] font-light
                      '>start the project
                    </div>
                    <div
                        className='w-[3vw] h-[6.5vh]  
                        max-[1300px]:w-[3.8rem]
                        rounded-full 
                     flex items-center justify-center group-hover:bg-white  transition-all'
                    >
                        <span className=' '>
                            <MdOutlineArrowOutward />
                        </span>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Start