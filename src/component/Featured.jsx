import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {
    const [fyde, setFyde] = useState(false);
    const [vice, setVice] = useState(false);


    return (
        <div className='main w-full  py-[14vh]   bg-[#F1F1F1]'>
            <div className='w-full px-[3vw]  border-b-[1.5px] border-[#C2C2C2]'>
                <h1 className='text-[3.6vw] font-["Neue_Montreal"] pb-[4vh]'>Featured projects</h1>
            </div>

            <div className='w-full mt-[5vh] px-[4vw]'>
                {/* Grid Cards */}
                <div className='relative w-full grid grid-cols-2 grid-rows-1
                max-[1300px]:gap-5
                max-[760px]:grid-cols-1
                '>

                    <div
                        onMouseEnter={() => setFyde(true)}
                        onMouseLeave={() => setFyde(false)}
                        className='w-full h-full  '>
                        <div>
                            <h1 className='uppercase mb-[4vh] pl-[1vw] '>⚫ fyde</h1>
                        </div>

                        <div
                            className='w-fit hover:scale-[0.95] rounded-2xl overflow-hidden transition-all duration-700 '>
                            <img
                                className='rounded-2xl hover:scale-[1.1] transition-all duration-700
                                
                                '
                                src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'
                                alt='fyde' />
                        </div>
                    </div>

                    <div
                        onMouseEnter={() => setVice(true)}
                        onMouseLeave={() => setVice(false)}
                        className='w-full h-full '>
                        <div>
                            <h1 className='uppercase mb-[4vh] pl-[1vw] '>⚫ vice</h1>
                        </div>
                        <div className='w-fit hover:scale-[0.95] rounded-2xl  overflow-hidden transition-all duration-700'>
                            <img
                                className='rounded-2xl hover:scale-[1.1] transition-all duration-700'
                                src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg' alt='vice' />
                        </div>

                    </div>

                    {/* Text */}
                    <div className='  fyde absolute left-[40%] top-[40%] flex overflow-hidden'>
                        {
                            "fyde".split("").map((item, index) => <motion.h1 key={index}
                                initial={{ y: "100%" }}
                                animate={fyde ? ({ y: "0" }) : ({ y: "100%" })} transition={{ ease: [0.87, 0, 0.13, 1], delay: index * .1 }} className='Title text-[#CDEA68] font-["Neue_Montreal"] text-[7vw] uppercase font-bold tracking-tighter '>{item}</motion.h1>
                            )
                        }
                    </div>
                    <div className='vice absolute left-[40%] top-[40%] flex overflow-hidden'>
                        {
                            "vice".split("").map((item, index) => <motion.h1 key={index}
                                initial={{ y: "100%" }}
                                animate={vice ? ({ y: "0" }) : ({ y: "100%" })} transition={{ ease: [0.87, 0, 0.13, 1], delay: index * .1 }} className='Title text-[#CDEA68] font-["Neue_Montreal"] text-[7vw] uppercase font-bold tracking-tighter '>{item}</motion.h1>
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
// 2.10min
export default Featured