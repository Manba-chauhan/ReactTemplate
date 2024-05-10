import React from 'react';

const Section6 = () => {
  return (
    <div className="bg-blue-600 relative p-12 bg-violet-600">
      <div className=" w-8/12 mx-auto   flex justify-center items-center 
      space-x-6 text-white  max-md:w-full max-md:flex-col space-y-6 max-lg:w-full">
        <div className="">
          <p className="text-2xl font-medium">
            WooCommerce - the most customizable eCommerce platform for building
            your online business.
          </p>
        </div>
        <div className="">
          <button className="border-2 px-10 py-2  text-white rounded-full text-nowrap">
            {" "}
            Get Started{" "}
          </button>
          <span className="px-6 py-3  border-4 border-yellow-500 rounded-full relative  
          left-20 top-20 z-50 max-lg:left-2 ">
            {" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Section6;
