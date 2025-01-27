import * as React from "react";

const Sidebar: React.FC = () => (
  <div className="flex flex-col items-center font-medium text-neutral-600 w-[97px] max-md:hidden">
    <div className="flex sticky top-10 flex-col justify-center w-[97px] gap-4">
      <div className="text-xs tracking-normal leading-none">On this page</div>
      <div className="text-2xl leading-8 text-zinc-900">
        Material
        <br />
        Design
        <br />
        Blog
      </div>
      <div className="flex flex-col justify-center w-full text-sm max-w-[97px]">
        <div className="w-full text-sm leading-none whitespace-nowrap rounded min-h-[29px]">
          Featured
        </div>
        <div className="self-stretch py-1.5 w-full leading-none rounded-2xl min-h-[29px]">
          Latest releases
        </div>
        <div className="self-stretch py-1.5 w-full leading-loose whitespace-nowrap rounded-2xl min-h-[29px]">
          Categories
        </div>
      </div>
    </div>
  </div>
);

export default Sidebar;
