import React from "react";
import ph_logo from "../../../public/images/ph_logo.png";
import ph_insta from "../../../public/images/ph_insta.png";
import img1 from "../../../public/images/img1.png";
import img2 from "../../../public/images/img_2.png";
import img3 from "../../../public/images/img_3.png";
import Marquee from "react-fast-marquee";
const PlayHouseImg = () => {
  return (
    <div className="mt-44">
      <div className="flex justify-center">
        <div className="w-[154px] flex gap-3">
          <img src={ph_insta} alt="" />
          <img src={ph_logo} alt="" />
        </div>
      </div>
      <p className="text-center text-[#8B8E99] mt-4">#Speelhuiswereld</p>
      <div className="mt-7">
        <Marquee speed={20} gradient={false}>
          <img className="mr-5" src={img1} alt="" />
          <img className="mr-5" src={img2} alt="" />
          <img className="mr-5" src={img3} alt="" />
          <img className="mr-5" src={img3} alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default PlayHouseImg;
