import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import React, { useState } from "react";
import { useGlobalContext } from "./Context/Context";
import { Link } from "react-router-dom";
import { auth } from "./config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

function Header() {
  const { cart } = useGlobalContext();
  const [hamburger, setHamburger] = useState(false);

  const [userState, setUserState] = useState(null);

  const [user] = useAuthState(auth);

  const logOut = async () => {
    await signOut(auth);
  };

  const buttonHandler = () => {
    setHamburger(!hamburger);
  };
  return (
    <header className=" fixed flex z-10 top-0 w-full shadow items-center justify-between bg-white h-[60px] md:px-16 px-8 text-black">
      <h1 className="text-xl font-bold">CARSONS</h1>
      <div className="hover:text-yellow-500">
        <li className="text-slate-800 duration-500  hover:text-yellow-500 mb-4 md:order-5 order-none relative">
          <Link to="/cart">
            <BsFillCartCheckFill />
            <div className="object-top object-cover bg-slate-800 left-[8px]  absolute top-[11px]  rounded-[50%] p-0">
              <p className=" text-white rounded-[50%] text-[14.5px] hover:text-yellow-500 font-bold px-[1.8px]">
                {cart.length}
              </p>
            </div>
          </Link>
        </li>
      </div>
      <nav
        className={`absolute bg-white text-black  ${
          hamburger ? "top-[-1000%]" : "top-[50px]"
        } w-full left-0 z-[-1] p-8 duration-2000 md:left-auto md:w-auto shadow md:shadow-none md:top-0 md:relative md:bg-transparent md:p-0 md:z-[0]`}
      >
        <ul className="flex gap-6 text-xl md:text-sm flex-col md:flex-row">
          <li className="hover:text-slate-800 duration-500">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-slate-800 duration-500">
            <a href="#shop">Shop </a>
          </li>

          <li className="hover:text-slate-800 duration-500">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-slate-800 duration-500">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>

      {user && (
        <div className="user">
          <img
            src={user.photoURL || ""}
            width="20"
            height="20"
            alt="User Profile"
          />
          <p>{user.displayName}</p>
        </div>
      )}

      {/* {user ? (
        <button className="text-slate-800 duration-500" onClick={logOut}>
          <Link to="">
            <button className="bg-green-800 p-1 px-2 rounded-md text-white font-bold">
              Login
            </button>
          </Link>
        </button>
      ) : (
        <button className="text-slate-800 duration-500" onClick={logOut}>
          <Link to="">
            <button className="bg-green-800 p-1 px-2 rounded-md text-white font-bold">
              Logout
            </button>
          </Link>
        </button>
      )}
       */}
      <div className="md:hidden block ">
        <button
          onClick={buttonHandler}
          className={`${hamburger ? "block" : "hidden"} duration-500 w-8`}
        >
          <AiOutlineMenu />
        </button>
        <button
          onClick={buttonHandler}
          className={`${hamburger ? "hidden" : "block"} duration-500 w-8`}
        >
          <AiOutlineClose />
        </button>
      </div>
    </header>
  );
}

export default Header;
