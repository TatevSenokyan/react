
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const fetchData = createAsyncThunk('fetchData',
 async({skip, limit, selected}, thunkAPI)=>{
      try {
        const resp = await fetch('/data.json');
        let data = await resp.json();
        data.TrendingNow.sort((a,b)=>new Date(b.Date).getTime()-new Date(a.Date).getTime());
        if (selected) {
            const newArray = data.TrendingNow.filter((item)=>item.Id!==selected.Id);
            newArray.unshift(selected);
            data.TrendingNow = newArray;
        }
        if (data.TrendingNow.length>limit) {
            data.TrendingNow = data.TrendingNow.slice(skip, limit);
        } 
        return data;
      } catch(err) {
        console.log(err);
      }
 }
)
const moviesSlice = createSlice({
    name: 'movies',
    initialState: {data: []},
    extraReducers:{
        [fetchData.fulfilled]:(state, action)=>{
           state.data = action.payload;
        }
    }
})

export default moviesSlice.reducer;
