import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import { Footer } from "./Footer";

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div
      className={`md:grid items-center justify-center ${
        loading && "h-[100vh] grid"
      } `}
    >
      {loading ? (
        <span class="loader"></span>
      ) : (
        <div className=" ">
          <div id="home">
            <Header />
          </div>
          <div className="m-0 p-0">
            <Home />
          </div>
          {/* <p className="text-center text-lg font-[Calibri]">
            Thank you for shopping with us, hope you had a nice time...
            <span role="img" aria-label="Smiling Emoji">
              😀
            </span>
          </p> */}

          <Footer />
        </div>
      )}
    </div>
  );
}

export default Main;
