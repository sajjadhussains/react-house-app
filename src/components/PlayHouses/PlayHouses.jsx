import React, { useEffect } from "react";
import playHouse from "../../../public/images/play_houses.png";
import playHouse1 from "../../../public/images/play_house_1_icon.png";
import playHouse2 from "../../../public/images/play_house_2_icon.png";
import playHouse3 from "../../../public/images/play_house_3_icon.png";
import AOS from "aos";
import "aos/dist/aos.css";
const PlayHouses = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-[#f8dfd8] mt-44">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:gap-40">
          <div
            className="ml-5 lg:w-[41%] pb-5 lg:py-36 text-left pr-8"
            data-aos="fade-right"
          >
            <h3 className="text-4xl font-bold">
              Speelhuizen voor Kinderen. Creëer een Fantastische Speelomgeving
            </h3>
            <p className="mt-10 text-lg">
              Maak van uw tuin een speelparadijs volgens de laatste trends of
              geef uw tuin een nieuwe look.
            </p>
            <div className="w-full flex mt-6">
              <img className="mr-4" src={playHouse1} alt="" />
              <div>
                <h5 className="text-xl font-semibold">Gratis Verzending</h5>
                <p className="text-lg">
                  Alle bestellingen worden GRATIS verstuurd.
                </p>
              </div>
            </div>
            <div className="flex mt-6">
              <img className="mr-4" src={playHouse2} alt="" />
              <div>
                <h5 className="text-xl font-semibold">Gratis Verzending</h5>
                <p className="text-lg">
                  Alle bestellingen worden GRATIS verstuurd.
                </p>
              </div>
            </div>
            <div className="flex mt-6">
              <img className="mr-4" src={playHouse3} alt="" />
              <div>
                <h5 className="text-xl font-semibold">Gratis Verzending</h5>
                <p className="text-lg">
                  Alle bestellingen worden GRATIS verstuurd.
                </p>
              </div>
            </div>
          </div>
          <div
            className="lg:w-[45%] lg:flex lg:items-center"
            data-aos="fade-left"
          >
            <img src={playHouse} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayHouses;
