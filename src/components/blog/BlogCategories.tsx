import React from 'react';

const BlogCategories: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-stretch mt-24 max-md:max-w-full max-md:mt-10">
      <h2 className="w-full text-[54px] text-[rgba(28,27,29,1)] font-medium whitespace-nowrap leading-none max-md:max-w-full max-md:text-[40px]">
        Categories
      </h2>
      <div className="self-center flex w-full max-w-[996px] gap-2 flex-wrap mt-8 px-2 max-md:max-w-full">
        <article className="bg-[rgba(248,241,246,1)] flex min-w-60 w-[486px] flex-col overflow-hidden items-stretch justify-center rounded-3xl">
          <div className="self-center w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/fe63ae8e66a7eaf21ee26580f6449be0536e10b0508d8274e3c61607d4746fcc?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/fe63ae8e66a7eaf21ee26580f6449be0536e10b0508d8274e3c61607d4746fcc?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/fe63ae8e66a7eaf21ee26580f6449be0536e10b0508d8274e3c61607d4746fcc?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/fe63ae8e66a7eaf21ee26580f6449be0536e10b0508d8274e3c61607d4746fcc?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/fe63ae8e66a7eaf21ee26580f6449be0536e10b0508d8274e3c61607d4746fcc?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/fe63ae8e66a7eaf21ee26580f6449be0536e10b0508d8274e3c61607d4746fcc?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/fe63ae8e66a7eaf21ee26580f6449be0536e10b0508d8274e3c61607d4746fcc?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/fe63ae8e66a7eaf21ee26580f6449be0536e10b0508d8274e3c61607d4746fcc?placeholderIfAbsent=true"
              className="aspect-[1.63] object-contain w-full min-w-[200px] rounded-3xl max-md:max-w-full"
              alt="Web Design"
            />
          </div>
          <div className="min-w-[420px] w-full text-[rgba(28,27,29,1)] p-6 max-md:max-w-full max-md:px-5">
            <h3 className="w-full text-[23px] font-medium leading-[1.4] pr-[39px] max-md:max-w-full max-md:pr-5">
              Web Design
            </h3>
            <p className="w-full text-base font-normal whitespace-nowrap leading-loose mt-2 max-md:max-w-full">
              Description
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogCategories;