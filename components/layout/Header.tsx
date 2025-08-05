"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import login from "../../public/assets/login.png";
import cart from "../../public/assets/cart.png";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="mt-4 mx-4">
      <div className="flex items-center justify-between mx-9">
        <div className="flex items-center justify-left p-4">
          <Image src={logo} alt="Snapmart Logo" width={30} height={30} />
          <Link href="/" className="text-2xl font-bold ml-4">
            SnapMart
          </Link>
          <div>
            <ul className="flex items-center justify-center space-x-4 ml-8 font-semibold text-xl">
              <li>
                <Link
                  className={`text-base ${
                    pathname === "/" ? "text-green-500" : "text-black"
                  }`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`text-base ${
                    pathname === "/product" ? "text-green-500" : "text-black"
                  }`}
                  href="/product"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  className={`text-base ${
                    pathname === "/cart" ? "text-green-500" : "text-black"
                  }`}
                  href="/cart"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  className={`text-base ${
                    pathname === "/contact" ? "text-green-500" : "text-black"
                  }`}
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4 p-4">
          <div className=" relative ">
            <input
              type="text"
              placeholder="Search products"
              className=" w-70 h-8 pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/cart">
              {" "}
              <Image src={cart} alt="Snapmart Logo" width={50} height={200} />
            </Link>
            <Link href="/cart">
              {" "}
              <Image src={login} alt="Snapmart Logo" width={50} height={30} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
