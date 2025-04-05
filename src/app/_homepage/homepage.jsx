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
import TeamSection from "@homepage/teamSection"
import OurApproach from "@homepage/OurApproach"
function HomePage() {
  return (
    <>
      <div className="min-h-screen ">
        <HeroSection />
        <div>
          <div>
            <TeamSection/>
          </div>
          <div className="sticky ">
            <AboutUs />
          </div>
        </div>
        <div>
          <OurApproach/>
        </div>
        <div>
          <WhyChooseUs/>
        </div>
        <div className="relative">

          <div className="relative ">
        
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
            <h2 className="mt-10 text-center font-heading  mb-6 bg-orange-100 text-orange-800 px-6 py-3 rounded-xl md:w-96 md:mx-auto text-lg md:text-2xl font-bold tracking-widest uppercase title-font">
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
