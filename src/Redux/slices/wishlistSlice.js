import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        // add to wishlist - when add to wishlist button clicked in view
        addToWishlist: (state, action) => {
            state.push(action.payload)
        },
        //remove item from wishlist - when delete button clicked in wishlist
        removeWishlistItem: (state, action) => {
            return state.filter(item => item.id != action.payload)
        }
    }
})

export const { addToWishlist, removeWishlistItem } = wishlistSlice.actions
export default wishlistSlice.reducer