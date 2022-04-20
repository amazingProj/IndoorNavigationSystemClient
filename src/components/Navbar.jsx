import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
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
          <li className='hover:bg-zinc-300'><Link to={'/floor3'}>קומה 3</Link></li>
          <li className='hover:bg-zinc-300'><Link to={'/floor4'}>קומה 4</Link></li>
          <li className='hover:bg-zinc-300'><Link to={'/floor5'}>קומה 5</Link></li>
          <li className='hover:bg-zinc-300'><Link to={'/chat'}>צ'אט</Link></li>
          </ul>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='hover:bg-zinc-300 border-b-2 border-zinc-300 w-full'><Link to={'/floor3'}>קומה 3</Link></li>
          <li className='hover:bg-zinc-300 border-b-2 border-zinc-300 w-full'><Link to={'/floor4'}>קומה 4</Link></li>
          <li className='hover:bg-zinc-300 border-b-2 border-zinc-300 w-full'><Link to={'/floor5'}>קומה 5</Link></li>
          <li className='hover:bg-zinc-300 border-b-2 border-zinc-300 w-full'><Link to={'/chat'}>צ'אט</Link></li>

        
      </ul>
    </div>
  );
};

export default Navbar;