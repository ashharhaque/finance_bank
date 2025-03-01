import React from "react";
import HeroSection from "@homepage/heroSection";
import Testimonial from "@/ui/carousel";
import DoubleArticle from "@homepage/doubleSection";
import Clients from "@homepage/clients";
import AboutUs from "@homepage/parallax"
import TestimonialCarousel from "@homepage/testiomial"
 function HomePage(){
    return(
        <>
        <div className="min-h-screen bg-[url('/logo.png')] bg-no-repeat bg-center bg-fixed bg-cover">
        <HeroSection/>
        <h2 className="flex justify-center text-4xl font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 m-[100px] bg-gradient-to-r from-gray-50 via-gray-100 to-indigo-400 text-transparent bg-clip-text text-center font-bold text-3xl p-2 sm:text-5xl lg:text-7xl leading-tight tracking-tighter">
WHO ARE WE
</h2>
<AboutUs/>
        <h2 className="flex justify-center text-4xl font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 m-[100px]">
  OUR SERVICES
</h2>

<DoubleArticle/>

        
        <h2 className="flex justify-center text-4xl font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 m-[100px]">
        OUR CLIENTS</h2>
        <Clients/>
        <h2 className="flex justify-center text-4xl font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 m-[100px]">
        Testimonials</h2>
        {/* <Testimonial />
         */}
   <TestimonialCarousel/>
   </div>
        </>
    )
}

export default HomePage