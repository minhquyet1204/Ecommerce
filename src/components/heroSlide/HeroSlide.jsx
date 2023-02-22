import React from "react";
import WomanImg from "../../img/woman_hero.png";
import { Link } from "react-router-dom";
const HeroSlide = () => {
  return (
    <section className=" h-[600px] lg:h-[800px] bg-hero bg-no-repeat bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>

          <h1 children className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH
          </h1>
          <span>WOMENS</span>
          <Link
            to="/"
            className="self-start font-semibold border-b-2 border-primary"
          >
            DISCOVER MORE
          </Link>
        </div>

        <div className="hidden lg:block">
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSlide;
