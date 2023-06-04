import { createContext, useContext, useState } from 'react';

const Cart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Cart.Provider
      value={{
        clearCart,
        cart,
        setCart,
      }}
    >
      {children}
    </Cart.Provider>
  );
};
export default Context;
export const useGlobalContext = () => {
  return useContext(Cart);
};

export { Cart, Context };
