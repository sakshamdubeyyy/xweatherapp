import React from "react";
import { useState } from "react";
import styles from "./SearchComponent.module.css"


export default function SearchComponent ({onSearch}){
    const [city, setCity] = useState('');
  
    const handleSearch = () => {
      onSearch(city);
    }
  
    return(
      <div className={styles.search}>
        <input className={styles.input} value={city} onChange={e => setCity(e.target.value)} placeholder='Search city name' />
        <button className={styles.button} onClick={handleSearch}>Search</button>
      </div>
    )
  }