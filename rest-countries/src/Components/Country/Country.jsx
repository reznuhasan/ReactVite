import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


const Country=()=>{
    const details=useParams();
    const {name}=details;
    console.log(name)
    const [country,setCountry]=useState();
    useEffect(()=>{
        const loadData=async()=>{
            const response=await fetch(`https://restcountries.com/v3.1/name/${name}`)
            const data=await response.json();
            setCountry(data[0]);
        }
        loadData();
    },[])
    return(
        <div>
            <img src={country?.flags?.png} alt="" />
            <h1>Name:{country?.name?.common}</h1>
        </div>
    )
}
export default Country;