import React from "react";
import ratting from "../../../public/images/ratting.png";
import star from "../../../public/images/star.png";
import envelope from "../../../public/images/envelope.png";
const TopBar = () => {
  return (
    <div className="bg-[#E9BB47] flex justify-center py-4">
      <div className="flex items-center gap-12">
        <div className="flex gap-1">
          <img src={ratting} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
        <div className="flex items-center gap-1">
          <img src={envelope} alt="" />
          <p className="text-white">info@speelhuiswereld.nl</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
