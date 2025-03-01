import FastFoodAll from "@/public/fastFoodsAll.jpeg";
import ContentWithBgImg from "@/ui/contentWithBgImg";

function ContentFixedSlide() {
  return (
    <div className="flex flex-col">
      <h1 className="z-100 flex px-4 md:px-[300px] sticky top-1/3 font-bold text-xl md:text-2xl">
        <span className="">Ashhar</span>
      </h1>

      <div className="w-full aspect-video">
        <ContentWithBgImg className="bg-blue-300 flex flex-col justify-center w-full aspect-video">
          <h1 className="sticky top-1/3 flex justify-center items-center font-bold text-xl md:text-2xl">
            Background image component is created
          </h1>
        </ContentWithBgImg>
      </div>

      <div className="w-full aspect-video">
        <ContentWithBgImg className="bg-red-400 flex flex-col justify-center w-full h-full grayscale">
          <h1 className="sticky top-1/3 flex justify-center items-center font-bold text-xl md:text-2xl">
            Background image component is created
          </h1>
        </ContentWithBgImg>
      </div>

      <div className="w-full aspect-video">
        <ContentWithBgImg className="bg-green-300 flex flex-col justify-center w-full h-full grayscale">
          <h1 className="sticky top-1/3 flex justify-center items-center font-bold text-xl md:text-2xl">
            Background image component is created
          </h1>
        </ContentWithBgImg>
      </div>
    </div>
  );
}

export default ContentFixedSlide;
