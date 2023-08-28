import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fatchProduct } from '../API/ProductAPI';

const initialState = {
  products: [] ,
  status: 'idle',
};


export const fetchAsync = createAsyncThunk(
  'products/fatchProduct',
  async () => {
    const response = await fatchProduct();
    return response.data;
  }
);
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.products  = action.payload;
          });
      },
});

export default productsSlice.reducer;