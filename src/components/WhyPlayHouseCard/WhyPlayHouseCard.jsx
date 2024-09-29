import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const WhyPlayHouseCard = ({ pHouse }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { id, title, description, bgColor, pImg } = pHouse;
  console.log(pHouse);
  return (
    <div
      className={`flex pl-6 pr-12 ${bgColor} gap-6 items-center py-20 rounded-[20px]`}
      data-aos="fade-down"
    >
      <div className="w-[500px]">
        <img className="" src={pImg} alt="" />
      </div>
      <div>
        <h3 className="text-2xl font-bold">
          {id}.{title}
        </h3>
        <p className="text-[#484848] mt-6">{description}</p>
      </div>
    </div>
  );
};

export default WhyPlayHouseCard;
