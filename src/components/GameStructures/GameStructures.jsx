import React, { useEffect } from "react";
import game1 from "../../../public/images/game1.png";
import game2 from "../../../public/images/game2.png";
import game3 from "../../../public/images/game3.png";
import game4 from "../../../public/images/game4.png";
import sliderIcon from "../../../public/images/slider_icon.png";
import AOS from "aos";
import "aos/dist/aos.css";

const GameStructures = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="container mx-auto mt-44">
      <div className="flex justify-center">
        <div className="max-w-[570px] text-center">
          <h1 className="text-4xl font-bold">Ontdek onze speelstructuren</h1>
          <p className="mt-5 text-[#4A4949]">
            Ontdek ons ​​gevarieerde assortiment speelstructuren die zijn
            ontworpen om creativiteit en plezier te stimuleren. Kenmerken van
            onze collectie
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 ">
        <div
          className="bg-[#FFE6E0] pt-20 lg:pt-44 pb-7 px-5 rounded-[20px]"
          data-aos="fade-right"
        >
          <div className="">
            <img className="mx-auto " src={game1} alt="" />
            <div className="flex justify-between items-center w-full lg:mt-52">
              <p className="font-semibold">Speeltorens</p>
              <img src={sliderIcon} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div
            className="bg-[#9EFFFA] rounded-[20px] px-5 py-6"
            data-aos="zoom-in"
          >
            <img className="mx-auto lg:mx-12" src={game2} alt="" />
            <div className="flex justify-between items-center mt-6">
              <p className="font-semibold">Speeltorens</p>
              <img src={sliderIcon} alt="" />
            </div>
          </div>
          <div
            className="bg-[#E0E0FF] rounded-[20px] pt-16 pb-9 px-5 mt-5"
            data-aos="zoom-in"
          >
            <img className="mx-auto lg:mx-4" src={game3} alt="" />
            <div className="flex justify-between items-center mt-12">
              <p className="font-semibold">Speeltorens</p>
              <img src={sliderIcon} alt="" />
            </div>
          </div>
        </div>
        <div
          className="bg-[#EDEBEB] rounded-[20px] pt-20 lg:pt-44 pb-7 px-5"
          data-aos="fade-right"
        >
          <div className="">
            <div className="h-[268px]">
              <img className="mx-auto w-full" src={game4} alt="" />
            </div>
            <div className="flex justify-between items-center w-full lg:mt-52">
              <p className="font-semibold">Speeltorens</p>
              <img src={sliderIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStructures;
