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
      <div>
        <label>Category</label>
        <select onChange={(e) => dispatch(setCategory(e.target.value))}>
          <option value="">All</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="fragrances">Fragrances</option>
        </select>
      </div>

      {/* Brand */}
      <div>
        <label>Brand</label>
        <select onChange={(e) => dispatch(setBrand(e.target.value))}>
          <option value="">All</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Huawei">Huawei</option>
        </select>
      </div>

      {/* Rating */}
      <div>
        <label>Minimum Rating</label>
        <input
          type="number"
          min={0}
          max={5}
          step={0.1}
          onChange={(e) => dispatch(setRating(Number(e.target.value)))}
        />
      </div>

      {/* Price Range */}
      <div>
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
