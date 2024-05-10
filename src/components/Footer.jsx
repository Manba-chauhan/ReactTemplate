import React from 'react';
import footer from '../assets/img/footer.png';
const Footer = () => {
  return (
    <div className="bg-white p-4">
      <div className="flex justify-center ">
        <div className="flex justify-between items-center space-x-40 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-5">
          <div className="flex space-x-10">
            <span>
              <i class="fa-brands fa-twitter"></i>
            </span>
            <span>
              <i class="fa-brands fa-facebook"></i>
            </span>
            <span>
              <i class="fa-solid fa-wifi"></i>
            </span>
            <span>
              <i class="fa-brands fa-instagram"></i>
            </span>
          </div>
          <div className="">
            <p className="text-black text-sm font-medium max-sm:text-[12px]">
              COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS PRIVACY POLICY
            </p>
          </div>
          <div className="">
            <img src={footer} alt="footer" className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
