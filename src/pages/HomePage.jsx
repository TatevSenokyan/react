import React, { useState, useEffect } from "react";
import { fetchData } from "../redux/features/moviesSlice";
import { useDispatch, useSelector } from "react-redux";


export default function HomePage () {
    const dispatch = useDispatch();
    const {data} = useSelector(state=>state.data);
    console.log('data', data);

    useEffect(()=>{
        dispatch(fetchData())
    }, []);
    
    return (
        <div className="">
           gfhghfghdg
        </div>
    );
}