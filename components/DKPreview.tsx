import Image from "next/image";
import React from "react";

function DKPreview() {
  return (
    <div
      className="px-8 md:px-20 lg:px-[10%] my-10 pb-36 lg:flex overflow-hidden lg:gap-32"
      data-scroll
    >
      <div className="mt-24 relative z-10">
        <div className="relative rounded-md ">
          <Image
            src={require("../public/web/03.png")}
            alt="AllSneakerImage"
            priority
            data-scroll
            data-scroll-speed="16"
          />
        </div>
        <span className="bg-zinc-200 w-screen h-4/5 absolute top-1/2 right-1/3 lg:top-1/3 lg:left-2/3 -z-[2]"></span>
      </div>
      <div className=" rounded-md mt-24 lg:mt-36 z-10 relative">
        <Image
          src={require("../public/web/01.png")}
          alt="HomeImage"
          priority
          data-scroll
          data-scroll-speed="10"
        />
      </div>
      <div className="mt-24 relative lg:mt-52 z-10">
        <div className=" rounded-md">
          <Image
            src={require("../public/web/06.png")}
            alt="DetailProductImage"
            priority
            data-scroll
            data-scroll-speed="4"
          />
        </div>
        <span className="absolute bg-slate-200 w-screen h-[70%] top-1/2 left-1/3 -z-[2] lg:hidden"></span>
      </div>
    </div>
  );
}

export default DKPreview;
