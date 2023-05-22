function TailwindCSSButton() {
  return (
    <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600 inline-block">
      Testing Button
    </button>
  );
}

<div>
  <nav className="flex items-center justify-between flex-wrap bg-slate-700 py-4 space-x-2">
    <div className="font-bold text-xl space-x-2">Biznet</div>
    <div className="w-full block flex-grow sm-flex sm:items-center sm:w-auto">
      <div className="text-sm sm:flex-grow">
        <a
          href="#"
          className="block mt-4 sm:inline-block sm:mt-0 hover:text-teal-200 text-white mr-4"
        >
          Your Business
        </a>
        <a
          href="#"
          className="block mt-4 sm:inline-block sm:mt-0 hover:text-teal-200 text-white mr-4"
        >
          Networking
        </a>
        <a
          href="#"
          className="block mt-4 sm:inline-block sm:mt-0 hover:text-teal-200 text-white mr-4"
        >
          Your Business
        </a>
        <a
          href="#"
          className="block mt-4 sm:inline-block sm:mt-0 hover:text-teal-200 text-white mr-4"
        >
          Blog
        </a>
      </div>
      <div>
        <a
          href="#"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
        >
          Login
        </a>
      </div>
    </div>
  </nav>
  <div className="container mt-5">
    <TailwindCSSButton />

    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-5 "
      role="alert"
    >
      <p className="font-bold">Alert</p>
      <span className="block sm:inline">
        Please update your password
      </span>
    </div>
    <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div class="ml-6 pt-1">
        <h4 className="text-xl text-gray-900">Traversy Media</h4>
        <p className="text-base text-gray-600">You have a message</p>
      </div>
    </div>
  </div>
</div>;
