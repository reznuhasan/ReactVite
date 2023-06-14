import React, { useEffect, useState } from 'react'
import Countries from './Countries';
import Styles from './Service.module.css'
function Service() {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        const loadCountries=async()=>{
            const response=await fetch('https://restcountries.com/v3.1/all')
            const data=await response.json();
            setCountries(data);
        }
        loadCountries();
       
    },[])
  return (
    <div>
      <h1>Total Countries:{countries.length}</h1>
      <div className={Styles.countries}>
        {
            countries.map((country)=><Countries country={country} key={country?.name?.common}></Countries>)
        }
      </div>

    </div>
  )
}

export default Service