import React from 'react'

function About() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-[8vw] bg-[#CDEA68] rounded-t-3xl text-black'>
            <h1 className='font-["Neue_Montreal"] text-[3.5vw] pl-10 pr-[15vw] leading-none font-normal
            max-[760px]:text-[6vw]
            
            '>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

            <div className='w-full border-t-[2px] border-[#99AD53] mt-[17vh] pt-[1vw] px-[2vw] flex justify-center
            max-[760px]:flex-col
            '>

                <div className='w-1/2 ml-[1.2vw] 
                max-[760px]:pb-[3vh]
                ' >
                    <h1 className='text text-[3.5vw] font-["Neue_Montreal"]
                    max-[760px]:text-[4vw]
                    max-[450px]:text-[7vw]
                    '>Our approach:</h1>
                    <button className='btn uppercase bg-zinc-800 rounded-full py-[1vw] px-[1.3vw] pr-[2vw] mt-[1vw] text-white flex justify-between gap-[1.5vw] items-center
                    max-[760px]:w-[23vw]
                    max-[760px]:py-[2vw]
                    max-[760px]:text-[2.3vw]
                    max-[760px]:px-[3vw]


                    max-[450px]:w-[30vw]
                    max-[450px]:py-[3vw]
                    max-[450px]:text-[3vw]

                    '>Read more
                        <div className='innerDot w-[.8vw] h-[1.8vh] bg-zinc-100 rounded-full
                        max-[760px]:w-[1.5vw] max-[760px]:h-[1.5vw]
                        '></div>
                    </button>
                </div>

                <div className='w-1/2 
                max-[760px]:w-full
                ' >
                    <img className=" rounded-2xl" src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg' />
                </div>
            </div>


        </div>
    )
}

export default About