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
        <div className="min-h-screen bg-image">
        <HeroSection/>
        <div>
        <h2 className="headingTitle sticky top-0 z-20 ">
WHO ARE WEee
</h2>
<div className="sticky top-1/3">
<AboutUs/>

</div>
        </div>
<div className="relative">
{/* <h2 className="headingTitle sticky top-0 z-20 ">
  OUR SERVICESeesss
</h2> */}
<div className="relative sticky top-1/3 z-100">
<h2 className="headingTitle sticky top-0 z-20 ">
  OUR SERVICESeesss
</h2>
<DoubleArticle/>
</div>

</div>


        <div>
        <h2 className="headingTitle sticky top-0 ">
        OUR CLIENTS</h2>
        <Clients/>
        </div>
       <div>
        <div>
        <h2 className="headingTitle sticky top-0">
        Testimonials</h2>
        {/* <Testimonial />
         */}
        
   <TestimonialCarousel/>
        </div>

       </div>
  
   </div>
        </>
    )
}

export default HomePage