import { useEffect, useState } from "react"
import Styles from "./Service.module.css"
import Countries from "../Countries/Countries";
const Service=()=>{
    const [coutries,setCountries]=useState([]);

    useEffect(()=>{
        const loadCountries=async()=>{
            const response=await fetch('https://restcountries.com/v3.1/all');
            const data=await response.json();
            setCountries(data);
        }
        loadCountries();
    },[])
    return(
        <div>
            <h1>Total Countries:{coutries.length}</h1>
            <div className={Styles.countries}>
                {
                  coutries.map(country=><Countries country={country} key={country?.name?.common}></Countries>)
                }   
            </div>
        </div>
    )
}

export default Service;

