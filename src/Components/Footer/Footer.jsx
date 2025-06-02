import React, { useState } from 'react';
import Arrow from '../../Assets/Icons/arrow.png';

function Footer() {
  const [isOnTouchHovering, setIsOnTouchHovering] = useState(false);
  console.log('🚀 ~ Footer ~ isOnTouchHovering:', isOnTouchHovering);

  return (
    <>
      <div
        className=' h-96 w-4/5 bg-[#383838] text-primary group relative overflow-hidden px-4 py-3 m-auto'
        onMouseEnter={() => setIsOnTouchHovering(true)}
        onMouseLeave={() => setIsOnTouchHovering(false)}
      >
        <div className='absolute w-full h-full inset-0 bg-secondary  transition-all duration-500 scale-y-0 group-hover:scale-y-100 origin-bottom'></div>

        <div className='flex flex-col h-full relative justify-between z-2'>
          <span
            className={`${
              isOnTouchHovering ? 'text-primary' : 'text-secondary'
            }`}
          >
            work with us
          </span>
          <div className='flex justify-between align-bottom'>
            <span
              className={`text-8xl tracking-tighter  ${
                isOnTouchHovering ? 'text-primary' : 'text-secondary'
              }`}
              style={{ wordSpacing: '-30px' }}
            >
              Get in touch
            </span>

            <div
              className={`h-28 w-28 rounded-full inset-0 transition-all duration-500 ${
                isOnTouchHovering
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-black'
              }`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 16 16'
                fill='none'
                preserveAspectRatio='xMidYMid meet'
                aria-hidden='true'
                role='img'
                className='fill-current'
              >
                <path d='M8.6104 12L7.8408 11.2368L10.5128 8.5568H3V7.4432H10.5136L7.84 4.768L8.6104 4L12.6 8L8.6104 12Z'></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
