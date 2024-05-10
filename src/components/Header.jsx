import React from 'react';
import Logo from '../assets/img/LOGO.png';

const Header = () => {
  return (
    <div className="bg-blue-100 flex justify-between items-center pl-10 pr-10 h-16 w-full">
      <div className="flex  space-x-16 pr-10">
        <div className="logo">
          <img src={Logo} alt="logo" className="w-[150px] " />
        </div>
        <div className="max-sm:hidden max-md:hidden max-lg:hidden">
          <ul className="flex  space-x-10">
            <li className=" font-medium cursor-pointer hover:text-blue-500">
              Sell
            </li>
            <li className=" font-medium cursor-pointer hover:text-blue-500">
              MarketPlace
            </li>
            <li className=" font-medium cursor-pointer hover:text-blue-500">
              Community
            </li>
            <li className=" font-medium cursor-pointer hover:text-blue-500">
              Develop
            </li>
            <li className=" font-medium cursor-pointer hover:text-blue-500">
              Resources
            </li>
          </ul>
        </div>
      </div>
      <div className="max-sm:hidden ">
        <div className="flex space-x-6 items-center">
          <button className="text-black  text-lg">Login</button>
          <button className="px-4 py-2 bg-violet-500 rounded-lg text-white max-lg:text-nowrap">
            Get Started
          </button>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className=" md:hidden  lg:hidden  ">
        <i class="fa-solid fa-bars text-2xl"></i>
      </div>
    </div>
  );
}

export default Header;
