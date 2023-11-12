import { Menu } from "../components/Menu";
import HomePage from "./HomePage";
import React, { useState, useEffect } from "react";

export default function Layout() {
    const [openMenu, setOpenMenu] = useState(false);
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`w-full h-full`}>
            <div className="flex h-screen">
                <Menu handleUpdate={(state)=>setOpenMenu(state)}/>
                <div className={`w-full bg-[#040404] ${openMenu ? 'pl-[350px]': 'pl-[120px]'}`}>
                    <HomePage/>
                </div>
            </div>
        </div>

    );
}