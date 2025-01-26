import React from 'react';

interface BlogCardProps {
  date: string;
  title: string;
  description: string;
  imageSrc: string;
  fullWidth?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  date,
  title,
  description,
  imageSrc,
  fullWidth = false,
}) => {
  const containerClass = fullWidth
    ? "flex min-w-60 items-center overflow-hidden justify-center flex-wrap rounded-3xl max-md:max-w-full"
    : "flex min-w-60 flex-col overflow-hidden items-stretch justify-center grow shrink w-[389px] rounded-3xl max-md:max-w-full";

  const contentClass = fullWidth
    ? "self-stretch min-w-80 text-[rgba(28,27,29,1)] font-normal w-[486px] my-auto p-6 max-md:max-w-full max-md:px-5"
    : "min-w-[420px] w-full text-[rgba(28,27,29,1)] font-normal p-6 max-md:max-w-full max-md:px-5";

  const imageContainerClass = fullWidth
    ? "self-stretch min-w-60 w-[486px] my-auto max-md:max-w-full"
    : "self-center max-w-full w-[486px]";

  return (
    <article className={`bg-[rgba(248,241,246,1)] ${containerClass}`}>
      <div className={imageContainerClass}>
        <img
          loading="lazy"
          srcSet={imageSrc}
          className="aspect-[1.63] object-contain w-full min-w-[200px] rounded-3xl max-md:max-w-full"
          alt={title}
        />
      </div>
      <div className={contentClass}>
        <time className="w-full text-[15px] leading-loose max-md:max-w-full">
          {date}
        </time>
        <h3 className="w-full text-[23px] font-medium leading-8 mt-2 pr-[39px] max-md:max-w-full max-md:pr-5">
          {title}
        </h3>
        <p className="w-full text-base leading-loose mt-2 max-md:max-w-full">
          {description}
        </p>
      </div>
    </article>
  );
};

export default BlogCard;