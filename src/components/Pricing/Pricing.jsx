import React from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { HiXMark } from 'react-icons/hi2';
import shapeTwo from '../../assets/shape-2.png';

import './Pricing.css';

const Pricing = () => {
  return (
    <section
      className='pb-[220px] bg-gradient-0 from-bgColorAlt to-bgColor dark:bg-gradient-0 dark:from-bgColorAltDark dark:to-bgColorDark px-[5%] xs:px-[10%] sm:px-[15%] md:px-[5%] lg:px-[2%] 2xl:px-[10%]'
      id='pricing'
    >
      <h2 className='uppercase tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-titleColor dark:text-titleColorDark text-center'>
        Pricing
      </h2>
      <p className='leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center'>
        My
        <span className='font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]'>
          Price Board
        </span>
      </p>

      <div className='grid-cols-1 md:grid-cols-4 lg:grid-cols-3 grid gap-[40px] sm:gap-[10px] xl:gap-[40px]'>
        {/* Hourly */}
        <div className='pricing__item card md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-2 border-bgColorDark border-2 border-solid dark:border-8 dark:border-[rgba(255, 255, 255, 0.91)] dark:border-solid card-one bg-containerColor dark:bg-containerColorDark rounded-2xl p-8 relative overflow-hidden'>
          <span className='font-[700] text-tiny text-titleColor dark:text-titleColorDark block mb-[65px] uppercase tracking-[0.05em]'>
            Hourly Basis
          </span>

          <h3 className='text-h2Size leading-[1] mb-[20px] font-[700] text-titleColor dark:text-titleColorDark'>
            30 <span className='text-primaryColor'>$</span>{' '}
            <em className='text-normal not-italic ml-[15px]'>Hour</em>
          </h3>

          <p className='pb-[30px] text-textColor dark:text-textColorDark'>
            This plan is ideal for those who need occasional frontend
            development services for small projects or fixes. Features:
          </p>

          <ul className='mb-[35px] text-titleColor dark:text-titleColorDark'>
            <li className='relative m-[5px] flex items-center gap-4 text-normal'>
              <FaCheck className='text-primaryColor text-h5Size' />
              <span className=''>Coming Soon...</span>
            </li>
            <li className='relative m-[5px] flex items-center gap-4 text-normal'>
              <FaCheck className='text-primaryColor text-h5Size' />
              <span className=''>Coming Soon...</span>
            </li>
            <li className='relative m-[5px] flex items-center gap-4 text-normal text-[#676767]'>
              <HiXMark className='text-red text-h5Size stroke-2' />
              <span className='line-through'> Coming Soon...</span>
            </li>
            <li className='relative m-[5px] flex items-center gap-4 text-normal text-[#676767]'>
              <HiXMark className='text-red text-h5Size stroke-2' />
              <span className='line-through'>Coming Soon...</span>
            </li>
          </ul>

          <div className='flex justify-start'>
            <a
              href='#'
              className='btn__start flex items-center justify-center w-[75%] gap-4 text-titleColor dark:text-titleColorDark text-tiny border-[2px] border-solid border-borderColor dark:border-borderColorDark p-[15px] rounded-[56px] dark:shadow-[5px_5px_rgba(255,255,255,0.1)] shadow-[5px_5px_rgba(0,0,0,0.3)] relative bg-white dark:bg-titleColor font-[700]
            
            before:content-[""] before:absolute before:inset-[2px] before:bg-primaryColor before:rounded-[56px] before:scale-[0.3] before:blur-[10px] before:opacity-0 before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.3,0,0.3,1)] before:z-[1]
            
            hover:before:scale-[1] hover:before:blur-0 hover:before:opacity-100
            '
            >
              <span className='z-[1] text-large text-titleColor dark:text-titleColorDark font-[Jost]'>
                Start&nbsp;
                <span className='text-primaryColor font-[700]'>Project</span>
              </span>
              <FaArrowRight className='z-[2] text-large text-titleColor dark:text-titleColorDark' />
            </a>
            <img
              src={shapeTwo}
              alt='shape for design testimonial cards'
              className='absolute bottom-[10px] right-[-35px] w-[100px] h-[100px] dark:invert-[1] dark:opacity-[0.6] z-[0]'
            />
          </div>
        </div>

        {/* Freelancing */}
        <div className='center-box relative md:col-start-3 md:col-end-5 lg:col-start-2 lg:col-end-3 '>
          <span className='uppercase tracking-[0.05em] absolute z-[20] top-[-12px] right-[40px] py-[4px] px-[16px] rounded-[26px] bg-primaryColor shadow-[5px_5px_rgba(255,255,255,0.1)] text-titleColor text-tiny font-[700]'>
            Popular
          </span>
          <div className='animated-border-box-glow'></div>
          <div className='animated-border-box border-bgColorDark border-2 border-solid card card-one bg-containerColor dark:bg-containerColorDark rounded-2xl p-8'>
            <span className='font-[700] text-tiny dark:text-titleColorDark block mb-[65px] uppercase tracking-[0.05em] '>
              Freelancing
            </span>
            <h3 className='text-h2Size leading-[1] mb-[20px] font-[700] dark:text-titleColorDark'>
              250 <span className='text-primaryColor'>$</span>{' '}
              <em className='text-normal not-italic ml-[15px]'>Week</em>
            </h3>

            <p className='pb-[30px] dark:text-textColorDark'>
              This plan is ideal for those who require consistent frontend
              development services for larger projects or ongoing work.
            </p>

            <ul className='mb-[35px] dark:text-titleColorDark'>
              <li className='relative m-[5px] flex items-center gap-4 text-normal'>
                <FaCheck className='text-primaryColor text-h5Size' />
                <span className=''>Coming Soon...</span>
              </li>
              <li className='relative m-[5px] flex items-center gap-4 text-normal'>
                <FaCheck className='text-primaryColor text-h5Size' />
                <span className=''>Coming Soon...</span>
              </li>
              <li className='relative m-[5px] flex items-center gap-4 text-normal'>
                <FaCheck className='text-primaryColor text-h5Size' />
                <span className=''>Coming Soon...</span>
              </li>
              <li className='relative m-[5px] flex items-center gap-4 text-normal text-[#676767]'>
                <HiXMark className='text-red text-h5Size stroke-2' />
                <span className='line-through'>Coming Soon...</span>
              </li>
            </ul>

            <div className='flex justify-center'>
            <a
              href='#'
              className='btn__start flex items-center justify-center w-[75%] gap-4 text-titleColor dark:text-titleColorDark text-tiny border-[2px] border-solid border-borderColor dark:border-borderColorDark p-[15px] rounded-[56px] dark:shadow-[5px_5px_rgba(255,255,255,0.1)] shadow-[5px_5px_rgba(0,0,0,0.3)] relative bg-white dark:bg-titleColor font-[700]
            
            before:content-[""] before:absolute before:inset-[2px] before:bg-primaryColor before:rounded-[56px] before:scale-[0.3] before:blur-[10px] before:opacity-0 before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.3,0,0.3,1)] before:z-[1]
            
            hover:before:scale-[1] hover:before:blur-0 hover:before:opacity-100
            '
            >
              <span className='z-[1] text-large text-titleColor dark:text-titleColorDark font-[Jost]'>
                Start&nbsp;
                <span className='text-primaryColor font-[700]'>Project</span>
              </span>
              <FaArrowRight className='z-[2] text-large text-titleColor dark:text-titleColorDark' />
            </a>
              <img
                src={shapeTwo}
                alt='shape for design testimonial cards'
                className='absolute bottom-[10px] right-[-35px] w-[100px] h-[100px] invert-[1] opacity-[0.6] z-[0]'
              />
            </div>
          </div>
        </div>

        {/* Full Time */}
        <div className='pricing__item card md:col-start-2 md:col-end-4 lg:col-start-3 lg:col-end-4 border-bgColorDark border-2 border-solid dark:border-8 dark:border-[rgba(255, 255, 255, 0.91)] dark:border-solid  card-one bg-containerColor dark:bg-containerColorDark rounded-2xl p-8 relative overflow-hidden'>
          <span className='font-[700] text-tiny text-titleColor dark:text-titleColorDark block mb-[65px] uppercase tracking-[0.05em]'>
            Hourly Basis
          </span>

          <h3 className='text-h2Size leading-[1] mb-[20px] font-[700] text-titleColor dark:text-titleColorDark'>
            990 <span className='text-primaryColor'>$</span>{' '}
            <em className='text-normal not-italic ml-[15px]'>Hour</em>
          </h3>

          <p className='pb-[30px] text-textColor dark:text-textColorDark'>
            This plan is ideal for those who need occasional frontend
            development services for small projects or fixes. Features:
          </p>

          <ul className='mb-[35px] text-titleColor dark:text-titleColorDark'>
            <li className='relative m-[5px] flex items-center gap-4 text-normal'>
              <FaCheck className='text-primaryColor text-h5Size' />
              <span className=''>Coming Soon...</span>
            </li>
            <li className='relative m-[5px] flex items-center gap-4 text-normal'>
              <FaCheck className='text-primaryColor text-h5Size' />
              <span className=''>Coming Soon...</span>
            </li>
            <li className='relative m-[5px] flex items-center gap-4 text-normal'>
              <FaCheck className='text-primaryColor text-h5Size' />
              <span className=''>Coming Soon...</span>
            </li>
            <li className='relative m-[5px] flex items-center gap-4 text-normal'>
              <FaCheck className='text-primaryColor text-h5Size' />
              <span className=''>Coming Soon...</span>
            </li>
          </ul>

          <div className='flex justify-start'>
            <a
              href='#'
              className='btn__start flex items-center justify-center w-[75%] gap-4 text-titleColor dark:text-titleColorDark text-tiny border-[2px] border-solid border-borderColor dark:border-borderColorDark p-[15px] rounded-[56px] dark:shadow-[5px_5px_rgba(255,255,255,0.1)] shadow-[5px_5px_rgba(0,0,0,0.3)] relative bg-white dark:bg-titleColor font-[700]
            
            before:content-[""] before:absolute before:inset-[2px] before:bg-primaryColor before:rounded-[56px] before:scale-[0.3] before:blur-[10px] before:opacity-0 before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.3,0,0.3,1)] before:z-[1]
            
            hover:before:scale-[1] hover:before:blur-0 hover:before:opacity-100
            '
            >
              <span className='z-[1] text-large text-titleColor dark:text-titleColorDark font-[Jost]'>
                Start&nbsp;
                <span className='text-primaryColor font-[700]'>Project</span>
              </span>
              <FaArrowRight className='z-[2] text-large text-titleColor dark:text-titleColorDark' />
            </a>
            <img
              src={shapeTwo}
              alt='shape for design testimonial cards'
              className='absolute bottom-[10px] right-[-35px] w-[100px] h-[100px] dark:invert-[1] dark:opacity-[0.6] z-[0]'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
