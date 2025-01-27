import * as React from "react";
import HeroSection from "./components/HeroSection";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

const MainPage: React.FC = () => (
  <div className="flex flex-col bg-white">
    <HeroSection />
    <div className="flex flex-wrap gap-6 justify-center py-10 w-full max-md:max-w-full">
      <MainContent />
      <Sidebar />
    </div>
  </div>
);

export default MainPage;
