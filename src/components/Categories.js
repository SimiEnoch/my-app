export const Categories = ({ categories, filterItems }) => {
  return (
    <div className="flex space-x-1 justify-center align-center">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className=" mt-10 sm:text-xl border-gray-600 border-b-2 hover:bg-slate-700 hover:text-white hover:rounded sm:p-2"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
