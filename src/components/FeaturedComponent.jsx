
import React, { useState, useEffect, useRef } from 'react';

const convertDuration = (duration) => {
    const hour = Math.floor(duration/3600);
    const minute = Math.floor((duration-3600*hour)/60);
    return hour+'h'+' '+minute+'m';
}

export const FeaturedComponent = ({data}) => {
   console.log('data', data);
   const [playVideo, setPlayVideo] = useState(false);
   const videoRef = useRef();
   if (!data) return;
   return (
    <div
       style={{backgroundImage: !playVideo && `url(/images/movies/${data.CoverImage})`}}
       className={`${playVideo ? 'relative' : ''} w-full h-full  bg-no-repeat bg-cover `}
    >
        {playVideo && <video
           className="absolute w-full"
           ref={videoRef}
           loop
           src={"https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"}
        />}
        <div className={`w-[720px] h-[100px] text-[#858688] font-tajawalBold py-[142px] text-[24px] ${playVideo ? 'absolute' : ''}`}>
            <div className="tracking-[4.8px] uppercase">{data.Category}</div>
            <img src={`/images/movies/${data.TitleImage}`} />
            <div className="flex first-letter:w-full text-[24px] text-[#F1F1F1] mt-[10px]">
                <div>{data.ReleaseYear}</div>
                <div className="ml-[20px]">{data.MpaRating}</div>
                <div className="ml-[20px]">{convertDuration(data.Duration)}</div>
            </div>
            <div className="text-[#F1F1F1] w-[550px] leading-[28px]">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
            </div>
            <div className="flex w-full h-[72px] mt-[50px]">
               <div
                  onClick={()=>videoRef.current.play()}
                  className="cursor-pointer bg-[url('/images/icons/play.png')] bg-[length:40px_40px] bg-[position:30%_50%] bg-no-repeat w-[240px] bg-[#F1F1F1] h-full rounded-[40px] text-[#000] flex items-center justify-center"
                >
                    Play
                </div>
               <div className="cursor-pointer ml-[20px] w-[240px] flex items-center justify-center text-[#F1F1F1] bg-[linear-gradient(128deg,_#2727F5_0%,_#001671_100%)] h-full rounded-[40px]">More Info</div>
            </div>

        </div> 
    </div>
   )
}