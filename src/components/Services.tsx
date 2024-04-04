
import React from "react";
import {  heroData } from "../constants/constant";
import HeroCard from "./HeroCard";


export default function Services(){
  return (
    <div className="py-10 space-y-5 bg-secondary">
      <p className="text-md text-center text-teal-500 font-semibold">EXPLORE</p>
      <p className="sm:text-4xl text-2xl text-center sm:max-w-[800px]   max-w-xs mx-auto text-white font-bold">
        Discover more ways to work with<br />Calendly
      </p>
      <div className="gap-4 flex flex-wrap sm:max-w-[1200px] max-w-xs mx-auto justify-center">
        {heroData.map((hero, index) => (
          <HeroCard key={index} hero={hero} />
        ))}
      </div>
    </div>
  );
}


