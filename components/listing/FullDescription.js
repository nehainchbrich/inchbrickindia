"use client";
import { useState } from "react";
import styles from "../../styles/listing/FullDescription.module.css";

export default function FullDescription() {
  
  return (
    <div className={`${styles.tabSection} ${styles.propertyDescription}`} id="description">
      <h3>Description</h3>
      <p>
        Experience modern living in this beautifully designed 3BHK apartment located in the heart of South Delhi. 
        The home features an open-plan living area, premium flooring, modular kitchen, and ample natural light.
      </p>
      <ul className={styles.propertyHighlights}>
        <li>Spacious Living Room with Balcony</li>
        <li>Modular Kitchen with Chimney & Hob</li>
        <li>3 Bedrooms with Attached Wardrobes</li>
        <li>2 Modern Bathrooms with Premium Fittings</li>
        <li>1500 sqft Carpet Area</li>
      </ul>
    </div>
  );
}
