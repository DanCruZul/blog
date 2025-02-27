import * as React from "react";
import ArticleCard from "./ArticleCard";

const articles = [
  {
    date: "Nov 04, 2024",
    title: "Unlocking component flexibility with slots in Figma",
    description: 'One less reason to "detach instance"',
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/6400bf718a5c8de7d402ee22efba3c5eadf572ab80713ab6b39d018da008259d?apiKey=122e97734cb546b28d41af0f93ece26a&",
    imageAlt: "Figma component flexibility",
  },
  {
    date: "Nov 04, 2024",
    title: "Unlocking component flexibility with slots in Figma",
    description: 'One less reason to "detach instance"',
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/6400bf718a5c8de7d402ee22efba3c5eadf572ab80713ab6b39d018da008259d?apiKey=122e97734cb546b28d41af0f93ece26a&",
    imageAlt: "Figma component flexibility",
  },
  {
    date: "Nov 04, 2024",
    title: "Unlocking component flexibility with slots in Figma",
    description: 'One less reason to "detach instance"',
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/6400bf718a5c8de7d402ee22efba3c5eadf572ab80713ab6b39d018da008259d?apiKey=122e97734cb546b28d41af0f93ece26a&",
    imageAlt: "Figma component flexibility",
  },
];

const MainContent: React.FC = () => (
  <div className="flex flex-col self-start w-full max-w-[996px] min-w-[240px]">
    <div className="flex flex-col w-full">
      <div className="w-full text-6xl font-medium leading-none whitespace-nowrap text-zinc-900 max-md:text-4xl">
        Featured
      </div>
      <div className="flex flex-col gap-6 mt-8 w-full">
        {/* Primera card - primer row */}
        <ArticleCard
          date={articles[0].date}
          title={articles[0].title}
          description={articles[0].description}
          imageUrl={articles[0].imageUrl}
          imageAlt={articles[0].imageAlt}
          className="flex-col md:flex-row md:w-full"
        />
        {/* Segundo row con dos cards */}
        <div className="flex flex-wrap gap-6 justify-between w-full">
          {articles.slice(1).map((article, index) => (
            <ArticleCard
              key={index + 1}
              date={article.date}
              title={article.title}
              description={article.description}
              imageUrl={article.imageUrl}
              imageAlt={article.imageAlt}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="flex flex-col mt-24 w-full max-md:mt-10">
      <div className="w-full text-6xl font-medium leading-none text-zinc-900 max-md:text-4xl">
        Latest releases
      </div>
      <div className="flex flex-wrap gap-6 mt-8 w-full">
        <ArticleCard
          date={articles[0].date}
          title={articles[0].title}
          description={articles[0].description}
          imageUrl={articles[0].imageUrl}
          imageAlt={articles[0].imageAlt}
        />
      </div>
    </div>
    <div className="flex flex-col mt-24 w-full max-md:mt-10 max-md:max-w-full">
      <div className="w-full text-6xl font-medium leading-none whitespace-nowrap text-zinc-900 max-md:max-w-full max-md:text-4xl">
        Categories
      </div>
      <div className="flex flex-wrap gap-2 items-start self-center px-2 mt-8 w-full max-w-[996px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-col justify-center items-start rounded-3xl bg-zinc-100 min-w-[240px] w-[486px] max-w-[486px]">
          <div className="flex flex-col w-full h-[300px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/6400bf718a5c8de7d402ee22efba3c5eadf572ab80713ab6b39d018da008259d?apiKey=122e97734cb546b28d41af0f93ece26a&"
              alt="Web Design"
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>
          <div className="flex flex-col w-full p-6 text-zinc-900 max-md:px-5">
            <div className="text-2xl font-medium leading-snug">Web Design</div>
            <div className="mt-2 text-base leading-loose">Description</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MainContent;
