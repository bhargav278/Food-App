import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        remove: (state,action) => {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id!==id.id)
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
 
})

export const {addItem,clearCart,remove } = cartSlice.actions

export default cartSlice.reducer