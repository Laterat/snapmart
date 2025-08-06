import { useDispatch } from "react-redux";
import {
  setCategory,
  setBrand,
  setRating,
  setPriceRange,
  setSortByPrice,
  resetFilters,
} from "@/store/slices/filterSlice";

const FilterSidebar = () => {
  const dispatch = useDispatch();

  return (
    <aside className="space-y-4 p-4 border rounded-md shadow w-full sm:w-1/4">
      {/* Category */}
      <div className="flex flex-col space-y-3">
        <label className="text-2xl font-semibold">Category</label>
        <select className="border border-gray-500 rounded-sm h-10 px-2 " onChange={(e) => dispatch(setCategory(e.target.value))}>
          <option value="">All</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="fragrances">Fragrances</option>
        </select>
      </div>

      {/* Brand */}
      <div className="flex flex-col space-y-3">
        <label className="text-2xl font-semibold">Brand</label>
        <select onChange={(e) => dispatch(setBrand(e.target.value))}>
          <option value="">All</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Huawei">Huawei</option>
        </select>
      </div>

      {/* Rating */}
      <div className="flex flex-col space-y-3">
        <label>Minimum Rating</label>
        <select onChange={(e) => dispatch(setRating(Number(e.target.value)))}>
        
        </select>
         
      </div>

      {/* Price Range */}
      <div >
        <label>Price Range</label>
        <input
          type="range"
          min={0}
          max={1000}
          step={10}
          onChange={(e) => dispatch(setPriceRange([0, Number(e.target.value)]))}
        />
      </div>

      {/* Sort */}
      <div>
        <label>Sort by Price</label>
        <select
          onChange={(e) => dispatch(setSortByPrice(e.target.value as any))}
        >
          <option value="">None</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <button
        onClick={() => dispatch(resetFilters())}
        className="mt-4 p-2 bg-red-500 text-white rounded"
      >
        Reset Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;
