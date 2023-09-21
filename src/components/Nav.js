import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="body-font bg-indigo-800">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="ml-3 text-xl text-white font-mono" to="/">
          React Shop
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            className="mr-5 text-gray-50 hover:text-gray-400"
            to="/add-product"
          >
            Add Product
          </Link>
          <Link to="/" className="mr-5  text-gray-50 hover:text-gray-400">
            All Products
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
