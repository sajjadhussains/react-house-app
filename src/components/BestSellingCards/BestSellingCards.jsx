import React from "react";
import product_img1 from "../../../public/images/b_sell_1.png";
import product_img2 from "../../../public/images/b_sell_2.png";
import product_img3 from "../../../public/images/b_sell_3.png";
import BestSellingCard from "./BestSellingCard";

const BestSelling = () => {
  const products = [
    {
      id: 1,
      cardImg: product_img1,
      title: "M5R Zomer Avonturen Huis",
      nums: 46,
      previous_price: `199,00`,
      present_price: `179,00`,
    },
    {
      id: 2,
      cardImg: product_img2,
      title:
        "J7 Junior Speeltoren met Gliibaan,Zandbak, Picknickbank en EnkeleSchommel",
      nums: 46,
      previous_price: `199,00`,
      present_price: `179,00`,
    },
    {
      id: 3,
      cardImg: product_img3,
      title:
        "Jb Junior Activiteitentoren metGliibaan, Zandbak en DubbeleSchommel",
      nums: 46,
      previous_price: `199,00`,
      present_price: `179,00`,
    },
    {
      id: 4,
      cardImg: product_img1,
      title: "M5R Zomer Avonturen Huis",
      nums: 46,
      previous_price: `199,00`,
      present_price: `179,00`,
    },
    {
      id: 5,
      cardImg: product_img2,
      title:
        "J7 Junior Speeltoren met Gliibaan,Zandbak, Picknickbank en EnkeleSchommel",
      nums: 46,
      previous_price: `199,00`,
      present_price: `179,00`,
    },
    {
      id: 6,
      cardImg: product_img3,
      title:
        "Jb Junior Activiteitentoren metGliibaan, Zandbak en DubbeleSchommel",
      nums: 46,
      previous_price: `199,00`,
      present_price: `179,00`,
    },
  ];
  return (
    <div className="mt-44 container mx-auto">
      <h1 className="text-center text-4xl font-bold">Best Selling</h1>
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {products.map((product) => (
          <BestSellingCard key={product.id} product={product}></BestSellingCard>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
