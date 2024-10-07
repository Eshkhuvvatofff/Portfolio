import React from 'react';
import { post } from '../../Data';
import shapeTwo from '../../assets/shape-2.png';
import { FaArrowRight } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

import './Blog.css';

const Blog = () => {
  return (
    <section className='pb-[300px] bg-gradient-180 from-bgColorAlt to-bgColor dark:bg-gradient-0 dark:from-bgColorDark dark:bg-bgColorAltDark px-[5%] sm:px-[4%] 2xl:px-[17%]' id='blog'>
      <h2 className='uppercase tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-titleColor dark:text-titleColorDark text-center'>
        Latest Blog
      </h2>
      <p className='leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center'>
        My
        <span className='font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]'>
          Articles and Advices
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
        {post.map(({ id, date, imgURL, title, description }) => {
          return (
            <SwiperSlide
              className='bg-containerColor border-bgColorDark border-2 border-solid dark:bg-containerColorDark pt-[30px] px-[35px] rounded-[18px] overflow-hidden text-left flex flex-col'
              key={id}
            >
              <div className='post__header'>
                <img src={imgURL} alt='customerImg' className='post__img' />
              </div>

              <h3 className='post__title text-titleColor dark:text-titleColorDark'>{title}</h3>
              <h3 className='post__date text-titleColor dark:text-titleColorDark'>{date}</h3>

              <p className='post__desc text-textColor dark:text-textColorDark'>{description}</p>

              <div className='flex justify-start items-center absolute bottom-[5%] left-10 '>
                <a
                  href='#'
                  className='btn__start flex items-center justify-around w-full text-titleColor dark:text-titleColorDark text-tiny gap-2 border-[2px] border-solid border-borderColor dark:border-borderColorDark py-[8px] px-[16px] rounded-[56px] dark:shadow-[5px_5px_rgba(255,255,255,0.1)] shadow-[5px_5px_rgba(0,0,0,0.3)] relative bg-white dark:bg-titleColor before:content-[""] before:absolute before:inset-[2px] before:bg-primaryColor before:rounded-[56px] before:scale-[0.3] before:blur-[10px] before:opacity-0 before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.3,0,0.3,1)] before:z-[1] hover:before:scale-[1] hover:before:blur-0 hover:before:opacity-100'
                >
                  <span className='z-[1] text-titleColor dark:text-titleColorDark font-[Jost] font-[700]'>
                    Read&nbsp;
                    <span className='text-primaryColor'>More</span>
                  </span>
                  <FaArrowRight className='z-[2] text-titleColor dark:text-titleColorDark' />
                </a>
              </div>

              <img
                src={shapeTwo}
                alt='shape for design blog post cards'
                className='absolute right-[-50px] bottom-[-19px] w-[141px] h-[141px] dark:invert-[1] dark:opacity-[0.6]'
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Blog;
