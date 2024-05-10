import React from 'react';
import s4 from '../assets/img/s4.png'
import photo2 from '../assets/img/photo2.png'
import photo1 from '../assets/img/photo1.png'
import hoto3 from '../assets/img/hoto3.png'
const Section3 = () => {
  return (
    <div className="">
      <div className="">
        <div className="absolute">
          <img src={s4} alt="absolute" className=" " />
        </div>
        <img
          src={photo2}
          alt=""
          className="relative top-80   left-40  h-[400px] z-50 max-md:top-20  
          max-md:h-[200px] max-sm:top-4"
        />

        <span
          className="relative -top-20 left-20 border-2 border-red-400 
         rounded-full  p-24 max-md:p-16 max-md:-top-12 left-20"
        ></span>
        <span
          className="relative -top-80 -left-20 border-4 border-red-400 z-50 
         px-6 py-4 rounded-full max-md:-top-40"
        ></span>
        <div className="flex relative  w-full ">
          <div className="flex max-sm:flex-col justify-center">
            <div className=" relative -top-40 ">
              <img
                src={hoto3}
                alt=""
                className="relative  -top-96  w-full h-[600px] object-cover  
                max-md:-top-28 left-20 max-md:h-60 w-44  z-50 max-lg:h-[400px] max-sm:"
              />
            </div>
            <div
              className=" w-2/5 absolute  -top-80  right-40  
            max-md:px-1 max-md:-top-52  max-md:right-20 max-md:px-0
            max-sm:w-3/5 "
            >
              <h2 className="text-4xl text-white font-bold w-3/5 line-clamp-10 pb-2 max-md:text-xl">
                Develop Without Limits
              </h2>
              <p className="text-white text-md max-md:text-sm">
                WooCommerce is developer friendly, too. Built with a REST API,
                WooCommerce is scalable and can integrate with virtually any
                service. Design a complex store from scratch, extend a store for
                a client, or simply add a single product to a WordPress
                site—your store, your way.
              </p>
              <div className="absolute left-2 top-60">
                <button
                  className=" bg-lime-500 text-white px-6 py-4 
              rounded-full  leading-tight text-md tracking-wide max-md:left-10"
                >
                  Read the Documentation
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="absolute  top-6  left-[400px] w-2/6 left-[380px]">
              <h2 className="text-4xl text-white font-bold w-3/5 line-clamp-10 pb-2">
                Develop Without Limits
              </h2>
              <p className="text-white text-md">
                WooCommerce is developer friendly, too. Built with a REST API,
                WooCommerce is scalable and can integrate with virtually any
                service. Design a complex store from scratch, extend a store for
                a client, or simply add a single product to a WordPress
                site—your store, your way.
              </p>
              <button
                className="absolute top-60 bg-lime-500 text-white px-6 py-2 
              rounded-full  leading-tight text-md tracking-wide max-md:left-8"
              >
                Read the Documentation
              </button>
            </div>
            <div className="relative -top-16 -right-96 ">
              <img src={photo1} alt="" className=" w-96 relative z-50 " />
              <span className="absolute -top-10 right-0 border-4 border-red-400
                w-[150px] h-[150px] rounded-full "></span>
              <span className="absolute top-0 right-60 border-4 border-red-400  w-[50px] h-[50px] rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex"></div>
      </div>
    </div>
  );
}

export default Section3;
