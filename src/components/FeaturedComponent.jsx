
import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

const convertDuration = (duration) => {
    const hour = Math.floor(duration/3600);
    const minute = Math.floor((duration-3600*hour)/60);
    return hour+'h'+' '+minute+'m';
}

export const FeaturedComponent = ({data}) => {
   //console.log('data', data);
   const [playVideo, setPlayVideo] = useState(false);
   const [refresh, setRefresh] = useState(false);
   const [storage, setStorage] = useState(sessionStorage.getItem("movie"));
   const videoRef = useRef();
   if (!data) return;

   useEffect(()=>{
    setPlayVideo(false);
    setRefresh(!refresh);
   }, [data]);

   useEffect(()=>{
     if (storage) {
        var id = setTimeout(()=>{
            setPlayVideo(true);
           }, 2000); 
     }
     return ()=>clearTimeout(id);
   }, [refresh])
   return (
    <div
       style={{backgroundImage: !playVideo && `url(/images/movies/${data.CoverImage})`, height: window.innerHeight-325+'px'}}
       className={`${playVideo ? 'relative' : ''} w-full  bg-repeat ${!storage? 'bg-[length:100%_100%]' : 'bg-contain'}`}
    >
        {playVideo && <video
           className="absolute w-full h-full"
           ref={videoRef}
           loop
           autoPlay
           src={data.VideoUrl}
        />}
        <div className={`w-[720px] h-[100px] text-[#858688] font-tajawalBold py-[142px] text-[24px] ${playVideo ? 'absolute' : ''}`}>
            <div className="tracking-[4.8px] uppercase">{data.Category}</div>
            {!storage ? <img src={`/images/movies/${data.TitleImage}`} /> : <div
               className="text-[60px] text-[#F1F1F1]"
              >
                  {data.Title}
              </div> 
            }
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
                  //onClick={()=>videoRef.current && videoRef.current.play()}
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