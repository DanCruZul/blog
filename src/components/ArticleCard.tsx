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
    } overflow-hidden justify-center items-center rounded-3xl bg-zinc-100 min-w-[240px] w-[486px] ${
      className?.includes("w-full") ? "" : "max-w-[486px]"
    }`}
  >
    <div
      className={`flex flex-col ${
        className?.includes("flex-row") ? "w-1/2" : "w-full"
      }`}
    >
      <img
        loading="lazy"
        src={imageUrl}
        alt={imageAlt}
        className="object-contain w-full rounded-3xl aspect-[1.63] min-w-[200px]"
      />
    </div>
    <div
      className={`flex flex-col items-start p-6 ${
        className?.includes("flex-row") ? "w-1/2" : "w-full"
      } text-zinc-900 max-md:px-5`}
    >
      <div className="text-sm leading-none tracking-wide text-zinc-500">
        {date}
      </div>
      <div className="pr-10 mt-4 text-2xl font-medium leading-snug max-md:pr-5">
        {title}
      </div>
      <div className="mt-2 text-base leading-loose">{description}</div>
    </div>
  </div>
);

export default ArticleCard;
