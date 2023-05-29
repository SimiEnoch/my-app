import React, { useState } from 'react';
import { Data } from './Data';
import { Categories } from './Categories';
import { Product } from './Product';

const allCategories = [
  'All',
  ...new Set(Data.map((data) => data.category)),
];
console.log(allCategories);

function Home() {
  const [products, setProducts] = useState(Data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'All') {
      setProducts(Data);
      return;
    }

    const newItems = Data.filter(
      (data) => data.category === category
    );
    setProducts(newItems);
  };

  return (
    <main>
      <div className="h-[75vh] bg-slate-950 sm:h-[70vh]">
        <h1 className="text-white text-6xl sm:text-5xl absolute font-bold w-100 bottom-1/2 left-8">
          SEASON ARRIVALS
        </h1>
        <p className="text-white text-3xl sm:text-2xl absolute font-light w-100 mb-4 bottom-[43%] md:mb-3 left-8">
          ALL THE TRENDS
        </p>
      </div>

      <h1 className="text-center mt-10 font-bold text-2xl" id="shop">
        Latest Products
      </h1>
      <div className="">
        <Categories
          categories={categories}
          filterItems={filterItems}
        />
      </div>
      <div className="mt-20">
        <Product Data={products} />
      </div>
    </main>
  );
}
export default Home;
