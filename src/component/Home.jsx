import React, { useEffect,useState} from 'react';

import Title from './Title';
import { json } from 'react-router-dom';
const Home = () => {
    const[allData,setData] = useState([])
    useEffect(()=>{
        fetch('https://freetestapi.com/api/v1/weathers')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    console.log(allData)
    return (
        <div>
            <Title heading={"HOME"}></Title>
            <div className='border-2 py-2 bg-red-50'></div>
            {
                allData.map((data,idx)=> <p className='border-2 p-2 m-2 w-52 mx-auto' key={idx}>{data?.city} : {data?.temperature}&deg;C </p>)
            }
        </div>
    );
};
export default Home;