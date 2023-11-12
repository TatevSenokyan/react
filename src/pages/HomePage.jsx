import React, { useState, useEffect } from "react";
import { fetchData } from "../redux/features/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { FeaturedComponent } from "../components/FeaturedComponent";
import { Trending } from "../components/Trending";


export default function HomePage () {
    const dispatch = useDispatch();
    const {data} = useSelector(state=>state.data);
    //console.log('data', data);

    useEffect(()=>{
        dispatch(fetchData());
    }, []);

    return (
        <div className={`w-full h-full relative flex flex-col justify-between`}>
           <FeaturedComponent data={data.Featured}/>
           <Trending data={data.TrendingNow}/>
        </div>
    );
}