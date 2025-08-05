"use client";

import { useProductLists } from "@/hooks/useProductLists";
import ProductCard from "@/components/common/productCard";


const HighestDiscountProduct: React.FC = () => {
  const {highestProducts, loading }=useProductLists();

  return (
    <section className="mt-15 mx-10 mb-20">
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
