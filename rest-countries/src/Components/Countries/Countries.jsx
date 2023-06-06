import { Link } from 'react-router-dom';
import Styles from './Countries.module.css'

const Countries=(props)=>{
    const {name,capital,population}=props.country;
    return(
        <div className={Styles.card}>
           <h1>Name:{name?.common.slice(0,10)}</h1>
           <h3>Capital:{capital}</h3>
           <h3>Population:{population}</h3>
           <button><Link to={name?.common}>More Details</Link></button>
        </div>
    )
}

export default Countries;