import React from 'react';
import Card from './Card';
import c1 from "../assets/img/c1.png";
import c2 from "../assets/img/c2.png";
import c3 from "../assets/img/c3.png";
import c4 from "../assets/img/c4.png";
import c5 from "../assets/img/c5.png";
import c6 from "../assets/img/c6.png";
import c7 from "../assets/img/c7.png";
import c8 from "../assets/img/c8.png";
import c9 from "../assets/img/c9.png";
import c10 from "../assets/img/c10.png";
import c11 from "../assets/img/c11.png";
import c12 from "../assets/img/c12.png";
import c13 from "../assets/img/c13.png";

const Section2 = () => {
  return (
    <div className=" bg-white max-md:mt-2 ">
      <div className="flex flex-col ">
        <div className="relative -top-20 ">
          <h2 className="text-3xl text-center  w-8/12  mx-auto font-semibold text-slate-500 max-sm:text-2xl max-sm:my-20">
            Your eCommerce made simple
          </h2>
        </div>
        <div className="relative -top-20 w-11/12">
          <div className="flex  items-center max-md:flex-col max-lg:flex-col ">
            <div className="relative max-lg:top-10">
              <img
                src={c5}
                alt="card"
                className="relative  top-12   left-4 z-50 w-12 max-lg:top-10  max-sm:-left-3"
              />
              <Card
                src={c1}
                heading="All You Need to Start"
                text="Add WooCommerce plugin to any WordPress site and set up a new store in minutes."
                link="Ecommerce for Wordpress ›"
                className="relative -top-10 "
              />
              <img
                src={c4}
                alt="card"
                className="relative  -top-96 -left-4 w-44  max-lg:-top-[500px] max-sm:-left-10 max-sm:-top-[480px]"
              />
            </div>
            <div className="relative -top-80 max-lg:-top-[600px]">
              <img
                src={c6}
                alt="card"
                className="relative  top-[500px]  bottom-0 left-10  w-28 z-50"
              />
              <img
                src={c7}
                alt="card"
                className="relative  top-[430px] left-60  w-28 z-50 "
              />
              <img
                src={c8}
                alt="card"
                className="relative  top-96 left-12  w-28 z-50 "
              />
              <img
                src={c10}
                alt="card"
                className="relative  top-80 left-60  w-28 z-50 "
              />
              <img
                src={c9}
                alt="card"
                className="relative  top-80 left-40  w-28 z-50 "
              />
              <Card
                src={c2}
                heading="Customize and Extend"
                text="From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable."
                link="Browse Extensions ›"
                className="relative top-10"
              />
            </div>
            <div className="relative -top-40 max-lg:-top-[900px]">
              <img
                src={c11}
                alt="card"
                className="relative  top-[480px]   left-5  w-44 z-50"
              />
              <img
                src={c12}
                alt="card"
                className="relative  top-[250px]   left-44  w-44 z-50"
              />
              <img
                src={c13}
                alt="card"
                className="relative  top-[350px]   left-60  w-44 z-50"
              />
              <Card
                src={c3}
                heading="Active Community"
                text="WooCommerce is one of the fastest-growing eCommerce communities. "
                link="Check our Forums ›"
                className="relative top-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
