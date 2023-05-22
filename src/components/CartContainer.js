import React from 'react';
import Cart from './Cart';
import { useGlobalContext } from './Context/Context';
import { BsFillCartCheckFill } from 'react-icons/bs';

const CartContainer = ({ cartContainer }) => {
  const { amount } = useGlobalContext();
  const { cart, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="">
        <header className="max-w-screen-xl fixed flex z-10 top-0 w-full shadow items-center justify-between bg-slate-950 text-white h-[60px] md:px-16 px-8">
          <h1 className="text-xl font-bold">CARSONS</h1>
          <div className="hover:text-yellow-500">
            <li className="text-slate-800 duration-500  hover:text-yellow-500 mb-4 md:order-5 order-none relative">
              <a href="/Cart">
                <BsFillCartCheckFill />
                <div className="object-top left-[8px]  absolute  p-[1px] top-[11px]  rounded-xl">
                  <p className=" text-black rounded-[50%] text-[14.5px] hover:text-yellow-500 font-bold px-[1.8px]">
                    {amount}
                  </p>
                </div>
              </a>
            </li>
          </div>
        </header>
        <header className="font-bold text-center pt-[17rem] text-2xl text-zinc-950 ">
          <h2 className="mt-5">Your Cart</h2>
          <h4 className="pt-3">is currently empty...</h4>
        </header>
        <div className="flex items-center justify-center pt-3">
          <a
            href="/"
            className=" text-green-800 text-center p-2 rounded"
          >
            Back to home page ?
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="cart">
      <header className="">
        <h2 className="mt-20 text-center font-bold text-2xl mb-3 hover:underline">
          YOUR CART
        </h2>
      </header>
      <div className=" w-[100%] mt-10 md:grid md:grid-cols-3 grid grid-cols-1 px-6 gap-6">
        {cartContainer.map((carts) => {
          return <Cart {...carts}></Cart>;
        })}
      </div>
      <footer>
        <hr className="w-full mt-10 text-black" />
        <div className="text-black text-center mt-2 mb-2 font-bold gap-20 text-2xl">
          <h4>
            Total Amount<span> = ${total}</span>
          </h4>
        </div>
        <div className="flex justify-center items-center mb-5">
          <button
            className=" bg-red-700 border-2 text-white p-2 rounded-lg hover:scale-100 text-2xl font-[700]"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
