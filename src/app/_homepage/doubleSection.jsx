"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import WaiterServingFood from "@/public/waiterServingTransparent.png";
import CustomerOrderingFood from "@/public/customerOrderingTransparent.png";
import SideImage1 from "@/public/boardroombackground.jpg"
import SideImage2 from "@/public/boardroombackground1.jpg"
import SideImage3 from "@/public/boardroommeeting3.png"


// import CarVideo from "/carVideo.mp4"
// import CarVideo from "/public/sample_video.mp4"

const DoubleArticle = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const observedElementRef = useRef(null);
  const observedElementRefTwo = useRef(null);
  const observedElementRefOne = useRef(null);
  const handleIntersection = async (entries, setVisibility) => {
    console.log("inside handleIntersection---->");
    try {
      entries.map((entry, idx) => {
        console.log("each entry of entries---->", entry.isIntersecting);
        console.log("intersectio ratio---->", entry);
        if (entry.isIntersecting) {
          setVisibility(true);
        } else {
          setVisibility(false);
        }
      });
    } catch (err) {
      console.log("error in interSection api---->", err);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (e) => handleIntersection(e, setIsVisible),
      {
        threshold: 0.5,
      }
    );
    const observerOne = new IntersectionObserver(
      (e) => handleIntersection(e, setIsVisibleOne),
      {
        threshold: 0.5,
      }
    );

    const observerTwo = new IntersectionObserver(
      (e) => handleIntersection(e, setIsVisibleTwo),
      {
        threshold: 0.5,
      }
    );

    observer.observe(observedElementRef.current);
    observerTwo.observe(observedElementRefTwo.current);
    observerOne.observe(observedElementRefOne.current);
  }, []);

  return (
    <>
    <div className="sticky top-1/3">
    <div
        className="bg-neutral-900 md:flex justify-around relative m-10 "
        ref={observedElementRefOne}
      >
        <article
          className={` basis-[40%] text-center flex items-center md:transition-all md:ease-in-out  md:duration-1000  ${
            isVisibleOne
              ? " md:translate-x-0 md:opacity-100"
              : "md:translate-x-[-200%] md:opacity-0"
          } `}
        >
          <p className="text ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            accusamus quos qui magni facilis quam ex quod numquam tenetur
            doloremque quas dignissimos, quasi beatae sunt earum inventore.
            Unde, similique molestias? Iure quis dolorem mollitia soluta
            ducimus, distinctio voluptas nobis! Magnam distinctio ex est.
            Maiores, voluptas velit illum suscipit ab perferendis asperiores eos
            facilis soluta aliquid accusantium doloribus ullam ut vero?
            Reprehenderit, recusandae sit
          </p>
        </article>
        <div className="relative  ">
          <Image
            src={SideImage1}
            className=" object-contain min-h-[100%] w-[100%] md:h-[30%]"
          />
        </div>
      </div>
    </div>
   <div className="sticky top-1/3">
   <div
        className="bg-white md:flex md:flex-row-reverse justify-around relative m-10 overflow-hidden"
        ref={observedElementRefTwo}
      >
        <article
          className={` basis-[40%] text-center flex items-center md:transition-all md:ease-in-out  md:duration-1000 ${
            isVisibleTwo
              ? " md:translate-x-0 md:opacity-100"
              : "md:translate-x-[200%] md:opacity-0"
          } `}
        >
          <p className="textDark p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            accusamus quos qui magni facilis quam ex quod numquam tenetur
            doloremque quas dignissimos, quasi beatae sunt earum inventore.
            Unde, similique molestias? Iure quis dolorem mollitia soluta
            ducimus, distinctio voluptas nobis! Magnam distinctio ex est.
            Maiores, voluptas velit illum suscipit ab perferendis asperiores eos
            facilis soluta aliquid accusantium doloribus ullam ut vero?
            Reprehenderit, recusandae sit
          </p>
        </article>
        <div className="relative  ">
          <Image
            src={SideImage2}
            className=" object-contain min-h-[100%] w-[100%] md:h-[30%]"
          />
        </div>
      </div>
   </div>
     <div className="sticky top-1/3">
     <div
        className="bg-neutral-900  md:flex justify-around relative m-10"
        ref={observedElementRef}
      >
        <article
          className={` basis-[40%] text-center flex items-center md:transition-all md:ease-in-out  md:duration-1000  ${
            isVisible
              ? " md:translate-x-0 md:opacity-100"
              : "md:translate-x-[-200%] md:opacity-0"
          } `}
        >
          <p className="text ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            accusamus quos qui magni facilis quam ex quod numquam tenetur
            doloremque quas dignissimos, quasi beatae sunt earum inventore.
            Unde, similique molestias? Iure quis dolorem mollitia soluta
            ducimus, distinctio voluptas nobis! Magnam distinctio ex est.
            Maiores, voluptas velit illum suscipit ab perferendis asperiores eos
            facilis soluta aliquid accusantium doloribus ullam ut vero?
            Reprehenderit, recusandae sit
          </p>
        </article>
        <div className="relative  ">
          <Image
            src={SideImage3}
            className="object-contain min-h-[100%] w-[100%] md:h-[30%] "
          />
        </div>
      </div>
     </div>
     {/*last element is added so that during stick7 implementation the last the title must not move with second last item */}
     <div className="sticky top-1/3">
   <div
        className="bg-image bg-white  h-[700px] md:h-[500px] md:flex md:flex-row-reverse justify-around relative m-10 overflow-hidden"
    
      >
        <article
          className={` basis-[40%] text-center flex items-center 
        `}
        >
          <p className="">
      
          </p>
        </article>
        <div className="relative  ">
     
        </div>
      </div>
   </div>
    </>
  );
};

export default DoubleArticle;
