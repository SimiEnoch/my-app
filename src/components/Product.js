import React from 'react';
import { useGlobalContext } from './Context/Context';

export const Product = ({ Data }) => {
  // const { addToCart } = useGlobalContext();
  const { setCart, cart } = useGlobalContext();

  const addToCart = (dataItem) => {
    //Get the exact index of item, note that if index = -1, it means the item doesn't exist so it just adds it to the cart direct.
    const index = cart.findIndex((object) => {
      return object.id === dataItem.id;
    });

    // increase the amount by 1 everytime the user clicks the button if the item exists

    if (index !== -1) {
      setCart((prev) => {
        const newCart = [...prev];
        newCart[index] = {
          ...newCart[index],
          amount: newCart[index].amount + 1,
        };
        return newCart;
      });
      return;
    }

    setCart((prev) => {
      return [...prev, { ...dataItem, mainId: prev.length + 1 }];
    });
    // localStorage.setItem('data', cart);
  };

  return (
    <div className="md:px-10 px-4 mx-5">
      <div className="section-center">
        {Data.map((dataItem, index) => {
          const { name, image, price, oldPrice } = dataItem;
          return (
            <article key={index} className="menu-items sm:border-2">
              <img
                src={image}
                alt="img"
                className="border-seperate object-cover h-50 sm:h-80 w-full max-w-md"
              />
              <div className=" text-lg text-center">
                <header className="mt-3">
                  <h4 className="align-center text-[13px] font-bold flex align-center justify-center text-center font">
                    {name}
                  </h4>
                  <span>
                    <div className="flex align-center justify-center font-bold gap-3">
                      <h4 className="text-sm bg-slate-500 text-white border-2 mb-3 p-1 rounded mt-1">
                        ${price}
                      </h4>
                      <h4 className="text-sm text-black border-2 mb-3 p-1 rounded mt-1 line-through">
                        ${oldPrice}
                      </h4>
                    </div>
                  </span>
                </header>
                <div className="w-full flex align-center justify-center font-bold">
                  <button
                    className="button border-2 border-black text-md font-light hover:text-white text-black hover:text-xl hover:font-bold hover:bg-slate-700  mb-3 p-1 rounded mt-1"
                    onClick={() => {
                      addToCart(dataItem);
                      alert('Item successfully added to cart');
                    }}
                  >
                    Add to Cart
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
