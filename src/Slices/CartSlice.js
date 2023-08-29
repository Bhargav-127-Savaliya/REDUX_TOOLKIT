import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fatchItems, addItems, deleteItem } from "../API/CartAPI";


const initialState = {
  items: [],
  status: 'idle',
}

export const fatchAsync = createAsyncThunk(
  'cart/fetchItems',
  async () => {
    const response = await fatchItems();
    return response.data;
  }
)
export const addAsync = createAsyncThunk(
  'cart/addItems',
  async (item) => {
    const id = Math.random();
    const { title, brand, image, price } = item;
    const response = await addItems({ id, title, brand, image, price, quantity: 1 });
    return response.data;
  }
);
export const deleteAsync = createAsyncThunk(
  'cart/deleteItems',
  async (id) => {
    await deleteItem(id);
    return id;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fatchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fatchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index =state.items.findIndex(item=>item.id===action.payload)
        state.items.splice(index,1);
      })
  },
});

export default cartSlice.reducer;