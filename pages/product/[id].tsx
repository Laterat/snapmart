import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import { ProductProps } from "@/interfaces";
import ProductDetail from "@/components/ProductDetail";

export default function propertyDeatilPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Failed to fetch the product", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-2xl font-semibold">Loading...</p>;
  }
  if (!product) {
    return <p className="text-2xl font-semibold">Property Not Found</p>;
  }
  return <ProductDetail />;
}
