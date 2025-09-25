"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/FindHome.module.css"

export default function FindHome() {
  const [formData, setFormData] = useState({
    search: "",
    type: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // 👉 You can add router push or API call here
  };

  return (
    <section className={styles.findHome}>
      <div className="container">
        <div className={`${styles.dFlex} ${styles.alignItemsCenter} ${styles.justifySpaceBetween}`}>
          {/* Left side: Heading + Form */}
          <div>
            <h2>
              Lets Find Your <span>Dream Home</span>
            </h2>

            <form className={styles.findHomeForm} onSubmit={handleSubmit}>
              {/* Search Input */}
              <div className={styles.inputGroup}>
                <span className={styles.searchIcon}>
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="search"
                  placeholder="Search for location, property, etc."
                  value={formData.search}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.dFlexMobile}>
              {/* Select Dropdown */}
              <div className={styles.selectGroup}>
                <span className={styles.selectLabel}>Type</span>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="">Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="plot">Plot</option>
                </select>
              </div>
           
              {/* Submit Button */}
              <button type="submit" className={styles.browseBtn}>
                Browse
              </button>
              </div>
            </form>
          </div>

          {/* Right side: Explore Property */}
          <div className={styles.exploreProperty}>
            <Image
              src="/images/right-arrow.png"
              alt="Explore Property"
              width={40}
              height={40}
            />
            Explore <br /> Properties
          </div>
        </div>
      </div>
    </section>
  );
}
