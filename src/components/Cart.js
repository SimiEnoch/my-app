import React from 'react';
import { useGlobalContext } from './Context/Context';
import {
  BsFillTrash3Fill,
  BsFillPlusSquareFill,
  BsFillFileMinusFill,
} from 'react-icons/bs';

export const Cart = ({
  id,
  mainId,
  name,
  price,
  image,
  amount,
  oldPrice,
}) => {
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
    <article className=" flex sm:border-[1px] w-[100%] justify-around sm:px-1">
      <img
        src={image}
        alt={name}
        className="border-seperate object-cover h-30 sm:h-30 w-50 sm:w-[30%] w-full max-w-md"
      />
      <div className="">
        <header className="mt-3">
          <h4 className="text-lg font-bold flex align-center justify-center text-center font">
            {name}
          </h4>
          <div className="w-full flex align-center justify-center font-bold gap-2">
            <h4 className="text-sm  bg-slate-500 text-white border-2 mb-3 p-1 rounded mt-1">
              ${price}
            </h4>
            <h4 className="text-[15px] text-black mb-3 p-1 rounded mt-1 line-through">
              ${oldPrice}
            </h4>
          </div>
        </header>
        <span className="w-full">
          <div className="flex align-center justify-center font-bold">
            <BsFillTrash3Fill className="text-red-700 text-[11px]" />
            <button
              className="text-[11px] mb-3 rounded hover:scale-95 text-red-500"
              onClick={() => {
                console.log(mainId);
                remove();
              }}
            >
              REMOVE
            </button>
          </div>
        </span>

        <span className="flex items-center justify-center gap-8">
          <button className="p-2" onClick={() => decrease(id)}>
            <BsFillFileMinusFill />
          </button>
          <p className="text-center"> {amount}</p>
          <button className="p-2" onClick={() => increase(id)}>
            <BsFillPlusSquareFill />
          </button>
        </span>
      </div>
    </article>
  );
};

export default Cart;
