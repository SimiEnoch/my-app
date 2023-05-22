import React, { useEffect, useState } from 'react';
import { Data } from './components/Data';
import Main from './components/Main';
import './App.css';
import CartContainer from './components/CartContainer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Products from './components/Products';

function App() {
  const [cartContainer, setCartContainer] = useState(Data);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="Cart"
          element={<CartContainer cartContainer={cartContainer} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
