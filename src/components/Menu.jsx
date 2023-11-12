
import React, { useState, useEffect } from 'react';

export const Menu = ({handleUpdate}) => {
    const buttons = ["Search", "Home", "TV_Shows", "Movies", "Genres", "Watch_Later"];
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(1);

    return (
        <div className={`${open? 'w-full h-full bg-[linear-gradient(90deg,_#040404_0%,_#040404FA_21%,_#04040400_100%)] absolute' : ''}`}>
            <div
            onMouseEnter={()=>{
                setOpen(true);
                handleUpdate(true);
            }}
            className={`${!open? 'w-[120px]' : 'w-[350px]'} h-full bg-[#040404] py-[60px] px-[10px] transition-all absolute`}
            >
                <div className={`${open ? 'w-[312px]' : 'w-[82px]'} h-full relative`}>
                    <div className={`${open ? 'flex' : 'hidden'} w-full h-[82px] items-center text-[32px] font-tajawalBold`}>
                        <div className="w-[82px] h-full rounded-[50%] bg-green-400"></div>
                        <div className="ml-[20px] text-[#F1F1F1]">Daniel</div>
                    </div>
                    {buttons.map((item, i)=>{
                        return (
                            <div
                            key={item}
                            style={{backgroundImage: `url(/images/icons/${item}.png)`}}
                            className={`${open ? 'rounded-[12px] bg-[position:5%_50%]' : 'rounded-[50%] bg-[position:50%_50%] w-[82px] h-[82px]'} font-tajawalRegular ${selected===i ? "bg-[#3B486D]" : ""} cursor-pointer flex items-center pl-[90px] w-full h-[72px] bg-no-repeat  mt-[15px] text-[36px] text-[#F1F1F1]`}
                            >
                            {open ? item.replace("_", " "): ""}
                            </div>
                        )
                    })}
                    <div className={`${open ? 'flex' : 'hidden'} h-[120px] text-[#858688] text-[24px] w-[171px] absolute bottom-0 font-tajawalRegular flex-col justify-between`}>
                        <div className="w-full uppercase tracking-[4.8px] h-[24px]">Language</div>
                        <div className="w-full uppercase tracking-[4.8px] h-[24px]">Get Help</div>
                        <div
                            onClick={()=>{
                                setOpen(false);
                                handleUpdate(false);
                            }}
                            className="w-full uppercase tracking-[4.8px] h-[24px] cursor-pointer"
                        >
                            Exit
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}