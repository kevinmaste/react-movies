import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {movies$} from "./movies";

export const fetchData =  createAsyncThunk(
    'movies/fectchMovies',
    async (arg, thunkAPI)=>{
        const response = await movies$
        return response
    }
)
const initialState={
    status: null,
    data:[]
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        removeItem:(state,action) => {
            state.data = state.data.filter((item) => item.id !== action.payload.id)
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchData.pending,(state)=>{
                state.status = 'loading'
                console.log('im in')
            })
            .addCase(fetchData.fulfilled,(state,action)=>{
                state.status = 'success'
                state.data= action.payload
            });
    },
});
export const {removeItem}=moviesSlice.actions
export const selectData = (state)=>state.movies.data
export const selectStatus = (state)=> state.movies.status

export default moviesSlice.reducer;