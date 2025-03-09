"use client";
import { useState,useRef, useEffect } from "react";

import Navbar from "@commonLayout/navbar";
import Footer from "@commonLayout/footer";
import ScrollToTop from "@commonLayout/scrollToTop"

function CommonLayout({ children }) {
  const [menuToggleOpen, setMenuToggleOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col bg-white  min-h-dvh justify-between ">
         
          <Navbar/>
         
    
        <div className=" max-w-[100dvw]">{children}</div>
        <ScrollToTop/>
       <Footer/>
      </div>
    </>
  );
}

// export default LayoutViews;
export {CommonLayout}
