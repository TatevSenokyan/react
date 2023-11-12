import React, { useState, useRef } from 'react';

export const Trending = ({data, handleSelect}) => {
    const sliderRef = useRef();
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState();
    const [scrollLeft, setScrollLeft] = useState();

    return (
     <div
        className={`w-full h-[325px] font-tajawalBold text-[32px] text-[#F1F1F1] bg-[#040404]`}
     >
        Trending Now
        <div
           onMouseDown={(e)=>{
            setIsDown(true);
            setStartX(e.pageX-sliderRef.current.offsetLeft);
            setScrollLeft(sliderRef.current.scrollLeft);
           }}
           onMouseUp={()=>{
             setIsDown(false);
           }}
           onMouseMove={(e)=>{
             if(!isDown) return;
             const x = e.pageX - sliderRef.current.offsetLeft;
             const walk = x-startX;
             sliderRef.current.scrollLeft = scrollLeft - walk;
           }}
           ref={sliderRef} 
           className= {`cursor-grabbing no-scrollbar w-full h-[278px] flex space-x-[10px] overflow-hidden`}
        >
           {
             data && data.map((item, index)=>{
                return(
                    <div
                      onClick={()=>handleSelect(item)}
                      style={{backgroundImage: `url(/images/movies/${item.CoverImage})`}}
                      key={index} 
                      className="min-w-[200px] h-full">
                    </div>
                )
             })
           }
        </div>
     </div>
    )
 }