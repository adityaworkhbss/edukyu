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

  return (
    <div className="w-full font-[Outfit]">
      <TopNav />
      <div className="relative">
        {DevEnvironment.ENABLE_GRIDS && (
          <div className="absolute inset-0 pointer-events-none opacity-90">
            <Parent {...config} color="rgba(220, 100, 255, 0.2)" />
          </div>
        )}
        {children}
      </div>
      <Footer />
    </div>
  );
}
