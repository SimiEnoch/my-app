import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { cartReducer } from './Reducers';
import { Data } from '../Data';

const Cart = createContext();

const initialStae = {
  cart: [],
  total: 0,
  amount: 0,
};

const Context = ({ children }) => {
  // const [state, dispatch] = useReducer(cartReducer, initialStae);

  // const clearCart = () => {
  //   dispatch({ type: 'CLEAR_CART' });
  // };
  // const remove = (id) => {
  //   dispatch({ type: 'REMOVE', payload: id });
  // };
  // const increase = (id) => {
  //   dispatch({ type: 'INCREASE', payload: id });
  // };
  // const decrease = (id) => {
  //   dispatch({ type: 'DECREASE', payload: id });
  // };
  // const addToCart = (id) => {
  //   dispatch({
  //     type: 'ADD_TO_CART',
  //     payload: id,
  //   });
  // };

  // useEffect(() => {
  //   dispatch({ type: 'GET_TOTALS' });
  // }, [state.cart]);

  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Cart.Provider
      value={{
        // ...state,
        clearCart,
        // increase,
        // remove,
        // decrease,
        // addToCart,
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
