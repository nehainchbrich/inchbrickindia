"use client";
import { useEffect, useState } from "react";
import styles from "../styles/PropertySearch.module.css";

export default function PropertySearch() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // trigger animation once component mounts
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`${styles.propertySearch} ${animate ? styles.animateIn : ""}`}
    >
      <div className="container">
        <div className={styles.propertySell}>
          <div>
            <h4>List your property for sale</h4>
            <button className={styles.sellBtn}>Sell your property</button>
          </div>
        </div>
      </div>
    </section>
  );
}
