import React from 'react';

const BlogHeader: React.FC = () => {
  return (
    <header className="flex w-full min-h-[400px] bg-gradient-to-r from-[#F8F1F6] to-[#E1F6F4] rounded-3xl overflow-hidden my-8 mx-auto max-w-7xl px-8">
      <div className="flex flex-col justify-center w-full md:w-1/2 py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-[#1C1B1D] leading-tight mb-4">
          Material Design
          <br />
          Blog
        </h1>
        <p className="text-lg md:text-xl text-[#1C1B1D]/80">
          Read the latest and greatest about Material Design
        </p>
      </div>
      <div className="hidden md:block w-1/2 relative">
        <img
          src="/lovable-uploads/cc2f694a-49b8-454f-b15c-e91362e51c15.png"
          alt="Material Design Blog Header"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </header>
  );
};

export default BlogHeader;