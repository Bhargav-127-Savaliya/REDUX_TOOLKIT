import { createAsyncThunk , createSlice } from "@reduxjs/toolkit"
import { fatchItems , addItems } from "../API/CartAPI";


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
        const {id,title,brand,image,price} = item;
        const response = await addItems(id,title,brand,image,price);
        return response.data;
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
      },
    });

export default cartSlice.reducer;