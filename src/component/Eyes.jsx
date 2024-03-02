import React, { useEffect, useState } from 'react'

function Eyes() {
    const[rotate,setRotate] = useState(0);
    useEffect((
    ) => {
        document.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)

            setRotate(angle-180)
        })
    })
    return (
        <div className=' eyes w-full h-screen bg-[#EBEBEB] overflow-hidden'>
            <div data-scroll data-scroll-container data-scroll-speed="-.7" className='relative w-full h-full   bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] 
            max-[1200px]:bg-contain bg-no-repeat'>

                <div className='absolute flex gap-[3vw] w- top-[15rem] left-[50%] -translate-x-[50%]  -translate-y-[50%]
                max-[1200px]:translate-y-[50%]
                
                '>
                    <div className='flex items-center justify-center w-[13rem] h-[13rem] rounded-full bg-zinc-100'>
                        <div className='w-[50%] h-[50%] bg-zinc-900 rounded-full relative '>
                            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-5  flex '>
                                <div className='rectina bg-zinc-100 w-[20%] h-full rounded-full '></div>
                            </div>

                        </div>
                    </div>
                    <div className='flex items-center justify-center w-[13rem] h-[13rem] rounded-full bg-zinc-100'>
                        <div className='w-[50%] h-[50%] bg-zinc-900 rounded-full  relative '>
                            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-5  flex '>
                                <div className='rectina bg-zinc-100 w-[20%] h-full rounded-full '></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 1.30min */}
        </div>
    )
}

export default Eyes