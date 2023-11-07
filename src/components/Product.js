import React from "react";
import { useGlobalContext } from "./Context/Context";
import Swal from "sweetalert2";
import "../App.css";
import Sidebar from "./Sidebar";

export const Product = ({ Data, openSideBar, sideBarToggle }) => {
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
    <div className=" flex bg-white  ">
      <div className=" flex-shrink-0">
        <Sidebar sideBarToggle={sideBarToggle} />
      </div>

      <div className="flex-1 overflow-y-auto h-[50rem]">
        <div className="main-container md:px-3 px-4 sm:mx-5 py-5 grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-12">
          {Data.map((dataItem, index) => {
            const { name, image, price, oldPrice } = dataItem;
            return (
              <article key={index} className="border-none font-normal">
                <img
                  src={image}
                  alt="img"
                  className="border-seperate object-cover rounded-2xl h-50 sm:h-80 w-80"
                />
                <div className="text-lg text-center">
                  <header className="mt-3">
                    <h4 className="align-center text-[19px] capitalize font-normal font-[Calibri] flex align-center justify-center text-center">
                      {name}
                    </h4>
                    <span>
                      <div className="flex align-center justify-center gap-3">
                        <h4 className="text-[16px]  mb-3 p-1 rounded mt-1">
                          ${price.toLocaleString()}
                        </h4>
                      </div>
                    </span>
                  </header>
                  <div className="w-full flex justify-center">
                    <button
                      className="button bg-green-600 text-white text-md font-[Calibri] hover:text-white hover:text-xl hover:bg-slate-700 mb-1 p-2 rounded mt-2"
                      onClick={() => addToCart(dataItem)}
                    >
                      Purchase
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};
