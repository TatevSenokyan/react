import React, { useState, useEffect } from "react";
import { fetchData } from "../redux/features/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { FeaturedComponent } from "../components/FeaturedComponent";


export default function HomePage () {
    const dispatch = useDispatch();
    const {data} = useSelector(state=>state.data);
    //console.log('data', data);

    useEffect(()=>{
        dispatch(fetchData());
    }, []);

    return (
        <div className={`w-full h-full`}>
           <FeaturedComponent data={data.Featured}/>
        </div>
    );
}