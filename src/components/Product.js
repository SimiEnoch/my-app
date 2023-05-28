import React from 'react';
import { useGlobalContext } from './Context/Context';

export const Product = ({ Data }) => {
  // const { addToCart } = useGlobalContext();
  const { setCart, cart } = useGlobalContext();

  const addToCart = (dataItem) => {
    setCart((prev) => {
      return [...prev, { ...dataItem, id: prev.length + 1 }];
    });
    localStorage.setItem('data', cart);
  };

  return (
    <div className="px-14">
      <div className="section-center ">
        {Data.map((dataItem, index) => {
          const { name, image, price } = dataItem;
          return (
            <article key={index} className="menu-items sm:border-2">
              <img
                src={image}
                alt="img"
                className="border-seperate object-cover h-80 w-full max-w-md"
              />
              <div className=" text-lg text-center">
                <header className="mt-3">
                  <h4 className="text-lg flex align-center justify-center">
                    {name}
                  </h4>
                  <div className="flex align-center justify-center font-bold">
                    <h4 className=" text-lg mb-3 p-1 rounded mt-1">
                      ${price}
                    </h4>
                  </div>
                </header>
                <div className="w-full flex align-center justify-center font-bold">
                  <button
                    className="button border-white text-md font-light hover:text-white text-black hover:text-xl hover:font-bold hover:bg-slate-800 mb-3 p-1 rounded mt-1"
                    onClick={() => {
                      console.log(cart);
                      addToCart(dataItem);
                    }}
                  >
                    Order!
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
