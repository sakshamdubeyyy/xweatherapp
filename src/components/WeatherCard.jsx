import React from "react";
import styles from "./WeatherCard.module.css"

export default function WeatherCard({title, data}) {
    return(
      <>
        <div className={styles.card}>
          <h3>{title}</h3>
          <p>{data}</p>
        </div>
      </>
    )
  }