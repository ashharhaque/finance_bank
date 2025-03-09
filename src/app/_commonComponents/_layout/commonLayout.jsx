"use client";
import { useState,useRef, useEffect } from "react";
import Image from "next/image";
// import KoponLogo from "./../../../public/Kopon_transparent.png"
import KoponLogo from "@/public/Kopon_transparent.png";
import InstagramIcon from "@/public/icons/instagram.svg";
import FaceBookIcon from "@/public/icons/facebook1.svg";
import YoutubeIcon from "@/public/icons/youtube-red.svg";
import LinkedInIcon from "@/public/icons/linkedin.svg";
import XIcon from "@/public/icons/twitter.svg";
import Logo from "@/public/logo1.png"
import {
  MenuIcon,
  IconCross2,
  AdressIcon,
  CallIcon,
  EmailIcon,
  FaxMachine,
} from "@/icons/svgicon";
import Navbar from "@commonLayout/navbar";
import Footer from "@commonLayout/footer";

function CommonLayout({ children }) {
  const [menuToggleOpen, setMenuToggleOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col bg-white  min-h-dvh justify-between ">
          {/* <Image
            src={Logo}
            priority
            // height={500}
            // width={500}
            alt="logo image"
            className=" self-start h-[90%] w-[35%]  mt-1 object-cover"
          /> */}

          {/* <nav
            className={`flex flex-col py-6 pr-4 clear-both  items-center w-[50%] mx-auto transition-all ease-in-out duration-700 ${menuToggleOpen?"translate-y-8  bg-yellow-400 ":"-translate-y-full invisible "}`}
          > */}
          {/* <h12 className="bg-red-600  ">QOPON</h12> */}
          {/* <nav
            className={` flex list-text-heading  flex-col py-6 pr-4 mt-[20px] absolute top-full left-1/4 items-center w-[40%]  transition-all  ease-in-out duration-700 origin-top   md:flex md:flex-row md:self-stretch md:justify-around md:p-0 md:relative md:top-0 md:left-0 md:transition-none ${
              menuToggleOpen
                ? " bg-zinc-50 translate-y-[0%] md:bg-white "
                : "scale-y-0 invisible md:visible md:scale-y-100"
            }`}
          >
            <span
              className={`group/underline transition-all ease-in-out delay-75  ${
                menuToggleOpen
                  ? "-translate-y-3 md:translate-y-0"
                  : "-translate-y-full invisible"
              }md:transition-none md:translate-y-0`}
            >
              ABOUT US
              <p className="underline-custom"></p>
            </span>

            <span
              className={`group/underline transition-all ease-in-out delay-100   ${
                menuToggleOpen
                  ? "-translate-y-3 "
                  : "-translate-y-full invisible"
              }md:transition-none md:translate-y-0`}
            >
              FEATURES
              <p className="underline-custom"></p>
            </span>
            <span
              className={`group/underline transition-all ease-in-out delay-150 ${
                menuToggleOpen
                  ? "-translate-y-3 "
                  : "-translate-y-full invisible"
              }md:transition-none md:translate-y-0`}
            >
              TESTIMONIALS
              <p className="underline-custom"></p>
            </span>
            <span
              className={`group/underline transition-all ease-in-out delay-200  ${
                menuToggleOpen
                  ? "-translate-y-3 "
                  : "-translate-y-full invisible"
              }md:transition-none md:translate-y-0`}
            >
              HOME
              <p className="underline-custom"></p>
            </span>
            <span
              className={`group/underline transition-all ease-in-out delay-300  ${
                menuToggleOpen
                  ? "-translate-y-3 "
                  : "-translate-y-full invisible"
              }md:transition-none md:translate-y-0`}
            >
              BLOG
              <p className="underline-custom"></p>
            </span>
          </nav> */}
          <Navbar/>
         
    
        <div className=" max-w-[100dvw]">{children}</div>
       <Footer/>
      </div>
    </>
  );
}

// export default LayoutViews;
export {CommonLayout}
