export const Categories = ({ categories, filterItems }) => {
  return (
    <div className="flex space-x-1 justify-center align-center gap-1">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className=" mt-10 sm:text-xl bg-gray-200  rounded-lg font-semibold font-[Calibri] hover:bg-slate-700  hover:text-white hover:rounded p-2"
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
