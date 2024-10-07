import React, { useState } from 'react';
import axios from 'axios';
import {
  FaRegAddressBook,
  FaRegEnvelope,
  FaRegUser,
  FaRegMap,
} from 'react-icons/fa';

import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        'https://sheet.best/api/sheets/1fc49a2f-4c2a-48a0-80dc-e3f6173d0e43',
        form
      )
      .then((response) => {
        console.log(response);
        // clear forms value
        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      });
  };

  return (
    <section
      className='pb-[180px] bg-gradient-180 from-bgColor to-bgColor dark:bg-gradient-180 dark:from-bgColorDark dark:bg-bgColorAltDark px-[5%] sm:px-[2%] 2xl:px-[17%]'
      id='contact'
    >
      <h2 className='uppercase tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-titleColor dark:text-titleColorDark text-center'>
        Contact Me
      </h2>
      <p className='leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center'>
        Let's
        <span className='font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]'>
          Talk about ideas
        </span>
      </p>

      <div className='lg:grid-cols-[5fr_7fr] grid '>
        <div className='contact__content'>
          <div className='contact__card'>
            <span className='contact__card-icon bg-white dark:bg-containerColorDark'>
              <FaRegMap className=' text-titleColor dark:text-titleColorDark' />
            </span>
            <h3 className='contact__card-title font-[700] text-titleColor dark:text-titleColorDark '>
              Address
            </h3>
            <p className='contact__card-data text-textColor dark:text-textColorDark'>
              Iran, Isfahan, Farhang st No.26
            </p>
          </div>
          <div className='contact__card'>
            <span className='contact__card-icon bg-white dark:bg-containerColorDark'>
              <FaRegUser className='text-titleColor dark:text-titleColorDark' />
            </span>
            <h3 className='contact__card-title font-[700] text-titleColor dark:text-titleColorDark'>
              Freelance
            </h3>
            <p className='contact__card-data text-textColor dark:text-textColorDark'>
              Available Right Now
            </p>
          </div>
          <div className='contact__card'>
            <span className='contact__card-icon bg-white dark:bg-containerColorDark'>
              <FaRegEnvelope className='text-titleColor dark:text-titleColorDark' />
            </span>
            <h3 className='contact__card-title font-[700] text-titleColor dark:text-titleColorDark'>
              Email
            </h3>
            <p className='contact__card-data text-textColor dark:text-textColorDark'>
              ikhaki71@gmail.com
            </p>
          </div>
          <div className='contact__card'>
            <span className='contact__card-icon bg-white dark:bg-containerColorDark'>
              <FaRegAddressBook className='text-titleColor dark:text-titleColorDark' />
            </span>
            <h3 className='contact__card-title font-[700] text-titleColor dark:text-titleColorDark'>
              Phone
            </h3>
            <p className='contact__card-data text-textColor dark:text-textColorDark'>
              +98 913 603 9501
            </p>
          </div>
        </div>

        <form className='contact__form' onSubmit={handleSubmit}>
          <div className='contact__form-group grid-cols-1 sm:grid-cols-2 grid'>
            <div className='contact__form-div'>
              <label className='contact__form-tag uppercase tracking-[0.05em] text-titleColor dark:text-titleColorDark'>
                Your Full Name <b className=''>*</b>
              </label>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                className='contact__form-input bg-bgColorAlt dark:bg-containerColorDark
                text-titleColor dark:text-titleColorDark'
              />
            </div>

            <div className='contact__form-div'>
              <label className='contact__form-tag uppercase tracking-[0.05em] text-titleColor dark:text-titleColorDark'>
                Your Email Address <b className=''>*</b>
              </label>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                className='contact__form-input bg-bgColorAlt dark:bg-containerColorDark text-titleColor dark:text-titleColorDark'
              />
            </div>
          </div>

          <div className='contact__form-div'>
            <label className='contact__form-tag uppercase tracking-[0.05em] text-titleColor dark:text-titleColorDark'>
              Your Subject <b className=''>*</b>
            </label>
            <input
              name='subject'
              value={form.subject}
              onChange={handleChange}
              type='text'
              className='contact__form-input bg-bgColorAlt dark:bg-containerColorDark text-titleColor dark:text-titleColorDark'
            />
          </div>

          <div className='contact__form-div contact__form-area'>
            <label className='contact__form-tag uppercase tracking-[0.05em] text-titleColor dark:text-titleColorDark'>
              Your Message <b className=''>*</b>
            </label>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              className='contact__form-input bg-bgColorAlt dark:bg-containerColorDark text-titleColor dark:text-titleColorDark'
            ></textarea>
          </div>

          <div className='contact__submit grid grid-cols-1 sm:flex gap-4 items-center justify-center sm:justify-around text-titleColor dark:text-titleColorDark'>
            <p className='font-[Comfortaa]'>
              *Accept the terms and conditions.
            </p>
            <button
              type='submit'
              className='flex items-center justify-around w-full sm:w-1/3 text-titleColor dark:text-titleColorDark text-large gap-2 border-[2px] border-solid border-borderColor dark:border-borderColorDark py-[16px] px-[16px] rounded-[56px] dark:shadow-[5px_5px_rgba(255,255,255,0.1)] shadow-[5px_5px_rgba(0,0,0,0.3)] relative bg-white dark:bg-titleColor before:content-[""] before:absolute before:inset-[2px] before:bg-primaryColor before:rounded-[56px] before:scale-[0.3] before:blur-[10px] before:opacity-0 before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.3,0,0.3,1)] before:z-[1] hover:before:scale-[1] hover:before:blur-0 hover:before:opacity-100'
            >
              <span className='z-[1] text-titleColor dark:text-titleColorDark font-[Jost] font-[700]'>
                Send Message
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
