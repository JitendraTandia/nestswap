import React from "react";
import Logo from "../assets/nestswap.png";

const Header = () => {
  return (
    <div className="bg-[url(./bg.webp)]">
    <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
      <img className="w-40" src={Logo} alt="logo" />
      <div className=" font-[Garet-normal]  flex items-center gap-10 list-none font-semibold text-lg">
        <li>Home</li>
        <li>Features</li>
        <li>Reviews</li>
        <li>Pricing</li>
        <li>Faqs</li>
        <li>Components</li>
      </div>
      <button className="px-6 py-3 font-[Garet-normal] bg-[#5872ED] rounded-xl font-semibold text-white">Get Started</button>
    </nav>
    </div>
  );
};

export default Header;
