import React from 'react';
import bg from '../assets/img/bg.png';
// import bg3 from '../assets/img/bg-p3.png'
import bg1 from '../assets/img/bg1.png'
import bgp1 from '../assets/img/bg-p1.png'
import bg2 from '../assets/img/bg2.png'
import bg3 from '../assets/img/bg3.png'
import bgp2 from '../assets/img/bg-p2.png'
import bgp3 from '../assets/img/bg-p3.png'

const Section1 = () => {
  return (
    <div className="bg-blue-50 w-full  pb-28 max-sm:w-full    max-sm:overflow-x-hidden  ">
      <div className="flex justify-center items-center max-sm:flex-col max-md:flex-col  justify-center items-center max-lg:flex-col max-md:overflow-x-hidden">
        <div className="flex-1 mx-44  max-sm:mx-6 max-md:pt-20  max-md:mx-20 max-lg:pt-5 max-lg:pb-20">
          <h1 className="heading">
            Building exactly the eCommerce website you want.
          </h1>
          <p className="text-md mt-5 ">
            WooCommerce is a customizable, open-source eCommerce platform built
            on WordPress. Get started quickly and make your way.
          </p>
          <div className="mt-5">
            <button className="btn">Start a New Store</button>or
            <button className="pl-2  text-blue-400  text-md font-medium">
              {" "}
              Customize & Extend >
            </button>
          </div>
        </div>
        <div className="flex-1 ">
          <div className="bg-img relative top-0  ">
            <div className="relative top-32  bottom-0 -right-72 ">
              <img
                src={bg1}
                alt="bg"
                className="relative  -left-2  max-sm:-left-40 max-md:-left-5  
                max-lg:-left-2 max-h-80 "
              />
            </div>
            <div className="relative top-5 right-20">
              <img src={bg2} alt="bg" className=" relative -top-40 " />
            </div>
            <div className=" relative -right-60  -top-96  -bottom-20">
              <img
                src={bg3}
                alt="bg"
                className="relative -top-2 right-20  bottom-20  max-h-80 "
              />
            </div>
            <div className="absolute  w-[400px]  ">
              <img
                src={bgp1}
                alt="bg-p1"
                className="relative -top-[600px] -bottom-20 -right-2    max-sm:w-[250px]"
              />
              <img
                src={bgp2}
                alt="bg-p1"
                className="relative -top-[870px] -bottom-20 -right-0 -left-20  w-[200px]  
                max-sm:-top[300px]"
              />

              <img
                src={bgp3}
                alt="bg-p1"
                className="relative -top-[800px]   -bottom-20 right-60 left-5
                 w-[200px] bg-white shadow-md rounded "
              />
              <button
                className="absolute -top-[610px] right-44 bg-lime-500 text-white px-6 py-2 
              rounded-full leading-loose leading-tight text-md tracking-widest"
              >
                SALE
              </button>
              <button
                className="absolute -top-[440px] right-96  bg-yellow-500 text-white px-3 py-3 
              rounded-full  leading-tight text-md tracking-widest  max-sm:right-96 max-sm:-top-[510px]"
              >
                <i class="fa-solid fa-cart-shopping"></i>
            
              </button>
              <button
                className="absolute -top-[450px] left-52  bg-red-500 text-white px-6 py-3 
              rounded-full  leading-tight text-md tracking-widest"
              >
               
                <i class="fa-solid fa-shield"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
