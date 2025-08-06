import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/common/productCard";
import { ProductProps } from "@/interfaces";

const ProductsPage = () => {
  // const [allProducts, setAllProducts] = useState([]);
  const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
  const filters = useSelector((state: RootState) => state.filter);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      setAllProducts(res.data.products);
    };
    fetchData();
  }, []);

  const filtered = allProducts.filter(
    (p) =>
      (!filters.category || p.category === filters.category) &&
      (!filters.brand || p.brand === filters.brand) &&
      p.rating >= filters.rating &&
      p.price >= filters.priceRange[0] &&
      p.price <= filters.priceRange[1]
  );

  if (filters.sortByPrice === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (filters.sortByPrice === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <main className="flex flex-col md:flex-row gap-6 p-6">
      <FilterSidebar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {filtered.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
};

export default ProductsPage;
