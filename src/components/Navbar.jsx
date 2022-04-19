import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'


import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>מפת בניין לעו.</h1>
          <ul className='hidden md:flex'>
          <li className='hover:bg-zinc-300'><Link to="home" smooth={true} duration={500}>קומה 3</Link></li>
          <li className='hover:bg-zinc-300'><Link to="about" smooth={true} offset={-200} duration={500}>קומה 4</Link></li>
          <li className='hover:bg-zinc-300'><Link to="support" smooth={true} offset={-50} duration={500}>קומה 5</Link></li>
          <li className='hover:bg-zinc-300'><Link to="pricing" smooth={true} offset={-50} duration={500}>צ'אט</Link></li>
          </ul>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='hover:bg-zinc-300 border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>קומה 3</Link></li>
          <li className='hover:bg-zinc-300 border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>קומה 4</Link></li>
          <li className='hover:bg-zinc-300 border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>קומה 5</Link></li>
          <li className='hover:bg-zinc-300 border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>צ'אט</Link></li>

        
      </ul>
    </div>
  );
};

export default Navbar;