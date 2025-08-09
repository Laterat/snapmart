import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/common/productCard";
import { useProductLists } from "@/hooks/useProductLists";
import Pill from "@/components/common/Pill";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "@/store/slices/cartSlice";
const ProductsPage = () => {
  const { allProducts } = useProductLists();
  const filters = useSelector((state: RootState) => state.filter);

  const productRef = useRef<HTMLDivElement | null>(null);

  const [page, setPage] = useState(1);
  const productPerPage = 25;

  const dispatch = useDispatch();
  const filtered = allProducts.filter(
    (p) =>
      (!filters.category || p.category === filters.category) &&
      (!filters.brand || p.brand === filters.brand) &&
      p.rating >= filters.rating
  );

  if (filters.sortByPrice === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (filters.sortByPrice === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  // Pagination slicing
  const startIndex = (page - 1) * productPerPage;
  const endIndex = startIndex + productPerPage;
  const paginated = filtered.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filtered.length / productPerPage);

  useEffect(() => {
    setPage(1);
  }, [filtered.length]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (productRef.current) {
      productRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page]);

  return (
    <div className="relative ">
      <main className="flex flex-col md:flex-row">
        <div className="sticky  overflow-y-auto  p-4">
          {" "}
          {/*  scrollbar-width: none -ms-overflow-style none */}
          <div className="md:w-63 lg:w-80 bg-white rounded-lg shadow p-4 mt-10">
            <FilterSidebar />
          </div>
        </div>

        <div
          ref={productRef}
          className="flex-1 overflow-y-auto h-[calc(100vh-4rem)]"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold mx-5 mb-3">
            All Products
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {paginated.map((product) => (
              <div key={product.id}>
                <ProductCard {...product} />
                <div className="flex justify-center">
                  <Pill
                    onclick={() => {
                      dispatch(
                        addToCart({
                          id: product.id,
                          title: product.title,
                          price: product.price,
                          thumblain: product.thumbnail,
                          quantity: 1,
                        })
                      );
                    }}
                    label="Add to cart"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 my-4">
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 border rounded ${
                  page === idx + 1 ? "bg-gray-500 text-white" : "bg-white"
                }`}
                onClick={() => setPage(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
