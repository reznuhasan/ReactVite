import { useEffect, useState } from "react";
import Countries from "../Countries/Countries";
import Styles from "./Service.module.css"

const Service=()=>{
    const [countries,setCountries]=useState([])
    useEffect(()=>{
        const loadCountry=async()=>{
            const res=await fetch('https://restcountries.com/v3.1/all')
        const data=await res.json();
        setCountries(data)
        }
        loadCountry();
    },[])
    return(
        <div>
            <h1>Total Countries:{countries.length}</h1>
            <div className={Styles.cards}>
            {
                countries.map(country=><Countries country={country} key={country.name?.common}></Countries>)
            }
            </div>
            
        </div>
    )
}

export default Service;