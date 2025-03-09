import React from "react";
import HeroSection from "@homepage/heroSection";
import Testimonial from "@/ui/carousel";
// import DoubleArticle from "@homepage/doubleSection";
import Clients from "@homepage/clientsNew";
// import AboutUs from "@homepage/parallax";
import AboutUs from "@homepage/aboutus";
import WhyChooseUs from "@homepage/chooseus"
import TestimonialCarousel from "@homepage/testiomial";
import OurServices from "@homepage/OurServices"
function HomePage() {
  return (
    <>
      <div className="min-h-screen ">
        <HeroSection />
        <div>
          <div className="sticky ">
            <AboutUs />
          </div>
        </div>
        <div>
          <WhyChooseUs/>
        </div>
        <div className="relative">
          {/* <h2 className="headingTitle sticky top-0 z-20 ">
  OUR SERVICESeesss
</h2> */}
          <div className="relative ">
            {/* <h2 className="headingTitle ">
              OUR SERVICESeesss
            </h2> */}
             <h2 className="font-heading  mb-6 bg-orange-100 text-orange-800 px-6 py-3 rounded-xl md:w-96 md:mx-auto text-lg md:text-2xl font-bold tracking-widest uppercase title-font">
           SERVICES WE PROVIDE
          </h2>
            {/* <DoubleArticle /> */}
            <OurServices/>
          </div>
        </div>

        <div className="bgColor mt-20">
          {/* <h2 className="headingTitle ">OUR CLIENTS</h2>
           */}
            <h2 className="text-center font-heading  mb-6 bg-orange-100 text-orange-800 px-6 py-3 rounded-xl md:w-96 md:mx-auto text-lg md:text-2xl font-bold tracking-widest uppercase title-font">
            OUR PARTNERS
          </h2>
          <Clients />
        </div>
        <div>
          <div className="bgColor">
            {/* <h2 className="headingTitle ">Testimonials</h2> */}
            <h2 className="text-center font-heading  mb-6 bg-orange-100 text-orange-800 px-6 py-3 rounded-xl md:w-96 md:mx-auto text-lg md:text-2xl font-bold tracking-widest uppercase title-font">
            TESTIMONIALS
          </h2>
            {/* <Testimonial />
             */}

            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
