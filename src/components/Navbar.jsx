import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between  items-center h-20 px-4 absolute z-10 bg-slate-200'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden font-aloha' : 'block font-aloha'}>Aloha</h1>
      </div>
      <ul className='hidden md:flex'>
        <li className='font-ibm'>
          <Link to='/'>Home</Link>
        </li>
        <li className='font-ibm'>
          <Link to={{
            pathname: '/Activities',
          }} state={{ title: "Surfing" }}>Surfing</Link>
        </li>
        <li className='font-ibm'>
          <Link to={{
            pathname: '/Activities',
          }} state={{ title: "Traditional Festivals" }}>Traditional Festivals</Link>
        </li>
        <li className='font-ibm'>
          <Link to={{
            pathname: '/Activities',
          }} state={{ title: "Volcanoes" }}>Volcanoes</Link>
        </li>
      </ul>
      <div className='hidden md:flex'>
        <button className='my-6 backdrop:to-blue-500'>Book a Trip</button>
      </div>

      {/* Menu */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <li className='border-b font-ibm'>
            <Link to='/'>Home</Link>
          </li>
          <li className='border-b font-ibm'>
            <Link to={{
              pathname: '/Activities',
            }} state={{ title: "Surfing" }}>Surfing</Link>
          </li>
          <li className='border-b font-ibm'>
            <Link to={{
              pathname: '/Activities',
            }} state={{ title: "Traditional Festivals" }}>Traditional Festivals</Link>
          </li>
          <li className='border-b font-ibm'>
            <Link to={{
              pathname: '/Activities',
            }} state={{ title: "Volcanoes" }}>Volcanoes</Link>
          </li>
          <div className='flex flex-col'>
            <button className='my-6 backdrop:to-blue-500 font-ibm'>Book a Trip</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
