import React from 'react'

function Cards() {
    return (
        <div className=' pt-[12vh] bg-[#F1F1F1]  h-screen w-[100%]
        max-[1300px]:h-auto
        max-[1300px]:pb-[12vh]
        '>
            <div className='border-b-[1.5px] border-[#C2C2C2] px-[3vw] mb-[10vh] pb-[4vh]'>
                <h1 className='heading text-[4vw] font-["Neue_Montreal"] '>Client's reviews</h1>
            </div >

            <div className='px-[3vw] flex gap-5
            max-[1300px]:flex-col
            '>
                <div className='innerCard  w-1/2
                max-[1300px]:w-full
                
                '>
                    <div
                        className='card relative w-full h-[57vh] bg-[#004D43] rounded-xl flex justify-center items-center
                        max-[1300px]:h-[45vh]
                        max-[800px]:h-[40vh]

                        '
                    >
                        <img className='w-[10vw]
                        max-[800px]:w-[15vw]
                        max-[570px]:w-[35vw]
                        ' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' />

                        <button 
                        className='absolute py-[.5vh] px-[2vh] left-[5%] top-[80%]  rounded-full border-[#CDEA68] border-[1px] text-[#CDEA68] font-light font-["Neue_Montreal"] hover:bg-[#CDEA68] hover:text-black'>
                       ©2019-2022
                        </button>
                    </div>
                </div>

                <div className='innerCard  w-1/2 flex gap-5
                max-[1300px]:w-full
                max-[600px]:flex-col
                '>
                    <div
                        className='card relative w-1/2 h-[57vh] rounded-xl bg-[#212121] flex justify-center items-center 
                        max-[1300px]:h-[45vh]
                        max-[800px]:h-[40vh]

                        max-[600px]:w-full
                        '
                    >
                        <img className='w-[10vw] 
                            max-[800px]:w-[15vw]
                            max-[570px]:w-[35vw]
                        ' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' />
                        
                        <button 
                        className='absolute py-[.5vh] px-[2vh] left-[5%] top-[80%]  rounded-full border-[#CDCDCD] border-[1px] text-[#CDCDCD] font-light font-["Neue_Montreal"] uppercase hover:bg-[#F1F1F1] hover:text-black '>
                       Rating 5.0 on Clutch
                        </button>
                    </div>
                    <div
                        className='card relative w-1/2 h-[57vh] rounded-xl bg-[#212121] flex justify-center items-center
                        max-[1300px]:h-[45vh]
                        max-[800px]:h-[40vh]

                        max-[600px]:w-full
                        '
                    >
                        <img className='w-[10vw]
                             max-[800px]:w-[15vw]
                             max-[570px]:w-[35vw]
                        ' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' />

                        <button
                        className='absolute py-[.5vh] px-[2vh] left-[5%] top-[80%]  rounded-full border-[#CDCDCD] border-[1px] text-[#CDCDCD] font-light font-["Neue_Montreal"] uppercase hover:bg-[#F1F1F1] hover:text-black'>
                       Business Bootcamp Alumni
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards