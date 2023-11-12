import React, { useState, useEffect } from "react";
import { fetchData } from "../redux/features/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { FeaturedComponent } from "../components/FeaturedComponent";
import { Trending } from "../components/Trending";


export default function HomePage () {
    const dispatch = useDispatch();
    const {data} = useSelector(state=>state.data);
    //console.log('data', data);
    const [selected, setSelected] = useState(sessionStorage.getItem("movie") ? JSON.parse(sessionStorage.getItem("movie")) : null);

    useEffect(()=>{
        dispatch(fetchData({skip: 0, limit: 50, selected}));
    }, []);

    const handleSelect = (item) => {
        setSelected(item);
        sessionStorage.setItem("movie", JSON.stringify(item));
    }

    return (
        <div className={`w-full h-full relative flex flex-col justify-between`}>
           <FeaturedComponent data={selected ? selected : data.Featured}/>
           <Trending data={data.TrendingNow} handleSelect={handleSelect}/>
        </div>
    );
}