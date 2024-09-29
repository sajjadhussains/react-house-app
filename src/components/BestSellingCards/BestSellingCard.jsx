import React, { useEffect } from "react";
import colored_star from "../../../public/images/colored_star.png";
import AOS from "aos";
import "aos/dist/aos.css";
const BestSellingCard = ({ product }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { title, cardImg, nums, previous_price, present_price } = product;

  return (
    <div
      className="max-w-[371px] border p-[12px] rounded-[10px]"
      data-aos="fade-down"
      data-aos-easing="linear"
    >
      <img src={cardImg} alt="" />
      <h3 className="text-base font-semibold mt-8 h-10">{title}</h3>
      <div className="flex items-center mt-5 gap-1">
        <img src={colored_star} alt="" />
        <img src={colored_star} alt="" />
        <img src={colored_star} alt="" />
        <img src={colored_star} alt="" />
        <img src={colored_star} alt="" />
        <span>{nums} beoordelingen</span>
      </div>
      <p className="text-lg mt-4">
        <span className="mr-1 text-[#8B8E99] line-through">
          {previous_price}
        </span>
        <span className="font-bold">{present_price}</span>
        <button className="py-3 pr-[17px] pl-[10px] bg-[#F3EED9] rounded-[5px] mt-5 mb-4">
          Bestel vóór 22u, morgen in huis.
        </button>
      </p>
    </div>
  );
};

export default BestSellingCard;
