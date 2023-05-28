import React, { useEffect, useState } from 'react';
import Header from './Header';
import Home from './Home';
import { Footer } from './Footer';
import { useGlobalContext } from './Context/Context';

function Main() {
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useGlobalContext();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div
      className={`md:grid items-center justify-center ${
        loading && 'h-[100vh] grid'
      } `}
    >
      {loading ? (
        <span class="loader"></span>
      ) : (
        <div className="max-w-screen-xl ">
          <div id="home">
            <Header />
          </div>
          <Home />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Main;
