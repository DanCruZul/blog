import * as React from "react";

const HeroSection: React.FC = () => (
  <div className="grid min-[1295px]:grid-cols-2 gap-2 px-6 py-10 w-full text-zinc-900 max-md:px-5">
    <div className="flex flex-col justify-center p-14 rounded-3xl bg-zinc-100 min-w-[240px] max-md:p-8">
      <div className="flex flex-col">
        <h1 className="text-8xl font-medium leading-[96px] max-md:text-6xl max-md:leading-tight">
          Material Design
          <br />
          Blog
        </h1>
        <p className="mt-6 text-xl leading-normal text-zinc-500 max-md:text-lg">
          Read the latest and greatest about Material Design
        </p>
      </div>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/0af9680967c444835a6a911da12417066bad356bef612d6ce7784cb1f6c65275?apiKey=122e97734cb546b28d41af0f93ece26a&"
      alt="Material Design Blog Hero"
      className="object-cover w-full h-full rounded-3xl"
    />
  </div>
);

export default HeroSection;
