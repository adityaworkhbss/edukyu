// Component/RootShell.js
"use client";
import TopNav from "@/Component/Navbar/TopNav";
import Footer from "@/Component/Footer/Footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { gridConfigs } from "@/libs/GridConfigs";
import { DevEnvironment } from "@/DevEnvironment/DevEnviroment";
import Parent from "@/GlobalComponent/Parent";

export default function RootShell({ children }) {
    const breakpoint = useBreakpoint();
    const config = gridConfigs[breakpoint];

    const marginClass = {
        mobile: 'ml-[20px] mr-[20px]',
        tablet: 'ml-[20px] mr-[20px]',
        laptop: 'ml-[56px] mr-[56px]',
        desktop: 'mx-auto',
    }[breakpoint];

    return (
        <div className="w-full font-[Outfit]">
            <TopNav />
            <div className="">
                {DevEnvironment.ENABLE_GRIDS && (
                    <div className={`${marginClass} absolute z-[1000000000000] `}>
                        <Parent {...config} />
                    </div>
                )}
                {children}
            </div>
            <Footer />
        </div>
    );
}