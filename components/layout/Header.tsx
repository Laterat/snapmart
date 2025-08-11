"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import login from "../../public/assets/login.png";
import cart from "../../public/assets/cart.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/product" },
  { name: "Cart", path: "/cart" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const { items } = useSelector((state: RootState) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false);

  const renderNavLinks = () => (
    <ul className="flex flex-col md:flex-row items-center gap-4 font-semibold lg:text-xl">
      {navLinks.map((link) => (
        <li key={link.path}>
          <Link
            className={`text-base ${
              pathname === link.path ? "text-green-500" : "text-black"
            }`}
            href={link.path}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="mt-4 mx-4">
      <div className="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-9">
        <div className="flex items-center w-full md:w-auto">
          <Image src={logo} alt="SnapMart Logo" width={30} height={30} />
          <Link href="/" className="lg:text-2xl font-bold ml-4">
            SnapMart
          </Link>

          <nav className="hidden md:flex ml-8">{renderNavLinks()}</nav>

          <button
            className="ml-auto md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <FaTimes className="w-5 h-5 text-gray-500" />
            ) : (
              <FaBars className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>

        <div className="flex items-center justify-end gap-4 p-4">
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search products"
              className="w-full md:w-64 h-10 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-label="Search products"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          <Link href="/cart" className="relative inline-block">
            <Image
              src={cart}
              alt="Cart"
              width={50}
              height={50}
              className="cursor-pointer"
            />
            {items.length > 0 && (
              <span
                className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-full"
                aria-live="polite"
              >
                {items.length}
              </span>
            )}
          </Link>

          <Link href="/login">
            <Image src={login} alt="User login" width={50} height={50} />
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed top-10 right-[10%] w-[50%] bg-white shadow-lg md:hidden animate-slideDown"
          style={{ zIndex: 60 }}
        >
          <nav className="flex flex-col items-center py-6">
            {renderNavLinks()}
          </nav>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
