"use client";

interface p{
    id:number;
    name:string;
    title:string
}

import { useEffect, useState } from "react";

const fetchScreen = ()=>{

    const [data,setData] = useState([])

    useEffect(()=>{
          async function fetchApi(){
            const res = await fetch("https://fakestoreapi.com/products");

            const data = await res.json();
            setData(data);

          }
          fetchApi();
    }
    
    ,[])

    return (
        <>
         {data.map((data:p)=>(<li key={data.id}>{data.title}</li>))}
        </>
    )
}

export default fetchScreen