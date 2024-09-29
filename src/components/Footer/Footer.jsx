import React from "react";
import logo from "../../../public/images/footer_logo.png";
import location from "../../../public/images/location.png";
import envelope2 from "../../../public/images/envelope2.png";
import telephone from "../../../public/images/telephone.png";
import facebook from "../../../public/images/facebook.png";
import insta1 from "../../../public/images/insta1.png";
import insta from "../../../public/images/insta.png";
import bli1 from "../../../public/images/bli1.png";
import bli2 from "../../../public/images/bli2.png";
import bli3 from "../../../public/images/bli3.png";
import bli4 from "../../../public/images/bli4.png";
import bli5 from "../../../public/images/bli5.png";
import copyright1 from "../../../public/images/copyright1.png";
import copyright2 from "../../../public/images/copyright2.png";
import copyright3 from "../../../public/images/copyright3.png";
import copyright4 from "../../../public/images/copyright4.png";
import copyright5 from "../../../public/images/copyright5.png";
import copyright6 from "../../../public/images/copyright6.png";
import copyright7 from "../../../public/images/copyright7.png";
const Footer = () => {
  return (
    <footer className="bg-[#111A2B] mt-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-24 pt-20">
        <div>
          <img src={logo} alt="" />
          <p className="text-white mt-5">
            SpeelhuisWereld biedt veilige, duurzame speelhuizen en ongeëvenaarde
            klantenservice, perfect voor het stimuleren van kinderfantasie en
            avontuur.
          </p>
        </div>
        <div className="text-white">
          <h3 className="text-xl font-bold">Informatie</h3>
          <p className="mt-6 leading-7">
            Zoeken <br /> Veelgestelde Vragen <br /> Contact <br /> Algemene
            Voorwaarden
            <br />
            Terugbetalingsbeleid <br /> Garantie en Klachten
          </p>
        </div>
        <div className="text-white">
          <h3 className="text-xl font-bold">Klantenservice</h3>
          <p className="mt-6 leading-7">
            Algemene Voorwaarden
            <br /> Privacy Policy <br /> Ruilen en Retourneren
            <br /> Herroepingsrecht
            <br />
            Bestelling en Levering <br /> KVK: 87012154 <br /> BTW-Nummer:
            NL004138647B56
          </p>
        </div>
        <div className="text-white">
          <h3 className="text-xl font-bold">Contact</h3>
          <p className="mt-6 flex gap-1">
            <img className="w-[16px] h-[16px] mt-2" src={location} alt="" />
            <span className="leading-7">
              Tusschenstuk 37,6651 SX
              <br /> Druten (geen bezoekadres)
            </span>
          </p>
          <p className=" flex gap-1 items-center leading-7">
            <img className="w-[16px] h-[11.25px] mt-1" src={envelope2} alt="" />
            <span>info@speelhuiswereld.nl</span>
          </p>
          <p className="flex gap-1 items-center leading-7">
            <img className="w-[16px] h-[16px] mt-1" src={telephone} alt="" />
            <span>085 - 808 89 24</span>
          </p>
          <p className="md:mt-[3.875rem]">Blijf op de hoogte</p>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between mt-3 gap-10 md:gap-0">
        <div className="flex gap-2">
          <img src={facebook} alt="" />
          <img src={insta1} alt="" />
          <img src={insta} alt="" />
        </div>
        <div className="flex gap-2  mr-20">
          <img src={bli1} alt="" />
          <img src={bli2} alt="" />
          <img src={bli3} alt="" />
          <img src={bli4} alt="" />
          <img src={bli5} alt="" />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-6 mt-16">
        <p className="text-white text-center">
          Copyright &copy; 2024. All rights reserved.
        </p>
        <div className="flex justify-center flex-wrap gap-2">
          <img src={copyright1} alt="" />
          <img src={copyright2} alt="" />
          <img src={copyright3} alt="" />
          <img src={copyright4} alt="" />
          <img src={copyright5} alt="" />
          <img src={copyright6} alt="" />
          <img src={copyright7} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
