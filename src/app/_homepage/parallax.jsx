import FastFoodAll from "@/public/fastFoodsAll.jpeg";
import ContentWithBgImg from "@/ui/contentWithBgImg";

function ContentFixedSlide() {
  return (
    <div className="flex flex-col ">
      <h1 className= "bg-white z-100 flex px-4 md:px-[300px]  sticky top-[25%] justify-center font-bold text-xl md:text-2xl">
        <span className="">We are</span>
      </h1>
  
     

      <div className="sticky top-1/3">
      <div className="bg-white  w-full aspect-video ">
        {/* <ContentWithBgImg className="bg-[url('/websitebackgroundimage4.jpeg')] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center w-full aspect-video"> */}
          <h1 className="sticky top-1/3 flex justify-center items-center font-bold text-xl md:text-2xl">
            Background image component is created 11
          </h1>
        {/* </ContentWithBgImg> */}
      </div>
      </div>
      <div className="sticky top-[40%]">
      <div className="bg-white  w-full aspect-video">
        {/* <ContentWithBgImg className="bg-[url('/boardroombackground10.jpeg')] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center w-full h-full grayscale"> */}
          <h1 className="sticky top-[40%] flex justify-center items-center font-bold text-xl md:text-2xl">
            Background image component is created 2
          </h1>
        {/* </ContentWithBgImg> */}
      </div>
      </div>
   
      <div className="sticky top-[50%]">
      <div className="bg-white  w-full aspect-video">
        {/* <ContentWithBgImg className="bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center w-full h-full grayscale"> */}
          <h1 className="sticky top-[50%] flex justify-center items-center font-bold text-xl md:text-2xl">
            Background image component is created 3
          </h1>
        {/* </ContentWithBgImg> */}
      </div>
      </div>
    {/* last slide to make sticky */}
    <div className="sticky top-[60%]">
      <div className="bg-white w-full aspect-video">
        {/* <ContentWithBgImg className="bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center w-full h-full grayscale"> */}
          <h1 className="sticky top-[60%] flex justify-center items-center font-bold text-xl md:text-2xl">
            Background image component is created 4
          </h1>
        {/* </ContentWithBgImg> */}
      </div>
      </div>
   
    </div>
  );
}

export default ContentFixedSlide;
