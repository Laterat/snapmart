"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import login from "../../public/assets/login.png";
import cart from "../../public/assets/cart.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { useProductLists } from "@/hooks/useProductLists";

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

  const { allProducts } = useProductLists();

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [highlighted, setHighlighted] = useState(-1);

  const handleSearch = (term = searchTerm) => {
    console.log("handleSearch called with term:", term);
    if (term.trim()) {
      router.push(`/product?search=${encodeURIComponent(term.trim())}`);
    } else {
      router.push("/product");
    }
  };

  useEffect(() => {
    if (searchTerm.length === 0) {
      setSuggestions([]);
      return;
    }

    const termLower = searchTerm.toLowerCase();
    const matchedTitles = allProducts
      .map((product) => product.title)
      .filter((title) => title && title.toLowerCase().includes(termLower));
    setSuggestions(matchedTitles.slice(0, 7));
  }, [searchTerm, allProducts]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setHighlighted(-1);
  }, [suggestions]);

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
          <div className="relative w-full md:w-auto" ref={containerRef}>
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                // if (e.key === "Enter") {
                //   handleSearch();
                // }
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setHighlighted((prev) =>
                    prev < suggestions.length - 1 ? prev + 1 : 0
                  );
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setHighlighted((prev) =>
                    prev > 0 ? prev - 1 : suggestions.length - 1
                  );
                } else if (e.key === "Enter") {
                  if (highlighted >= 0 && suggestions[highlighted]) {
                    e.preventDefault();
                    const selected = suggestions[highlighted];
                    setSearchTerm(selected);
                    setSuggestions([]);
                    handleSearch(selected);
                  } else {
                    handleSearch();
                  }
                }
              }}
              placeholder="Search products"
              className="w-full md:w-64 h-10 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-label="Search products"
              autoComplete="off"
            />
            <FaSearch
              onClick={() => handleSearch()}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            />
            {suggestions.length > 0 && (
              <ul
                className="absolute z-50 w-full bg-white border border-gray-300 rounded-md max-h-60 overflow-y-auto mt-1 shadow-lg"
                role="listbox"
              >
                {suggestions.map((title, index) => (
                  <li
                    key={index}
                    role="option"
                    aria-selected={highlighted === index}
                    tabIndex={0}
                    className={`px-4 py-2 cursor-pointer ${
                      highlighted === index
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                    onClick={() => {
                      setSearchTerm(title);
                      setSuggestions([]);
                      handleSearch(title);
                    }}
                    onMouseEnter={() => {
                      setHighlighted(index);
                    }}
                  >
                    {title}
                  </li>
                ))}
              </ul>
            )}
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
