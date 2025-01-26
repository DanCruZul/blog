import React from 'react';

const BlogHeader: React.FC = () => {
  return (
    <header className="flex w-full gap-2 text-[rgba(28,27,29,1)] justify-center flex-wrap py-10 max-md:max-w-full">
      <div className="bg-[rgba(248,241,246,1)] flex min-w-60 items-stretch justify-center w-[876px] p-14 rounded-3xl max-md:max-w-full max-md:px-5">
        <div className="flex min-w-60 w-full flex-col items-stretch justify-center flex-1 shrink basis-[0%] py-[97px] max-md:max-w-full">
          <h1 className="text-[92px] font-medium leading-[96px] max-md:max-w-full max-md:text-[40px] max-md:leading-[46px]">
            Material Design
            <br />
            Blog
          </h1>
          <p className="text-[21px] font-normal leading-none mt-4 max-md:max-w-full">
            Read the latest and greatest about Material Design
          </p>
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/cb566f8d2895816224cf9672189c1cf67b4e53f74304829306e7584a659c1729?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/cb566f8d2895816224cf9672189c1cf67b4e53f74304829306e7584a659c1729?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/cb566f8d2895816224cf9672189c1cf67b4e53f74304829306e7584a659c1729?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/cb566f8d2895816224cf9672189c1cf67b4e53f74304829306e7584a659c1729?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/cb566f8d2895816224cf9672189c1cf67b4e53f74304829306e7584a659c1729?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/cb566f8d2895816224cf9672189c1cf67b4e53f74304829306e7584a659c1729?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/cb566f8d2895816224cf9672189c1cf67b4e53f74304829306e7584a659c1729?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/cb566f8d2895816224cf9672189c1cf67b4e53f74304829306e7584a659c1729?placeholderIfAbsent=true"
        className="aspect-[1.61] object-contain w-[876px] min-w-60 rounded-3xl max-md:max-w-full"
        alt="Material Design Blog"
      />
    </header>
  );
};

export default BlogHeader;