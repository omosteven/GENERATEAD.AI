import React, { useState,useEffect  } from 'react';
import '../../App.css'
import audibg from '../../assets/carousel/audio_image.png';
import videobg from '../../assets/carousel/video_image.png';
import adscript_image from '../../assets/carousel/adscript_image.png';
import social_media_image from '../../assets/carousel/social_media_image.png';
import marketting_strategy from '../../assets/carousel/marketting_strategy.png';
import analytics_image from '../../assets/carousel/analytics.png';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const componentWidth = 356.34; // Width of one component
    const numComponents = 4; // Total number of components
    const slideDuration = 3000; // Duration in milliseconds for each slide

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Slide Number : ',(currentSlide + 1) % numComponents)
            setCurrentSlide((currentSlide + 1) % numComponents);
        }, slideDuration);
    
        return () => clearInterval(interval);
      }, [currentSlide]);
  
    return (
        <div id='services' className="carousel w-full h-[757px] px-[120px] py-20 bg-transparent  justify-center items-center relative overflow-hidden">
            <div className="OurServices text-center text-neutral-200 text-[42px] font-bold leading-[48px]">Our Services</div>
            <div
                className="carousel-inner left-[51.54px] top-[169px] absolute justify-center items-center gap-[22px] inline-flex transition-all ease-in-out duration-300"
                style={{ transform: `translateX(-${currentSlide * componentWidth}px)` }}
            >
                <div className="Frame7781 w-[356.34px] p-[21.82px] bg-stone-950 rounded-lg border-custom-gradient flex-col justify-start items-start gap-[41.82px] inline-flex">
                    <img className="Rectangle5031 w-[314.52px] h-[193.62px]" src={audibg} />
                    <div className="Content self-stretch h-[145.27px] flex-col justify-start items-start gap-[17.27px] flex">
                        <div className="Heading text-white text-[25.45px] font-bold leading-10">Ad Audio Generator</div>
                        <div className="Paragraph2 self-stretch opacity-75 text-white text-lg font-medium leading-[29.09px]">Create powerful Audio Adverts for podcast, Streaming platforms, Radio e.t.c</div>
                    </div>
                    <div className="Frame7785 px-[14.54px] py-[7.27px] bg-gradient-to-r from-indigo-900 to-orange-300 rounded-[13.64px] justify-start items-start gap-[3.64px] inline-flex hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                        <div className="Paragraph3 opacity-75 text-white text-sm font-bold leading-normal">Try Now</div>
                    </div>
                </div>
                <div className="Frame7782 w-[356.34px] p-[21.82px] bg-stone-950 rounded-lg border-custom-gradient flex-col justify-center items-start gap-[41.82px] inline-flex">
                    <img className="Rectangle5031 w-[314.52px] h-[193.62px]" src={videobg} />
                    <div className="Content self-stretch h-[145.27px] flex-col justify-start items-start gap-[17.27px] flex">
                        <div className="Heading w-[312.71px] text-white text-[25.45px] font-bold leading-10">Ad Video  Generator</div>
                        <div className="Paragraph2 self-stretch opacity-75 text-white text-lg font-medium leading-[29.09px]">Create high quality Video adverts for Digital media outreach, TV, Billboards e.t.c</div>
                    </div>
                    <div className="Frame7784 px-[14.54px] py-[7.27px] bg-gradient-to-r from-indigo-900 to-orange-300 rounded-[13.64px] justify-start items-start gap-[3.64px] inline-flex hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                        <div className="Paragraph3 opacity-75 text-white text-sm font-bold leading-normal">Try  Now</div>
                    </div>
                </div>
                <div className="Frame7783 w-[356.34px] p-[21.82px] bg-stone-950 rounded-lg border-custom-gradient flex-col justify-center items-start gap-[41.82px] inline-flex">
                    <img className="Rectangle5031 w-[314.52px] h-[193.62px]" src={adscript_image} />
                    <div className="Content self-stretch h-[145.27px] flex-col justify-start items-start gap-[17.27px] flex">
                        <div className="Heading text-white text-[25.45px] font-bold leading-10">Ad Script Development</div>
                        <div className="Paragraph2 self-stretch opacity-75 text-white text-lg font-medium leading-[29.09px]">No more time-consuming brainstorming sessions to create content script for your Ad.</div>
                    </div>
                    <div className="Frame7786 px-[14.54px] py-[7.27px] bg-gradient-to-r from-indigo-900 to-orange-300 rounded-[13.64px] justify-start items-start gap-[3.64px] inline-flex hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                        <div className="Paragraph3 opacity-75 text-white text-sm font-bold leading-normal">Try  Now</div>
                    </div>
                </div>
                <div className="Frame7787 w-[356.34px] p-[21.82px] bg-stone-950 rounded-lg border-custom-gradient flex-col justify-start items-start gap-[22.73px] inline-flex">
                    <img className="Rectangle5031 w-[314.52px] h-[193.62px]" src={social_media_image} />
                    <div className="Content self-stretch h-[186.27px] flex-col justify-start items-start gap-[17.27px] flex">
                        <div className="Heading w-[313.61px] text-white text-[25.45px] font-bold leading-10">Social Media Copy Generator</div>
                        <div className="Paragraph2 self-stretch opacity-75 text-white text-lg font-medium leading-[29.09px]">Create powerful Audio Adverts for podcast, Streaming platforms, Radio e.t.c</div>
                    </div>
                    <div className="Frame7785 px-[14.54px] py-[7.27px] bg-gradient-to-r from-indigo-900 to-orange-300 rounded justify-start items-start gap-[3.64px] inline-flex hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                        <div className="Paragraph3 opacity-75 text-white text-sm font-bold leading-normal">Try  Now</div>
                    </div>
                </div>
                <div className="Frame7788 w-[356.34px] p-[21.82px] bg-stone-950 rounded-lg border-custom-gradient flex-col justify-center items-start gap-[22.73px] inline-flex">
                    <img className="Rectangle5031 w-[314.52px] h-[193.62px]" src={marketting_strategy} />
                    <div className="Content self-stretch h-[186.27px] flex-col justify-start items-start gap-[17.27px] flex">
                        <div className="Heading w-[312.71px] text-white text-[25.45px] font-bold leading-10">Automated Marketing Strategy</div>
                        <div className="Paragraph2 self-stretch opacity-75 text-white text-lg font-medium leading-[29.09px]">Create high quality Video adverts for Digital media outreach, TV, Billboards e.t.c</div>
                    </div>
                    <div className="Frame7784 px-[14.54px] py-[7.27px] bg-gradient-to-r from-indigo-900 to-orange-300 rounded justify-start items-start gap-[3.64px] inline-flex">
                        <div className="Paragraph3 opacity-75 text-white text-sm font-bold leading-normal">Try  Now</div>
                    </div>
                </div>
                <div className="Frame7789 w-[356.34px] p-[21.82px] bg-stone-950 rounded-lg border-custom-gradient flex-col justify-center items-start gap-[22.73px] inline-flex">
                    <img className="Rectangle5031 w-[314.52px] h-[193.62px]" src={analytics_image} />
                    <div className="Content self-stretch h-[186.27px] flex-col justify-start items-start gap-[17.27px] flex">
                        <div className="Heading w-[316.34px] text-white text-[25.45px] font-bold leading-10">AI-powered Analytics/Optimization</div>
                        <div className="Paragraph2 self-stretch opacity-75 text-white text-lg font-medium leading-[29.09px]">Create high quality Video adverts for Digital media outreach, TV, Billboards e.t.c</div>
                    </div>
                    <div className="Frame7786 px-[14.54px] py-[7.27px] bg-gradient-to-r from-indigo-900 to-orange-300 rounded justify-start items-start gap-[3.64px] inline-flex">
                        <div className="Paragraph3 opacity-75 text-white text-sm font-bold leading-normal">Try  Now</div>
                    </div>
                </div>
                {/* End of block */}
            </div>
        </div>
    );
};
  
function OurServices() {
  return (
    <Carousel/>
  )
}

export default OurServices