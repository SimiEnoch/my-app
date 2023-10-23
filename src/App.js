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
import LoginForm from './components/authentication/LoginForm';

function App() {
  const { cart } = useGlobalContext();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="cart"
          element={<CartContainer cartContainer={cart} />}
        />
        <Route path="sign-up" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
