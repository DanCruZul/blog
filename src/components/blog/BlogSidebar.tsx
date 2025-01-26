import React from 'react';

const BlogSidebar: React.FC = () => {
  return (
    <aside className="flex flex-col items-center text-[rgba(77,66,86,1)] font-medium justify-center w-[156px] max-w-screen-lg">
      <div className="max-w-full w-[156px] text-[11px] tracking-[0.1px] leading-none">
        On this page
      </div>
      <h2 className="max-w-full w-[156px] text-[23px] text-[rgba(28,27,29,1)] whitespace-nowrap leading-8 mt-2">
        Material
        <br />
        Design
        <br />
        Blog
      </h2>
      <nav className="flex w-full max-w-[156px] flex-col items-stretch text-[13px] font-normal justify-center mt-2">
        <a href="#featured" className="rounded min-h-[31px] w-full text-sm whitespace-nowrap leading-none">
          Featured
        </a>
        <a href="#latest" className="self-stretch min-h-[31px] w-full leading-none py-[5px] rounded-[18px]">
          Latest releases
        </a>
        <a href="#categories" className="self-stretch min-h-[31px] w-full whitespace-nowrap leading-loose py-1.5 rounded-[18px]">
          Categories
        </a>
      </nav>
    </aside>
  );
};

export default BlogSidebar;