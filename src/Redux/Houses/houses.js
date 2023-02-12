import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const LOADING = "LOADING";

const url = "http://localhost:3001/houses";

export const loadHouses = createAsyncThunk(LOADING, async () => {
  const response = await axios.get(url);
  const res = response.data;
  const data = res.map((item) => ({
    id: item.id,
    house_type: item.house_type,
    price: item.price,
    real_price: item.real_price,
    location: item.location,
    owner_number: item.owner_number,
    age: item.age,
    size: item.size,
    rooms: item.rooms,
    bath_rooms: item.bath_rooms,
    ref_number: item.ref_number,
    images_urls: [item.images_urls],
  }));
  return data;
});

export const storeSlice = createSlice({
  name: "houses",
  initialState: [],
  reducers: {},
  extraReducers: {
    [loadHouses.fulfilled]: (state, action) => action.payload,
  },
});

const houseAction = storeSlice.actions;
export { houseAction };
export default storeSlice.reducer;
