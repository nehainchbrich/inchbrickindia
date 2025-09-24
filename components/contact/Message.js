"use client";
import React from 'react';
import styles from "../../styles/contact/Style.module.css";

const Message = () => {
  return (
    <aside className={styles.contactRight}>
      <h3>Send us a message</h3>
      <form className={styles.contactFormGrid}>
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Phone" required />
        <textarea rows="5" placeholder="How can we help you?" required></textarea>
        <button type="submit" className={styles.btnApply}>
          Submit
        </button>
      </form>
    </aside>
  )
}

export default Message
