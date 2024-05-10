import React from 'react';
import c1  from '../assets/img/c1.png'

const Card = (props) => {
  return (
    <div className={props.className}>
      <div className="flex flex-col  ">
        <div className="">
          <img src={props.src} alt="card" className='w-full h-full object-cover' />
        </div>
        <div className="pl-12 pr-10">
          <h1 className='-mt-10 mb-4 text-2xl font-semibold'>{props.heading}</h1>
          <p className='text-sm mb-4 text-gray-500 font-normal'>
           
            {props.text}
          </p>
          <h5 className='text-blue-600 font-medium'>
          {props.link}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
