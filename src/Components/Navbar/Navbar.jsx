import React from 'react';
import Button from '../Button/Button';

function Navbar() {
  return (
    <>
      <div className='border-b-1 border-secondary  m-4 font-ibm'>
        <div className='flex justify-between items-center'>
          <div>
            <a> Melad Abulail</a>
          </div>
          <div className='flex gap-4 max-w-fit'>
            <a className='uppercase'>work</a>
            <a className='uppercase'>about</a>

            <Button
            text={"test"}
            theme={"default"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
