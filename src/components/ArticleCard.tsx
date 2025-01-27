import * as React from "react";

interface ArticleCardProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  date,
  title,
  description,
  imageUrl,
  imageAlt,
  className = "",
}) => (
  <div
    className={`flex ${
      className || "flex-col"
    } overflow-hidden justify-center items-stretch rounded-3xl bg-zinc-100 min-w-[240px] w-full ${
      className?.includes("md:w-full") ? "md:w-full" : "md:w-[calc(50%-12px)]"
    }`}
  >
    <div
      className={`${
        className?.includes("flex-row") ? "md:w-1/2 w-full" : "w-full"
      } h-[300px]`}
    >
      <img
        loading="lazy"
        src={imageUrl}
        alt={imageAlt}
        className="object-cover w-full h-full rounded-t-3xl"
      />
    </div>
    <div
      className={`flex flex-col ${
        className?.includes("flex-row")
          ? "md:w-1/2 md:justify-center w-full"
          : "w-full justify-between"
      }`}
    >
      <div className="flex flex-col gap-4 p-8 max-md:px-5">
        <div className="text-sm font-normal text-zinc-500">{date}</div>
        <div className="text-2xl font-medium leading-tight text-zinc-900">
          {title}
        </div>
        <div className="text-base text-zinc-500">{description}</div>
      </div>
    </div>
  </div>
);

export default ArticleCard;
