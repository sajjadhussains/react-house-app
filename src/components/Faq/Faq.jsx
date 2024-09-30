import React, { useEffect, useState } from "react";
import "./Faq.css";
import arrow from "../../../public/images/arrow_icon.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const accordionData = [
    {
      title: "Is het speelhuisje geschikt voor zowel binnen- als buitenspel?",
      content:
        "This is the content for accordion 1. It expands and collapses when clicking on the header.",
    },
    {
      title: "Hoe moeilijk is het om het speelhuisje in elkaar te zetten?",
      content:
        "This is the content for accordion 2. Like the first accordion, it toggles when clicked.",
    },
    {
      title: "Van welk materiaal is het speelhuisje gemaakt?",
      content:
        "This is the content for accordion 3. It expands and collapses when clicking on the header.",
    },
    {
      title: "Voor welke leeftijdsgroep is het speelhuisje geschikt?",
      content:
        "This is the content for accordion 4. It expands and collapses when clicking on the header.",
    },
    {
      title: "Zijn er reserveonderdelen beschikbaar als iets kapot gaat?",
      content:
        "This is the content for accordion 5. It expands and collapses when clicking on the header.",
    },
    {
      title: "Hoe kan ik het speelhuisje schoonmaken?",
      content:
        "This is the content for accordion 6. It expands and collapses when clicking on the header.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="mt-44 bg-[#BEE2F7]">
      <div className="container mx-auto py-36">
        <h2 className="text-center text-5xl">Veelgestelde vragen</h2>
        <div className="flex flex-col lg:flex lg:flex-row lg:justify-between gap-10  mt-20">
          <div className="w-full lg:w-1/2 pr-11 mt-10" data-aos="fade-down">
            <h5 className="text-xl font-semibold">
              Your questions, our answers
            </h5>
            <p className="mt-8">
              Here are our most frequently asked questions. If you still have
              questions feel free to contact us, someone from our expert team
              will get back to you shortly.
            </p>
            <button className="bg-[#FF7300] rounded-[5px] p-5 mt-[3.375rem] text-white">
              Contact Us
            </button>
          </div>
          {/* accordion part */}
          <div className="w-full lg:1/2" data-aos="fade-down">
            {accordionData.map((item, index) => (
              <div key={index} className="border-b  border-b-[#BBB7B7]  mb-2">
                <div
                  className="flex justify-between items-center pt-9 pb-6 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-xl font-medium text-left">
                    {item.title}
                  </span>
                  <span
                    className={`icon  transition-transform duration-500 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <img className="text-right" src={arrow} alt="arrow" />
                  </span>
                </div>
                <div
                  className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-4 text-gray-600">
                    <p className="text-lg">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
