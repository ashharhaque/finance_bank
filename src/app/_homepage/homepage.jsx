import React from "react";
import HeroSection from "@homepage/heroSection";
import Testimonial from "@/ui/carousel";
import DoubleArticle from "@homepage/doubleSection";
import Clients from "@homepage/clients";
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
        <Clients/>
        <h2 className="flex justify-center text-4xl font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 m-[100px]">
        Testimonials</h2>
        <Testimonial />
      
        </>
    )
}

export default HomePage