import React from 'react';
import Main from './components/Main';
import './App.css';
import CartContainer from './components/CartContainer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useGlobalContext } from './components/Context/Context';

function App() {
  const { cart } = useGlobalContext();

  // useEffect(() => {
  //   const cart2 = localStorage.getItem('data');

  //   if (cart2) {
  //     setCart(cart2);
  //   }
  // }, [cart]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="cart"
          element={<CartContainer cartContainer={cart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
