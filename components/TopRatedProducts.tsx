"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/common/productCard";
import { ProductProps } from "@/interfaces";

const TopRatedProducts: React.FC = () => {
  const [topProducts, setTopProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        const sorted = res.data.products
          .sort((a: ProductProps, b: ProductProps) => b.rating - a.rating)
          .slice(0, 8);
        setTopProducts(sorted);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="mt-15 mx-10">
      <h1 className="text-2xl mb-10 md:text-5xl font-extrabold">
        Top Rated Products
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              images={product.images}
              title={product.title}
              price={product.price}
              rating={product.rating}
              discountPercentage={product.discountPercentage}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default TopRatedProducts;
