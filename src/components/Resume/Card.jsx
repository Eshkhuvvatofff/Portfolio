import React, { useState } from 'react';

const Card = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className='resume__item border-b-[2px] border-b-solid border-b-borderColor dark:border-b-borderColorDark '>
      <div className='resume__header' onClick={() => setShowInfo(!showInfo)}>
        <h3 className='resume__subtitle text-titleColor dark:text-titleColorDark'>{props.title}</h3>
        <span className='resume__icon dark:bg-titleColorDark dark:text-bgColorDark bg-titleColor text-bgColorAlt'>{showInfo ? '-' : '+'}</span>
      </div>
      <div className={`${showInfo ? 'show-content' : ''} resume__content text-titleColor dark:text-titleColorDark`}>
        <div className='resume__date-title'>
          <h3 className='resume__title text-titleColor dark:text-titleColorDark'>{props.subtitle}</h3>
          <span className='resume__date text-cs text-titleColor dark:text-titleColorDark'>{props.date}</span>
        </div>

        <p className='resume__desc text-textColor dark:text-textColorDark'>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
