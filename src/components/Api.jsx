import React, { useEffect } from 'react'

const Api = () => {
    let isLoading=true;
    let Api="https://graphathon-back.onrender.com";
    const fetchApiData=async (url)=>{
        try{
            const res= await fetch(url);
            const data= await res.json();
            console.log(data);
            isLoading=false;
           
        }catch (error){
            console.log(error);
        }
    };
    useEffect(()=>{
      fetchApiData(Api)
    },[])
    if(isLoading){
        return <>
        <h1>Loading....</h1>
        </>
    }
  return (
    <div>
      Api
    </div>
  )
}

export default Api
