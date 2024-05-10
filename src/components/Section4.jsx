import React from 'react';
import p1 from '../assets/img/p1.png'

const Section4 = () => {
  return (
    <div className="w-full h-full bg-white">
      <div className="w-1/2 mx-auto max-sm:w-full">
        <h1 className="w-1/2 text-center  mx-auto text-4xl font-bold max-sm:text-lg">
          Trusted by Agencies & Store Owners
        </h1>
      </div>
      <div className=" grid grid-cols-3 gap-4 max-sm:grid-cols-1 gap-2 max-lg:grid-cols-2">
        <div className="max-sm:my-10 max-lg:my-5">
          <div className="w-28 h-28 mx-auto  -my-6">
            <img src={p1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-20 h-20 mx-10">
            <img src={p1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-20 h-20 mx-auto mt-20">
            <img src={p1} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className=" mx-auto my-20 bg-white shadow-md border-2 py-10 px-2  text-black max-sm:my-5 mx-4">
          <p className=" text-center">
            No other eCommerce platform allows people to start for free and grow
            their store as their business grows. More importantly, WooCommerce
            doesn't charge you a portion of your profits as your business grows!
          </p>
        </div>
        <div className="">
          <div className="w-20 h-20 mx-auto  -my-6">
            <img src={p1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-28 h-28 ml-72 my-10 ">
            <img src={p1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-20 h-20 mx-auto mt-20">
            <img src={p1} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
