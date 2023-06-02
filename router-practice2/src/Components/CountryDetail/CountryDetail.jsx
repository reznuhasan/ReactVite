import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Styles from './CountryDetail.module.css'

const CountryDetail = () => {
    const params = useParams();
    const { name } = params;
    const [country, setCountry] = useState()
    useEffect(() => {
        const loadCountry = async () => {
            const res = await fetch(`https://restcountries.com/v3.1/name/${name}
            `)
            const data = await res.json();
            setCountry(data[0])
        }
        loadCountry();
    }, [])
    return (

        <div className={Styles.detailContainer}>
            <div className={Styles.card}>
                <img src={country?.flags.png} alt="" />
                <h1>Name:{country?.name?.common}</h1>
                <h3>Capitals:{country?.capital}</h3>
                <h3>Region:{country?.region}</h3>
                <h3>Languages:{country?.languages?.ara}</h3>
                <h3>Area:{country?.area}</h3>
                <h3>Population:{country?.population}</h3>
            </div>
        </div>
    )
}

export default CountryDetail;