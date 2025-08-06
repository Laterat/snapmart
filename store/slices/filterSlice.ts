import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  category: string;
  brand: string;
  rating: number;
  priceRange: [number, number];
  sortByPrice: "asc" | "desc" | null;
}

const initialState: FilterState = {
  category: "",
  brand: "",
  rating: 0,
  priceRange: [0, 1000],
  sortByPrice: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setBrand: (state, action: PayloadAction<string>) => {
      state.brand = action.payload;
    },
    setRating: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    setSortByPrice: (state, action: PayloadAction<"asc" | "desc" | null>) => {
      state.sortByPrice = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setCategory,
  setBrand,
  setRating,
  setPriceRange,
  setSortByPrice,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
