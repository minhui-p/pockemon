import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePockemonById } from "./thunk";
import {} from "sass";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    loading: true,
  },
  // reducers: {},//동기적 상태 변경

  extraReducers: (builder) => {
    builder
      .addCase(fetchMultiplePockemonById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMultiplePockemonById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchMultiplePockemonById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [1, 2, 3],
  reducers: {
    addToFavorite(state, action) {
      state.push(action.payload.pokemonId);
    },
    removeFromFavorite(state, action) {
      const index = state.indexOf(action.payload.pokemonId);
      if (index !== -1) state.splice(index, 1);
    },
  },
});
