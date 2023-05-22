import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsFillCartCheckFill } from 'react-icons/bs';
import React, { useState } from 'react';
import { useGlobalContext } from './Context/Context';

function Header() {
  const { amount } = useGlobalContext();
  const [hamburger, setHamburger] = useState(false);

  const buttonHandler = () => {
    if (hamburger === false) {
      setHamburger(true);
    }
    if (hamburger === true) {
      setHamburger(false);
    }
  };
  return (
    <header className="max-w-screen-xl fixed flex z-10 top-0 w-full shadow items-center justify-between bg-white h-[60px] md:px-16 px-8 text-black">
      <h1 className="text-xl font-bold">CARSONS</h1>
      <div className="hover:text-yellow-500">
        <li className="text-slate-800 duration-500  hover:text-yellow-500 mb-4 md:order-5 order-none relative">
          <a href="/Cart">
            <BsFillCartCheckFill />
            <div className="object-top object-cover bg-slate-800 left-[8px]  absolute top-[11px]  rounded-[50%] p-0">
              <p className=" text-white rounded-[50%] text-[14.5px] hover:text-yellow-500 font-bold px-[1.8px]">
                {amount}
              </p>
            </div>
          </a>
        </li>
      </div>
      <nav
        className={`absolute bg-white text-black ${
          hamburger ? 'top-[-1000%]' : 'top-[50px]'
        } w-full left-0 z-[-1] p-8 duration-2000 md:left-auto md:w-auto shadow md:shadow-none md:top-0 md:relative md:bg-transparent md:p-0 md:z-[0]`}
      >
        <ul className="flex gap-8 text-xl md:text-sm flex-col md:flex-row">
          <li className="hover:text-slate-800 duration-500">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-slate-800 duration-500">
            <a href="#shop">Shop </a>
          </li>

          <li className="hover:text-slate-800 duration-500">
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>

      <div className="md:hidden block ">
        <button
          onClick={buttonHandler}
          className={`${
            hamburger ? 'block' : 'hidden'
          } duration-500 w-8`}
        >
          <AiOutlineMenu />
        </button>
        <button
          onClick={buttonHandler}
          className={`${
            hamburger ? 'hidden' : 'block'
          } duration-500 w-8`}
        >
          <AiOutlineClose />
        </button>
      </div>
    </header>
  );
}

export default Header;
