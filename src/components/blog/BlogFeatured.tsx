import React from 'react';
import BlogCard from './BlogCard';

const BlogFeatured: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-stretch max-md:max-w-full">
      <h2 className="w-full text-[55px] text-[rgba(28,27,29,1)] font-medium whitespace-nowrap leading-none max-md:max-w-full max-md:text-[40px]">
        Featured
      </h2>
      <div className="self-center flex w-full max-w-[996px] gap-2 flex-wrap mt-8 px-2 max-md:max-w-full">
        <BlogCard
          date="Nov 04, 2024"
          title="Unlocking component flexibility with slots in Figma"
          description={'One less reason to "detach instance"'}
          imageSrc="https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/fe63ae8e66a7eaf21ee26580f6449be0536e10b0508d8274e3c61607d4746fcc"
          fullWidth
        />
        <BlogCard
          date="Nov 04, 2024"
          title="Unlocking component flexibility with slots in Figma"
          description={'One less reason to "detach instance"'}
          imageSrc="https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/fe63ae8e66a7eaf21ee26580f6449be0536e10b0508d8274e3c61607d4746fcc"
        />
        <BlogCard
          date="Nov 04, 2024"
          title="Unlocking component flexibility with slots in Figma"
          description={'One less reason to "detach instance"'}
          imageSrc="https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/fe63ae8e66a7eaf21ee26580f6449be0536e10b0508d8274e3c61607d4746fcc"
        />
      </div>
    </section>
  );
};

export default BlogFeatured;