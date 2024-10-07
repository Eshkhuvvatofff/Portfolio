import React from 'react';
import { testimonial } from '../../Data';
import shapeTwo from '../../assets/shape-2.png';
import testimonialIcon from '../../assets/testimonials-icon.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className='pb-[220px] bg-gradient-180 from-bgColor to-bgColor dark:bg-gradient-180 dark:from-bgColorAltDark dark:bg-bgColorDark px-[5%] sm:px-[4.5%] 2xl:px-[17%]' id='testimonial'>
      <h2 className='uppercase tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-titleColor dark:text-titleColorDark text-center'>
        testimonials
      </h2>
      <p className='leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center'>
        My
        <span className='font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]'>
          Customer Say
        </span>
      </p>

      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className='mySwiper text-center '
      >
        {testimonial.map(({ img, name, author, description }, index) => {
          return (
            <SwiperSlide
              className='bg-containerColor dark:border-solid dark:border-2 dark:border-bgColor border-bgColorDark border-2 border-solid dark:bg-containerColorDark py-[30px] px-[35px] rounded-[18px] overflow-hidden text-left'
              key={index}
            >
              <div className='testimonial__header'>
                <div className='testimonial__icon bg-containerColor dark:bg-containerColorDark border border-borderColor dark:border dark:border-titleColorDark'>
                  <img src={testimonialIcon} alt='testimonialImg' />
                </div>

                <img src={img} alt='customerImg' className='testimonial__img border border-borderColor dark:border dark:border-titleColorDark' />
              </div>

              <p className='testimonial__desc text-textColor dark:text-textColorDark'>{description}</p>

              <h3 className='testimonial__name text-titleColor dark:text-titleColorDark'>{name}</h3>
              <p className='testimonial__author text-titleColor dark:text-titleColorDark'>{author}</p>
              <img
                src={shapeTwo}
                alt='shape for design testimonial cards'
                className='absolute right-[-24px] bottom-[-24px] w-[141px] h-[141px] dark:invert-[1] dark:opacity-[0.6]'
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
