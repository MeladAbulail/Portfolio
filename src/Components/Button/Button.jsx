import React from 'react';
import { buttonThemes } from './ButtonThemes';

function Button({ theme = 'default', text }) {
  const buttonTheme = buttonThemes[theme];
  const buttonClasses = Object.entries(buttonTheme)
  .map(([key, value]) => value)
  .join(' ');
  
  console.log("🚀 ~ Button ~ buttonClasses:", buttonClasses)
  return (
    <button
      className={`cursor-pointer ${buttonClasses}`}
      onClick={() => {
        console.log('Button clicked');
      }}
    >
      <span className='absolute inset-0 w-full h-full bg-secondary transition-all duration-500 scale-y-0 group-hover:scale-y-100 origin-bottom'></span>
      {text}
    </button>
  );
}

export default Button;
