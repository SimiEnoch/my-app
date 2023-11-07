import React, { useState } from "react";
import { Data } from "./Data";
import { Categories } from "./Categories";
import { Product } from "./Product";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";

const allCategories = ["All", ...new Set(Data.map((data) => data.category))];
console.log(allCategories);

function Home() {
  const [products, setProducts] = useState(Data);
  const [categories] = useState(allCategories);
  const [darkMode, setDarkMode] = useState(false);

  const filterItems = (category) => {
    if (category === "All") {
      setProducts(Data);
      return;
    }

    const newItems = Data.filter((data) => data.category === category);
    setProducts(newItems);
  };



  return (
    <main className="">
    
      <div
        className={`h-[75vh] ${
          darkMode ? "bg-[#1a202c] text-white" : "bg-[#DAA520] text-white"
        }  homestyle sm:h-[70vh] w-screen cursor-pointer m-0 p-0 flex flex-col items-end justify-start`}
      >
        {/* <div className="text-6xl sm:text-5xl absolute font-bold top-0 right-0 mt-16 mr-8">
          <button
            className={`text-6xl sm:text-5xl absolute font-bold top-0 right-0 mt-8 mr-8 ${
              darkMode ? "text-white bg-[#1a202c]" : "text-black "
            }`}
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? <LiaToggleOnSolid /> : <LiaToggleOffSolid />}
          </button>
        </div> */}
        <h1
          className={`${
            darkMode ? "text-white" : "text-white"
          } text-6xl sm:text-5xl absolute font-bold w-full bottom-1/2 left-8`}
        >
          SEASON ARRIVALS
        </h1>
        <p
          className={`${
            darkMode ? "text-white" : "text-white"
          } text-3xl sm:text-2xl absolute font-light w-full mb-4 bottom-[43%] md:mb-3 left-8`}
        >
          ALL THE TRENDS
        </p>
      </div>
      <h1
        className={`${
          darkMode ? "text-black" : "text-black"
        } text-center mt-10 font-bold text-4xl`}
        id="shop"
      >
        Latest Products
      </h1>
      <div className={`${darkMode ? "text-black" : "text-black"}`}>
        <Categories categories={categories} filterItems={filterItems} />
      </div>
      <div
        className={`${
          darkMode ? "bg-[#1a202c] text-white" : " text-black"
        } text-center  font-bold text-4xl mt-10`}
      >
        <Product Data={products} />
      </div>
    </main>
  );
}
export default Home;
