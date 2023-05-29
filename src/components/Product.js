import React from 'react';
import { useGlobalContext } from './Context/Context';
import { BsFillCartCheckFill } from 'react-icons/bs';

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
                      // <div className="flex min-h-screen items-center justify-center bg-gray-200">
                      //   <div className="flex flex-col gap-5">
                      //     <div className="max-w-lg rounded bg-green-700 tet-green-700 overflow-hidden shadow-md shadow-green-500/20">
                      //       <div class="flex">
                      //         <div className="flex items-center gap-4 p-4">
                      //           <div className="shrink-0">
                      //             <BsFillCartCheckFill />
                      //           </div>
                      //           <div className="space-y-1">
                      //             <p className="font-bold capitalize">
                      //               Success Title Goes Wrong
                      //             </p>
                      //             <p className="text-sm">
                      //               Item successfully added to cart
                      //             </p>
                      //           </div>
                      //           <a href="#">Ok</a>
                      //         </div>
                      //       </div>
                      //     </div>
                      //   </div>
                      // </div>;
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
