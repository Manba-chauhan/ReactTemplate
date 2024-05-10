import React from 'react';
import logo from '../assets/img/LOGO.png';

const Section7 = () => {
  return (
    <div className="bg-violet-500 text-white p-10">
      <div className=" flex  flex-col items-center justify-center space-y-20">
        <div className="flex justify-center items-center space-x-16  max-sm:flex-col  max-sm:space-x-0  max-sm:space-y-5">
          <div className="flex space-x-2">
            <div className="">
              <i class="fa-regular fa-circle-check"></i>
            </div>
            <div className="">
              <h3>30 day money back guarantee</h3>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="">
              <i class="fa-solid fa-universal-access"></i>
            </div>
            <div className="">
              <h3>30 day money back guarantee</h3>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="">
              <i class="fa-solid fa-lock"></i>
            </div>
            <div className="">
              <h3>30 day money back guarantee</h3>
            </div>
          </div>
        </div>
        <div className=" flex  flex-col justify-center items-center ">
          <div className="">
            <img src={logo} alt="logo" className="text-white" />
          </div>
          <span className="text-white px-96  border-b-2  max-sm:px-40 max-md:px-32"></span>
          <div className="pt-10">
            <div className="grid grid-cols-5 gap-16  max-sm:grid-cols-1 gap-4 max-md:grid-cols-2">
              <div className="">
                <h3 className="text-lg font-medium">Who we Are</h3>
                <ul className="text-sm  font-normal">
                  <li>About </li>
                  <li>Team Work</li>
                  <li>With Us</li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-lg font-medium">Woocommerce</h3>

                <ul className="text-sm  font-normal">
                  <li>Features </li>
                  <li>Payments</li>
                  <li>Marketing</li>
                  <li>Shipping</li>
                  <li>Extension Store</li>
                  <li>eCommerce blog</li>
                  <li>Development blog </li>
                  <li>Ideas board</li>
                  <li>Mobile App</li>
                  <li>Community </li>
                  <li>Style Guide</li>
                  <li>Email Newsletter</li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-lg font-medium">Other products</h3>

                <ul className="text-sm  font-normal">
                  <li>Storefront </li>
                  <li>WooSlider</li>
                  <li>Sensei</li>
                  <li>Sensei Extensions</li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-lg font-medium">Support</h3>

                <ul className="text-sm  font-normal">
                  <li>Documentation </li>
                  <li>Customizations</li>
                  <li>Support Policy</li>
                  <li>Contact </li>
                  <li> COVID-19 Resources</li>
                  <li>Privacy Notice for</li>
                  <li>California Users</li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-lg font-medium">Who we Are</h3>

                <ul className="text-sm  font-normal">
                  <li>About </li>
                  <li>Team Work</li>
                  <li>With Us</li>
                  <li>About </li>
                  <li>Team Work</li>
                  <li>With Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
