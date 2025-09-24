"use client";

import Image from "next/image";
import styles from "../styles/BrowseCategory.module.css";

export default function BrowseCategory() {
  const allImages = [
    { src: "/images/house.jpg", label: "Luxury Homes" },
    { src: "/images/house2.jpg", label: "Apartments" },
    { src: "/images/house3.jpg", label: "Villas" },
    { src: "/images/house.jpg", label: "Commercial" },
  ];

  return (
    <div className={styles.browseCategorySection}>
      <div className="container">
      

        {/* Desktop Columns */}
        <div className={styles.browseCategoryRow}>
          <div className={`${styles.browseCategoryCol} ${styles.col1}`}>
              {/* Heading always visible */}
        <div className={styles.browseCategoryTitleWrapper}>
          <h2 className={styles.browseCategoryTitle}>
            Browse Listing <br /> by Category
          </h2>
          <h4 className="my-0">Limited offers available</h4>
        </div>
            <div className={styles.browseCategoryImgWrap}>
              <Image
                src="/images/house.jpg"
                alt="Luxury Homes"
                width={400}
                height={300}
              />
              <div className={styles.imgOverlay}>
                <span>Luxury Homes</span>
              </div>
            </div>
          </div>

          <div className={`${styles.browseCategoryCol} ${styles.col2}`}>
            <div className={styles.browseCategoryImgWrap}>
              <Image
                src="/images/house2.jpg"
                alt="Apartments"
                width={400}
                height={300}
              />
              <div className={styles.imgOverlay}>
                <span>Apartments</span>
              </div>
            </div>
            <div className={styles.browseCategoryImgWrap}>
              <Image
                src="/images/house3.jpg"
                alt="Villas"
                width={400}
                height={300}
              />
              <div className={styles.imgOverlay}>
                <span>Villas</span>
              </div>
            </div>
          </div>

          <div className={`${styles.browseCategoryCol} ${styles.col3}`}>
            <div className={styles.browseCategoryImgWrap}>
              <Image
                src="/images/house.jpg"
                alt="Commercial"
                width={400}
                height={300}
              />
              <div className={styles.imgOverlay}>
                <span>Commercial</span>
              </div>
            </div>
            <div className={styles.browseCategoryImgWrap}>
              <Image
                src="/images/house.jpg"
                alt="Commercial"
                width={400}
                height={300}
              />
              <div className={styles.imgOverlay}>
                <span>Townhouse</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className={styles.mobileScrollRow}>
          {allImages.map((item, index) => (
            <div key={index} className={styles.browseCategoryImgWrap}>
              <Image
                src={item.src}
                alt={item.label}
                width={250}
                height={150}
              />
              <div className={styles.imgOverlay}>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
