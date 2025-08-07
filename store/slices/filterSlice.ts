import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  category: string;
  brand: string;
  rating: number;
  sortByPrice: "asc" | "desc" | "";
}

const initialState: FilterState = {
  category: "",
  brand: "",
  rating: 0,
  sortByPrice: "",
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
    setSortByPrice: (state, action: PayloadAction<"asc" | "desc" | "">) => {
      state.sortByPrice = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setCategory,
  setBrand,
  setRating,
  setSortByPrice,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
