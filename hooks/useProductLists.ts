import { useEffect, useState } from "react";
import axios from "axios";
import { ProductProps } from "@/interfaces";

export const useProductLists = () => {
  const [topProducts, setTopProducts] = useState<ProductProps[]>([]);
  const [highestProducts, setHighestproducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        const products = res.data.products;

        const topRated = [...products]
          .sort((a: ProductProps, b: ProductProps) => b.rating - a.rating)
          .slice(0, 8);
        setTopProducts(topRated);

        const topDiscount = [...products]
          .sort(
            (a: ProductProps, b: ProductProps) =>
              b.discountPercentage - a.discountPercentage
          )
          .slice(0, 8);
        setHighestproducts(topDiscount);
      } catch (err) {
        console.error("Failed to fetch Products", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { topProducts, highestProducts, loading };
};
