"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/common/productCard";
import { ProductProps } from "@/interfaces";

const HighestDiscountProduct: React.FC = () => {
  const [highestProducts, setHighestproducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        const sorted = res.data.products
          .sort(
            (a: ProductProps, b: ProductProps) =>
              b.discountPercentage - a.discountPercentage
          )
          .slice(0, 8);
        setHighestproducts(sorted);
      } catch (err) {
        console.error("fetching error", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <section className="mt-15 mx-10">
      <h1 className="text-2xl mb-10 md:text-5xl font-extrabold">
        Highest Discount Products
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {highestProducts.map((product) => (
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

export default HighestDiscountProduct;
