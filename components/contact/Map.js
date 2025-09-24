"use client";
import React from 'react';
import styles from "../../styles/contact/Style.module.css";

const Map = () => {
  return (
    <div className={styles.mapWrap}>
      <div className={styles.mapFrame}>
        <iframe
          title="Inch & Brick on Map"
          src="https://www.google.com/maps?q=South%20Delhi&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Map
