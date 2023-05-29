import React from "react";
import { useGlobalContext } from "./Context/Context";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

export const Cart = ({ id, mainId, name, price, image, amount }) => {
  const { cart, setCart } = useGlobalContext();

  const increase = () => {
    //Get the exact index of item
    const index = cart.findIndex((object) => {
      return object.id === id;
    });

    // increase the amount by 1 everytime the user clicks the button

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
  };

  const decrease = () => {
    //Get the exact index of item
    const index = cart.findIndex((object) => {
      return object.id === id;
    });

    if (index !== -1) {
      //So the users wont be able to reduce it more than 1

      if (cart[index].amount <= 1) {
        return;
      }

      // reduce the amount by 1 everytime the user clicks the button
      setCart((prev) => {
        const newCart = [...prev];
        newCart[index] = {
          ...newCart[index],
          amount: newCart[index].amount - 1,
        };
        return newCart;
      });
      return;
    }
  };

  const remove = () => {
    const newCart = cart.filter((item) => item.mainId !== mainId);
    setCart(newCart);
  };

  return (
    <article className="flex sm:border-[1px] w-[100%] justify-around items-center">
      <img src={image} alt={name} className="w-50 h-50 max-w-md" />
      <div className="">
        <header className="mt-3">
          <h4 className="text-lg font-bold flex align-center justify-center text-center font">
            {name}
          </h4>
          <div className="w-full flex align-center justify-center font-bold">
            <h4 className="text-sm  bg-slate-500 text-white border-2 mb-3 p-1 rounded mt-1">
              ${price}
            </h4>
          </div>
        </header>
        <div className="w-full flex align-center justify-center font-bold">
          <button
            className=" ml-4 text-sm mb-3 p-1 rounded mt-1 hover:scale-95 text-blue-500"
            onClick={() => {
              console.log(mainId);
              remove();
            }}
          >
            remove
          </button>
        </div>

        <div className="flex items-center justify-center">
          <button className="" onClick={() => increase(id)}>
            <HiChevronUp />
          </button>
          <button className="" onClick={() => decrease(id)}>
            <HiChevronDown />
          </button>
        </div>
        <p className="text-center">{amount}</p>
      </div>
    </article>
  );
};

export default Cart;
