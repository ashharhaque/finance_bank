import React from "react";
import HeroSection from "@homepage/heroSection";
import Carousel from "@/ui/carousel";
import DoubleArticle from "@homepage/doubleSection";
 function HomePage(){
    return(
        <>
        <HeroSection/>
        <h2 className="flex justify-center text-4xl font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 m-[100px]">
  OUR SERVICESss
</h2>
        <DoubleArticle/>
        <h2 className="flex justify-center text-4xl font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 m-[100px]">
        OUR CLIENTS</h2>
        <Carousel />
      
        </>
    )
}

export default HomePage