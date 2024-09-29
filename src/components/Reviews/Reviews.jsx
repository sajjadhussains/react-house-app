import React, { useEffect } from "react";
import star from "../../../public/images/colored_star.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Reviews = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="container mx-auto mt-44">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div>
          <div
            className="border border-[#CECECE] rounded-[20px] p-7"
            data-aos="fade-down"
          >
            <h3 className="text-xl font-bold">Absoluut Schattig en Veilig!</h3>
            <p className="text-[#484848] font-medium mt-[10px]">
              We hebben het speelhuisje gekocht voor onze 2-jarige dochter, en
              ze vindt het geweldig! De kleuren zijn helder, en het materiaal
              voelt stevig en veilig aan. De montage was eenvoudig, en het is
              precies de juiste grootte voor zowel binnen- als buitenspelen. Ik
              vind het geweldig dat het haar fantasie stimuleert en haar
              urenlang vermaakt. Ik beveel dit ten zeerste aan voor elke ouder
              die op zoek is naar een leuk en veilig speelgoed voor hun
              kleintje!"
            </p>
            <div className="flex justify-between items-center mt-7">
              <div>
                <h5 className="font-semibold">Leslie Alexander</h5>
                <button className="px-[14px] py-[10px] bg-[#CEE1D4] rounded-[15px] text-black mt-2">
                  geverifieerd
                </button>
              </div>
              <div className="flex gap-2">
                <img className="w-[14px] h-[15px]" src={star} alt="" />
                <img className="w-[14px] h-[15px]" src={star} alt="" />
                <img className="w-[14px] h-[15px]" src={star} alt="" />
                <img className="w-[14px] h-[15px]" src={star} alt="" />
                <img className="w-[14px] h-[15px]" src={star} alt="" />
              </div>
            </div>
          </div>
          <div
            className="border border-[#CECECE] rounded-[20px] p-7 mt-5"
            data-aos="fade-down"
          >
            <h3 className="text-xl font-bold">Absoluut Schattig en Veilig!</h3>
            <p className="text-[#484848] font-medium mt-[10px]">
              "Onze peuter is niet meer gestopt met spelen sinds we het
              speelhuisje hebben opgezet. Het is precies de juiste grootte, en
              het ontwerp is super schattig. Het plastic is duurzaam, en de
              deuren en ramen gaan soepel open en dicht, wat een groot pluspunt
              is voor kleine handjes. Het is een plezier om te zien hoe de
              creativiteit van ons kind zich ontwikkelt terwijl ze doen alsof ze
              koken, schoonmaken en kleine theekransjes houden in hun nieuwe
              favoriete speelgoed."
            </p>
            <div className="flex justify-between mt-7">
              <div>
                <h5 className="font-semibold">Leslie Alexander</h5>
                <button className="px-[14px] py-[10px] bg-[#CEE1D4] rounded-[15px] text-black mt-2">
                  geverifieerd
                </button>
              </div>
              <div className="flex gap-2 items-center">
                <img className="w-[14px] h-[15px]" src={star} alt="" />
                <img className="w-[14px] h-[15px]" src={star} alt="" />
                <img className="w-[14px] h-[15px]" src={star} alt="" />
                <img className="w-[14px] h-[15px]" src={star} alt="" />
                <img className="w-[14px] h-[15px]" src={star} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-center my-10 lg:my-0"
          data-aos="zoom-in"
        >
          <div>
            <h2 className="text-4xl font-bold">Klanten-reviews</h2>
            <p className="flex gap-2 items-center mt-7">
              <img className="w-[14px] h-[15px]" src={star} alt="" />
              <img className="w-[14px] h-[15px]" src={star} alt="" />
              <img className="w-[14px] h-[15px]" src={star} alt="" />
              <img className="w-[14px] h-[15px]" src={star} alt="" />
              <img className="w-[14px] h-[15px]" src={star} alt="" />
              <span>4.85 van de 5</span>
            </p>
            <p className="mt-2">Gebaseerd op 100 beoordelingen</p>
            <div className="text-center mt-7">
              <button className="text-white px-[22px] py-5 bg-[#FF7300] rounded-[5px]">
                Schrijf een recensie
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className="border border-[#CECECE] rounded-[20px] p-7"
            data-aos="fade-down"
          >
            <h3 className="text-xl font-bold">Absoluut Schattig en Veilig!</h3>
            <p className="text-[#484848] font-medium mt-[10px]">
              "Het speelhuisje is geweldig als het eenmaal in elkaar staat, en
              onze kinderen vinden het fantastisch. De montage duurde echter
              langer dan verwacht. Sommige onderdelen pasten niet perfect, en we
              moesten extra gereedschap gebruiken om alles goed vast te krijgen.
              Dat gezegd hebbende, het is nu erg stevig en onze kinderen hebben
              veel plezier met spelen. Ik zou het nog steeds aanbevelen, maar
              wees voorbereid op een beetje uitdaging tijdens het opzetten."
            </p>
            <div className="flex justify-between mt-7">
              <div>
                <h5 className="font-semibold">Leslie Alexander</h5>
                <button className="px-[14px] py-[10px] bg-[#CEE1D4] rounded-[15px] text-black mt-2">
                  geverifieerd
                </button>
              </div>
              <div className="flex gap-2">
                <img className="w-[14px] h-[15px]" src={star} alt="" />
                <img className="w-[14px] h-[15px]" src={star} alt="" />
                <img className="w-[14px] h-[15px]" src={star} alt="" />
                <img className="w-[14px] h-[15px]" src={star} alt="" />
                <img className="w-[14px] h-[15px]" src={star} alt="" />
              </div>
            </div>
          </div>
          <div
            className="border border-[#CECECE] rounded-[20px] p-7 mt-5"
            data-aos="fade-down"
          >
            <h3 className="text-xl font-bold">Absoluut Schattig en Veilig!</h3>
            <p className="text-[#484848] font-medium mt-[10px]">
              "Dit speelhuisje overtrof onze verwachtingen. Het is ongelooflijk
              schattig en precies de juiste grootte voor onze kleine achtertuin.
              Onze 3-jarige brengt uren door in het huisje en doet alsof het
              haar eigen kleine huis is. De details zijn charmant en de
              kwaliteit is uitstekend. Het is aan de prijzige kant, maar gezien
              het feit dat we er al zoveel plezier van hebben gehad, is het elke
              cent waard."
            </p>
            <div className="flex justify-between mt-7">
              <div>
                <h5 className="font-semibold">Leslie Alexander</h5>
                <button className="px-[14px] py-[10px] bg-[#CEE1D4] rounded-[15px] text-black mt-2">
                  geverifieerd
                </button>
              </div>
              <div className="flex gap-2">
                <img className="w-[14px] h-[15px]" src={star} alt="" />
                <img className="w-[14px] h-[15px]" src={star} alt="" />
                <img className="w-[14px] h-[15px]" src={star} alt="" />
                <img className="w-[14px] h-[15px]" src={star} alt="" />
                <img className="w-[14px] h-[15px]" src={star} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
