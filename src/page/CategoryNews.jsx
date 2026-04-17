import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    
    useEffect(()=>{
        
    },[])
    return (
        <div>
            <h2>Dragon News Home</h2>

        </div>
    );
};

export default CategoryNews;