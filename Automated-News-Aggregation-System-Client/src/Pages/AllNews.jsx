import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewsCard from '../Component/NewsCard';

const AllNews = () => {

    const [news , setNews]=useState([])
    console.log(news)

    useEffect(()=>{
        axios.get("http://localhost:3000/allnews")
        .then(data=> setNews(data.data))
    },[])
    return (
        <>
        <div className="">
            <h1 className='text-5xl text-center font-bold m-10'>All news</h1>
        </div>
                <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 w-11/12 mx-auto'>
            {
            news.map(singleNews=> <NewsCard key={singleNews.article_id} singleNews={singleNews} ></NewsCard>)
            }
        </div>
        </>
    );
};

export default AllNews;