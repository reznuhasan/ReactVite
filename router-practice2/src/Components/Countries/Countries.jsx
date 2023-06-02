import { Link } from "react-router-dom";
import Styles from "./Countries.module.css"
const Countries=(props)=>{
    const {name,capital,region,languages,area,population,tld}=props.country;
    return(
        <div className={Styles.card}>
            <h1>Name:{name?.common}</h1>
            <h5>Capitals:{capital}</h5>
            <h5>Region:{region}</h5>
            <h5>Languages:{languages?.ara}</h5>
            <h5>Area:{area}</h5>
            <h5>Population:{population}</h5>
            <button><Link to={`/service/${name?.common}`}>Show Details</Link></button>
        </div>
    )
}

export default Countries;