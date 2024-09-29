import React, { useEffect } from "react";
import play_ground from "../../../public/images/play_ground.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-[#584592]">
      <div className="flex">
        <div className="w-full flex items-center justify-center lg:w-1/2 xl:justify-start mr-12">
          <div className="xl:w-[672px] mx-auto" data-aos="fade-right">
            <h1 className="text-[2rem] sm:text-[3.313rem] text-white text-center leading-3.677 font-semibold lg:text-start mt-10 lg:mt-0 ml-0 lg:ml-8 xl:ml-0">
              Dé speelhuizen specialist van Nederland en Belgie
            </h1>
            <div className="flex justify-center pb-5 mt-10 lg:justify-start ml-0 lg:ml-8 xl:ml-0">
              <button className="px-9 py-5 bg-[#FF7300] rounded-[2.5rem] text-white">
                Ga naar de shop
              </button>
            </div>
          </div>
        </div>
        <div className="w-[0px] lg:w-1/2 lg:block" data-aos="fade-left">
          <img className="w-full" src={play_ground} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
