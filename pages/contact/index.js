"use client";
import React from 'react'
import GetTouch from '../../components/contact/GetTouch';
import Message from '../../components/contact/Message';
import styles from "../../styles/contact/Style.module.css";
import Map from '../../components/contact/Map';

const index = () => {
  return (
    <div className="container">
  <section className={styles.contactSection}>
    <div className={styles.contactLayout}>
      <div className={`${styles.contactLeft} ${styles.dFlex} ${styles.gap20}`}>
        <GetTouch/>
        <Message/>
        </div>
        <Map/>
    </div>
    </section>
    </div>
  )
}

export default index
