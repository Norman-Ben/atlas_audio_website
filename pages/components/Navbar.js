import { useState } from 'react';
import Image from 'next/future/image';
import { navLinks } from '../constants';

export default function Navbar() {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Image
        src="/assets/AtlasAudioLogoWhite.png"
        alt="Atlas Audio Logo"
        width={100}
        height={100}
      />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={mobileMenuToggle ? '/assets/close.svg' : '/assets/menu.svg'}
          alt="Mobile Menu"
          width={30}
          height={30}
          className="cursor-pointer w-[28px] h-[28px]
          object-contain"
          onClick={() => setMobileMenuToggle((prevVal) => !prevVal)}
        />
      </div>
    </nav>
  );
}
