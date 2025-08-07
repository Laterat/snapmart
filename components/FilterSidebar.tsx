import { useDispatch } from "react-redux";
import {
  setCategory,
  setBrand,
  setRating,
  setSortByPrice,
  resetFilters,
} from "@/store/slices/filterSlice";
import Pill from "@/components/common/Pill";

const FilterSidebar = () => {
  const dispatch = useDispatch();

  return (
    <aside className="space-y-4 p-4 border rounded-md shadow w-full sm:w-1/4">
      {/* Category */}
      <div className="flex flex-col space-y-3">
        <label className="text-2xl font-semibold">Category</label>
        <select
          className="border border-gray-500 rounded-sm h-10 px-2 "
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          <option value="">All</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="fragrances">Fragrances</option>
        </select>
      </div>

      {/* Brand */}
      <div className="flex flex-col space-y-3">
        <label className="text-2xl font-semibold">Brand</label>
        <select
          className="border border-gray-500 rounded-sm h-10 px-2 "
          onChange={(e) => dispatch(setBrand(e.target.value))}
        >
          <option value="">All</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Huawei">Huawei</option>
        </select>
      </div>

      {/* Rating */}
      <div className="flex flex-col space-y-3">
        <label className="text-2xl font-semibold">Rating</label>
        <select
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
          className="border border-gray-500 rounded-sm h-10 px-2 "
          onChange={(e) => dispatch(setSortByPrice(e.target.value as any))}
        >
          <option className="w-full" value="">
            None
          </option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <Pill onclick={() => dispatch(resetFilters())} label=" Reset Filters" />
    </aside>
  );
};

export default FilterSidebar;
