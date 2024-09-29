import React from "react";
import whyP1 from "../../../public/images/why_p_1.png";
import whyP2 from "../../../public/images/why_p_2.png";
import whyP3 from "../../../public/images/why_p_3.png";
import whyP4 from "../../../public/images/why_p_4.png";

import WhyPlayHouseCard from "../WhyPlayHouseCard/WhyPlayHouseCard";

const playHouseReasons = [
  {
    id: 1,
    title: "Maximale Veiligheid",
    description:
      "Bij SpeelhuisWereld staat veiligheid voorop. Onze speelhuizen voldoen aan de hoogste veiligheidsnorm-en, zijn gemaakt van veilige materialen en hebben een kindvriendelijk ontwerp zonder scherpe randen. Zo bieden we een zorgeloze speelervaring voor uw kind.",
    bgColor: "bg-[#FFE6E0]",
    pImg: whyP1,
  },
  {
    id: 2,
    title: "Speeltoestellen Ontwerp",
    description:
      "Onze speeltoestellen zijn met zorg ontworpen om niet alleen veilig en duurzaam te zijn, maar ook om de fantasie en fysieke vaardigheden van kinderen te stimuleren. Elk stuk speelapparatuur biedt een unieke ervaring, van avontuurlijke klimstructuren tot vrolijke schommels, gemaakt om kinderen urenlang actief en gelukkig te houden.",
    bgColor: "bg-[#BEFEFB]",
    pImg: whyP2,
  },
  {
    id: 3,
    title: "Jarenlange Ervaring",
    description:
      "Bij SpeelhuisWereld staat veiligheid voorop. Onze speelhuizen voldoen aan de hoogste veiligheidsnorm-en, zijn gemaakt van veilige materialen en hebben een kindvriendelijk ontwerp zonder scherpe randen. Zo bieden we een zorgeloze speelervaring voor uw kind.",
    bgColor: "bg-[#F4DBF2]",
    pImg: whyP3,
  },
  {
    id: 4,
    title: "Klantenservice",
    description:
      "Bij SpeelhuisWereld staat veiligheid voorop. Onze speelhuizen voldoen aan de hoogste veiligheidsnorm-en, zijn gemaakt van veilige materialen en hebben een kindvriendelijk ontwerp zonder scherpe randen. Zo bieden we een zorgeloze speelervaring voor uw kind.",
    bgColor: "bg-[#FFE6E0]",
    pImg: whyP4,
  },
];

const WhyPlayHouse = () => {
  return (
    <div className="mt-44 container mx-auto">
      <div className="flex justify-center">
        <div className="max-w-[874px]">
          <h2 className="text-center text-4xl font-bold">
            Waarom SpeelhuisWereld?
          </h2>
          <p className="mt-4 text-center">
            Bij SpeelhuisWereld staat veiligheid en fantasie centraal. We bieden
            duurzame speelhuizen die kinderfantasieën tot leven brengen,
            ondersteund door strenge veiligheidsnormen. Met een breed
            assortiment dat ieder kind aanspreekt, beloven we kwaliteit en een
            uitmuntende klantenservice. Kies voor de glimlach van uw kind; kies
            voor SpeelhuisWereld.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {playHouseReasons.map((pHouse) => (
          <WhyPlayHouseCard key={pHouse.id} pHouse={pHouse}></WhyPlayHouseCard>
        ))}
      </div>
    </div>
  );
};

export default WhyPlayHouse;
