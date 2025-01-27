import * as React from "react";

const HeroSection: React.FC = () => (
  <div className="grid md:grid-cols-2 gap-2 px-6 py-10 w-full text-zinc-900 max-md:px-5 max-md:max-w-full">
    <div className="grid justify-center p-14 rounded-3xl basis-0 bg-zinc-100 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <div className="grid justify-center py-24 w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="text-8xl font-medium leading-[96px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Material Design
          <br />
          Blog
        </div>
        <div className="mt-4 text-xl leading-none max-md:max-w-full">
          Read the latest and greatest about Material Design
        </div>
      </div>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/122e97734cb546b28d41af0f93ece26a/0af9680967c444835a6a911da12417066bad356bef612d6ce7784cb1f6c65275?apiKey=122e97734cb546b28d41af0f93ece26a&"
      alt="Material Design Blog Hero"
      className="object-contain flex-1 shrink w-full rounded-3xl aspect-[1.63] basis-28 min-w-[240px] max-md:max-w-full"
    />
  </div>
);

export default HeroSection;
