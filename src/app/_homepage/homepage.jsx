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
      <div className="min-h-screen bg-image">
        <HeroSection />
        <div>
          <h2 className="headingTitle">WHO ARE WEee</h2>
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
            <h2 className="headingTitle ">
              OUR SERVICESeesss
            </h2>
            {/* <DoubleArticle /> */}
            <OurServices/>
          </div>
        </div>

        <div className="bgColor">
          <h2 className="headingTitle ">OUR CLIENTS</h2>
          <Clients />
        </div>
        <div>
          <div className="bgColor">
            <h2 className="headingTitle ">Testimonials</h2>
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
