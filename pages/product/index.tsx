import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/common/productCard";
import { useProductLists } from "@/hooks/useProductLists";

const ProductsPage = () => {
  const { allProducts } = useProductLists();
  const filters = useSelector((state: RootState) => state.filter);

  const { category, brand, rating, sortByPrice } = useSelector(
    (state: RootState) => state.filter
  );

  const [page, setPage] = useState(1);
  const productPerPage = 25;

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

  return (
    <section>
      <h1 className="text-2xl ml-80 md:text-3xl font-extrabold">
        All Products
      </h1>
      <main className="flex flex-col md:flex-row gap-6 p-6">
        <FilterSidebar />
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
            {paginated.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 border rounded ${
                  page === idx + 1 ? "bg-blue-500 text-white" : "bg-white"
                }`}
                onClick={() => setPage(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default ProductsPage;
