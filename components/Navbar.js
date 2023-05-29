import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillTriangleFill } from "react-icons/bs";
import Link from "next/link";
const Navbar = () => {
  return (
    <navBar className=" py-7 text-gray-600 bg-gray-100  place-items-center grid grid-cols-3 shadow-md sticky z-50 top-0">
      <div className="flex items-center absolute left-8">
        <BsFillTriangleFill className="text-2xl" />
        <p className="text-lg mx-3">TheStyleCo.</p>
      </div>
      {/* list */}
      <div className="absolute">
        <ul className="flex flex-col md:flex-row space-x-10 items-center font-bold h-auto ">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/tshirts">Shop</Link>
          </li>

          <li>Categories</li>

          <li>Features</li>

          <li>Resources</li>

          <li>Pricing</li>
        </ul>
      </div>

      <div className="flex flex-col text-center items-center justify-center md:flex-row md:text-right absolute right-0 mx-4">
        <h1 className="">Login / Register</h1>
        <Link href="/Cart">
          <AiOutlineShoppingCart className="text-2xl mx-4 " />
        </Link>
      </div>
    </navBar>
  );
};

export default Navbar;
