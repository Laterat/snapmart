import { useDispatch } from "react-redux";
import {
  setCategory,
  setBrand,
  setRating,
  setSortByPrice,
  resetFilters,
} from "@/store/slices/filterSlice";
import Pill from "@/components/common/Pill";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useState, useEffect } from "react";
import axios from "axios";
import { useProductLists } from "@/hooks/useProductLists";

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const { category, brand, rating, sortByPrice } = useSelector(
    (state: RootState) => state.filter
  );

  const { allProducts } = useProductLists();

  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    if (allProducts.length === 0) return;

    let filteredByCategory = allProducts;
    if (category) {
      filteredByCategory = allProducts.filter(
        (product) => product.category === category
      );
    }

    let filteredByBrand = allProducts;
    if (brand) {
      filteredByBrand = allProducts.filter(
        (product) => product.brand === brand
      );
    }

    const updatedCategory = [
      ...new Set(filteredByBrand.map((product) => product.category)),
    ].sort();
    setCategories(updatedCategory);

    const updatedBrand = [
      ...new Set(filteredByCategory.map((product) => product.brand)),
    ].sort();
    setBrands(updatedBrand);
  }, [brand, category, allProducts]);

  return (
    <div className="space-y-4">
      {/* Category */}
      <div className="flex flex-col space-y-3">
        <label className="text-2xl font-semibold">Category</label>
        <select
          value={category}
          className="border border-gray-500 rounded-sm h-10 px-2 "
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={category} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Brand */}
      <div className="flex flex-col space-y-3">
        <label className="text-2xl font-semibold">Brand</label>
        <select
          value={brand}
          className="border border-gray-500 rounded-sm h-10 px-2 "
          onChange={(e) => dispatch(setBrand(e.target.value))}
        >
          <option value="">All</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* Rating */}
      <div className="flex flex-col space-y-3">
        <label className="text-2xl font-semibold">Rating</label>
        <select
          value={rating}
          className="border border-gray-500 rounded-sm h-10 px-2 "
          onChange={(e) => dispatch(setRating(Number(e.target.value)))}
        >
          <option value="">All</option>
          <option value="4">4 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
          <option value="2">2 Stars & Up</option>
          <option value="1">1 Stars & Up</option>
        </select>
      </div>

      {/* Sort */}
      <div className="flex flex-col space-y-3">
        <label className="text-2xl font-semibold">Sort by Price</label>
        <select
          value={sortByPrice}
          className="border border-gray-500 rounded-sm h-10 px-2 "
          onChange={(e) =>
            dispatch(setSortByPrice(e.target.value as "asc" | "desc" | ""))
          }
        >
          <option className="w-full" value="">
            None
          </option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <Pill onclick={() => dispatch(resetFilters())} label=" Reset Filters" />
    </div>
  );
};

export default FilterSidebar;
