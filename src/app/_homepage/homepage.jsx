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
        <div className="min-h-screen bg-[url('/logo2.png')] bg-no-repeat bg-center bg-fixed bg-cover">
        <HeroSection/>
        <h2 className="flex justify-center text-4xl font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 m-[100px]">
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