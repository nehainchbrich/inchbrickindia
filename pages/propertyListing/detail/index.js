"use client";
import React from 'react'

import styles from "../../../styles/listing/Listing.module.css"
import PropertyGallery from '../../../components/listing/PropertyGallery';

import Sidebar from '../../../components/listing/Sidebar';
import PropertyListing from './tabs/Index';
const index = () => {
  return (
    <div className="container">
      <div className={styles.propertyLayout}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <PropertyGallery/>
         <PropertyListing/>
        </div>

        {/* Right Column */}
        <Sidebar />
      </div>
    </div>
  )
}

export default index
