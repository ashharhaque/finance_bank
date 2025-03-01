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
        <div>
        <h2 className="headingTitle sticky top-0 ">
WHO ARE WEee
</h2>
<AboutUs/>
        </div>

        <h2 className="headingTitle">
  OUR SERVICES
</h2>

<DoubleArticle/>

        
        <h2 className="headingTitle">
        OUR CLIENTS</h2>
        <Clients/>
        <h2 className="headingTitle">
        Testimonials</h2>
        {/* <Testimonial />
         */}
   <TestimonialCarousel/>
   </div>
        </>
    )
}

export default HomePage