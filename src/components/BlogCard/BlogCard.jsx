import React, { useEffect } from "react";
import calendarIcon from "../../../public/images/calendar_icon.png";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogCard = ({ blog }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { blogImg, title, description, date, hash } = blog;
  return (
    <div
      className="px-[17px] py-[20px] border border-[#CED4C6] rounded-[10px] max-w-[420px]"
      data-aos="fade-down"
    >
      <img src={blogImg} alt="" />
      <div className="h-[58px] my-5">
        <h3 className="pr-18 text-2xl font-semibold">{title}</h3>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex gap-2 w-[120px]">
          <img src={calendarIcon} alt="" />
          <p>{date}</p>
        </div>
        <div>
          <p className="font-normal">#{hash}</p>
        </div>
      </div>
      <div className="h-[6rem] mt-5">
        <p>{description}</p>
      </div>
      <button className="bg-[#FF7300] rounded-[5px] px-7 py-3 text-white mt-7">
        lees meer
      </button>
    </div>
  );
};

export default BlogCard;
