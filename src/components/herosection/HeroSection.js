import React from 'react'
import '../../App.css'
import VideoModal from '../VideoModal'


function HeroSection() {
  return (
    <div id='home' className="HeroSection w-full h-[720px] relative bg-transparent">
      <div className="Frame7792 max-w-screen-xl w-full mx-auto h-[538px] top-[91px] p-5 relative">
        <div className="Group11 w-full top-[112px] absolute">
          <div className="Frame10 w-full h-52 top-0 absolute flex-col justify-center items-center gap-[31.59px] inline-flex">
            <div className="AutomateYourHighVisualVideoAndAudioAdCreationProcessAtTheSpeedOfThought w-full text-center"><span class="text-neutral-200 text-4xl font-semibold">Automate </span><span class="bg-text-custom-gradient">Your High visual</span><span class="text-neutral-200 text-4xl font-semibold">, Video, and Audio Ad creation process at the speed of thought.</span></div>
            <div className="ANewWayToThinkAndCreateCrossChannelAdvertisingContentAndMarketingStrategyWithAi w-full text-center text-zinc-400 text-lg font-medium">A new way to think and create cross-channel Advertising content and marketing strategy with AI.</div>
          </div>
          <div className="Frame9 w-full h-[45px] top-[270px] absolute justify-center items-center gap-[31.59px] inline-flex">
            <div className="Frame4 w-[200px] h-[52px] bg-gradient-to-r from-indigo-900 to-orange-300 rounded-[10px] border border-stone-500 justify-center items-center gap-[13.16px] flex hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" >
              <div className="TryNowForFree text-neutral-200 text-lg font-medium ">Try now for free</div>
            </div>
            <div className="Frame8 w-[168px] h-8 justify-center items-center gap-[10.53px] flex">
              <div className="VuesaxBoldVideoCircle w-8 h-8 justify-center items-center flex">
                <div className="VideoCircle w-8 h-8 relative"></div>
              </div>
              {/* <div className="WatchADemo text-neutral-200 text-lg font-medium hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out">Watch a demo</div> */}
              <VideoModal/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
