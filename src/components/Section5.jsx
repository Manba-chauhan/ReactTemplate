import React from 'react';
import right from '../assets/img/right.png'
import left from '../assets/img/left.png'
import center from '../assets/img/center.png'

const Section5 = () => {
  return (
    <div>
      <div className=" bg-white flex flex-col justify-center items-center mt-10">
        <div className="w-1/2 text-center mb-10 max-sm:w-full">
          <h1 className="text-4xl font-bold">Supported by real people</h1>
          <p className="w-9/12 mx-auto text-md font-normal text-gray-500 mt-4 ">
            Our team of Happiness Engineers works remotely from 58 countries
            providing customer support across multiple time zones.
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <div className="relative top-20 left-20 max-sm:left-1  max-sm:top-10">
            <span className="px-5 py-2 border-4 border-yellow-500 rounded-full relative -top-12 ">
              {" "}
            </span>
            <span className="px-3  border-4 border-yellow-500 rounded-full relative  left-2 ">
              {" "}
            </span>

            <img src={left} alt="" className="" />
          </div>
          <div className="relative  left-16 z-50 bg-white max-sm:left-2">
            <img src={center} alt="" className="" />
          </div>
          <div className="relative top-20 -left-20 max-sm:top-8 max-sm:-left-10">
            <span className="px-3  border-4 border-yellow-500 rounded-full relative 
             -right-40  -top-10 z-50 max-sm:-right-12 max-sm:-top-2">
              {" "}
            </span>
            <img src={right} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
