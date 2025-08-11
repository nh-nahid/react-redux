import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getPosts from "./postsApi"

const initialState = {
    isLoading: false,
    isError: false,
    posts: [],
    error: null
}

// async thunk function
export const fetchPost = createAsyncThunk("posts/fetchPosts", async () => {
        const posts = await getPosts();
        return posts;
})

const postSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state) => {
            state.isError = false;
            state.isLoading = true;

        });

         builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;

        });

         builder.addCase(fetchPost.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message || "An unknown error occured";

        })
    }

})

export default postSlice.reducer;