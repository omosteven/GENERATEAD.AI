import React from 'react'

function Banner() {
  return (
    <div className="Cta w-full h-[592px] relative bg-transparent">
        <div className="Background w-[959px] h-[508px] left-[240px] top-[42px] absolute">
        </div>
        <div className="Frame7789 left-[351px] top-[169px] absolute flex-col justify-start items-center gap-[41px] inline-flex">
            <div className="Heading flex-col justify-start items-center gap-[13px] flex">
                <div className="Heading w-[737px] text-center text-white text-[64px] font-bold leading-[70.40px]">Ready to Take Your Data to the Next Level? </div>
            </div>
            <div className="Buttons bg-gradient-to-r from-indigo-900 to-orange-300 rounded-[15px] border border-stone-500 justify-start items-start gap-2.5 inline-flex">
                <div className="ButtonBigPrimary w-[210px] h-[73px] bg-gradient-to-r from-indigo-900 to-orange-300 rounded-[15px] border border-stone-500 justify-center items-center gap-2.5 flex hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">                    <div className="GetStarted text-center text-white text-xl font-semibold leading-loose">Get Started</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner