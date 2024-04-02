import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="body-font fixed left-0 top-0 z-10 w-full border-b border-gray-200 bg-white py-4 text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center md:flex-row">
        <Link
          to={"/"}
          className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-4	md:mr-auto md:border-l md:border-gray-400 md:py-1 md:pl-4">
          <Link
            to={"/products"}
            className="mr-5 hover:cursor-pointer hover:text-gray-900"
          >
            Products
          </Link>
          <Link
            to={"/products/add"}
            className="mr-5 hover:cursor-pointer hover:text-gray-900"
          >
            Add Product
          </Link>
          <Link className="mr-5 hover:cursor-pointer hover:text-gray-900">
            B2C
          </Link>
          <Link className="mr-5 hover:cursor-pointer hover:text-gray-900">
            Contact Us
          </Link>
        </nav>
        <button className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
          Sign in
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="ml-1 h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
