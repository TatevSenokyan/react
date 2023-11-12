
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const fetchData = createAsyncThunk('fetchData',
 async(_, thunkAPI)=>{
      return fetch('/data.json').then(resp=>resp.json()).catch(err=>console.log(err));
 }
)
const moviesSlice = createSlice({
    name: 'todolist',
    initialState: {data: []},
    extraReducers:{
        [fetchData.fulfilled]:(state, action)=>{
           console.log('fetch', action);
           state.data = action.payload;
        }
    }
})

export default moviesSlice.reducer;
