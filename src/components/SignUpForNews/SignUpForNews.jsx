import React, { useEffect } from "react";
import newsLetter from "../../../public/images/newsLetter.png";
import AOS from "aos";
import "aos/dist/aos.css";
const SignUpForNews = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="container mx-auto mt-20 bg-[#BEE2F7] rounded-[20px]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:pl-12 lg:pr-18">
        <div
          className="w-full lg:w-1/2 mt-28 lg:mb-10 xl:mb-0"
          data-aos="fade-right"
        >
          <h2 className="text-[3.5rem] font-bold">
            Meld u aan voor onze nieuwsbrief.
          </h2>
          <p>
            Ontvang de beste aanbiedingen. Meld u aan voor onze nieuwsbrief.
          </p>
          <div className="relative w-full max-w-md mt-7">
            <input
              type="text"
              placeholder="E-mailadres"
              className="w-full h-[66px] px-4 py-2 pr-16 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#FF7300] text-white px-[28px] py-[15px] rounded-md">
              Subscribe
            </button>
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 flex justify-end my-16 mr-[77px]"
          data-aos="fade-left"
        >
          <img className="w-full" src={newsLetter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUpForNews;
