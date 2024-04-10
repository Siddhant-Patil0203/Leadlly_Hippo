import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const NavItems = [
  {
    title: "Solution",
    dropdown: true,
  },
  {
    title: "Develop",
    dropdown: true,
  },
  {
    title: "Examples",
    dropdown: false,
  },
  {
    title: "Pricing",
    dropdown: false,
  },
  {
    title: "Resources",
    dropdown: true,
  },
];

const Navbar = () => {
  return (
    <div className="py-[17px]">
      <div className="flex justify-between w-full xl:px-[140px] px-[15px] items-center">
        <div className="pr-[15px] block cursor-pointer ">
          <img
            src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.settings/521c4d7548c284890e000001/594a155440e9fb9e592f2ba9-240x240.png"
            style={{ height: "55px" }}
          />
        </div>
        <div className="items-center hidden gap-8 lg:flex">
          {NavItems.map((item, index) => {
            return (
              <div key={index} className="flex items-center">
                <p className="text-[17px] font-sans navDropdown relative cursor-pointer">
                  {item.title}
                </p>
                {item.dropdown && <RiArrowDropDownLine />}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3 justify-normal">
          <button className="text-[14px] rounded-3xl bg-[#7db434] text-white py-[3px] px-[30px] border-2 border-[#7db434] hover:bg-white hover:text-[#7db434] hidden lg:flex">
            CONTACT US
          </button>
          <div className="flex items-center gap-3 cursor-pointer ">
            <div className="text-[14px] lg:hidden">MENU</div>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
