import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="flex items-center justify-center mx-5 gap-50">
      <div className="mb-10 text-center lg:text-left bg-home-text">
        <div className="m-2 lg:m-0 font-[700] text-2xl lg:text-5xl lg:leading-[58px] font-sans">
          Leading Enterprise <br className="hidden lg:block" /> Ecommerce
          Platform in India
        </div>
        <div className="flex flex-col gap-2 my-4 text-lg font-bold lg:text-2xl lg:flex-row">
          Build whitelabelled{" "}
          <div className="text-[#7db434] text-[700]">
            <Typewriter
              options={{
                strings: [
                  "B2C Marketplaces",
                  "B2B2C Marketplaces",
                  "Hyperlocal Marketplaces",
                  "Multi Country Marketplaces",
                  "Multi Brand Marketplaces",
                  "Multilingual Marketplaces",
                  "Vertical Marketplaces",
                  "Horizontal Marketplaces",
                ],

                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="my-4 text-lg">
          Designed for diverse B2B and B2C business models
        </div>
        <div className="">
          <button className="text-[16px] rounded-3xl bg-[#7db434] text-white py-[3px] px-[30px] my-4 border-2 border-[#7db434] hover:bg-white hover:text-[#7db434]">
            SCHEDULE A DEMO
          </button>
        </div>
      </div>
      <div className="hidden mr-20 lg:block">
        <img
          src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/657809dbbcebf27febe432cc/ecommerce-banner.png"
          alt="new-home-banner"
          style={{ maxHeight: "553px" }}
        ></img>
      </div>
    </div>
  );
};

export default Hero;
