import { Menu } from "../components/Menu";
import {Outlet} from "react-router-dom";
//bg-[linear-gradient(90deg,_#040404_0%,_#040404FA_21%,_#04040400_100%)]
export default function Layout() {
    return (
        <div className={`w-full h-full`}>
            <div className="flex h-screen">
                <Menu />
                <div className="w-full md:pl-0">
                    <Outlet/>
                </div>
            </div>
        </div>

    );
}