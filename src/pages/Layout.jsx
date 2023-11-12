import { Menu } from "../components/Menu";
import HomePage from "./HomePage";
import React, { useState, useEffect } from "react";

export default function Layout() {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className={`w-full h-full`}>
            <div className="flex h-screen">
                <Menu handleUpdate={(state)=>setOpenMenu(state)}/>
                <div className={`w-full ${openMenu ? 'pl-[350px]': 'pl-[120px]'} `}>
                    <HomePage/>
                </div>
            </div>
        </div>

    );
}