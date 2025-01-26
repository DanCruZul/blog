import React from 'react';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogFeatured from '@/components/blog/BlogFeatured';
import BlogLatest from '@/components/blog/BlogLatest';
import BlogCategories from '@/components/blog/BlogCategories';
import BlogSidebar from '@/components/blog/BlogSidebar';

const Index = () => {
  return (
    <div className="bg-white">
      <BlogHeader />
      <div className="flex w-full gap-6 justify-center flex-wrap py-10 max-md:max-w-full">
        <main className="min-w-60 w-[996px] max-w-[1200px] max-md:max-w-full">
          <BlogFeatured />
          <BlogLatest />
          <BlogCategories />
        </main>
        <BlogSidebar />
      </div>
    </div>
  );
};

export default Index;