import * as React from "react";
import HeroSection from "@/components/HeroSection";
import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";

const MainPage: React.FC = () => (
  <div className="flex flex-col bg-white">
    <HeroSection />
    <div className="flex flex-wrap gap-6 justify-center py-10 px-5 w-full max-md:max-w-full">
      <div className="flex flex-col min-[1295px]:flex-row gap-6 justify-center w-full max-w-[1200px]">
        <MainContent />
        <div className="order-first min-[1295px]:order-last min-[1295px]:h-[calc(100vh-100px)] min-[1295px]:sticky min-[1295px]:top-0">
          <Sidebar />
        </div>
      </div>
    </div>
  </div>
);

export default MainPage;
