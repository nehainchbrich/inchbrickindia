"use client";
import Image from "next/image";
import styles from "../../styles/listing/Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.propertySidebar}>
      <div className={styles.featuredBox}>
        <h3>Similar Listings</h3>
        <div className={styles.featuredItem}>
          <Image className={styles.featuredImg} src="/images/house2.jpg" alt="Featured 1" width={100} height={80} />
          <div className={styles.featuredBody}>
            <h4>Modern Villa in Hyderabad</h4>
            <p className={styles.featuredPrice}>₹ 4.8 Cr</p>
          </div>
        </div>
        <div className={styles.featuredItem}>
          <Image className={styles.featuredImg} src="/images/house3.jpg" alt="Featured 2" width={100} height={80} />
          <div className={styles.featuredBody}>
            <h4>Smart Apartment in Pune</h4>
            <p className={styles.featuredPrice}>₹ 1.2 Cr</p>
          </div>
        </div>
      </div>

      <div className={styles.enquiryBox}>
        <h3>Enquire Now</h3>
        <div className={styles.filterGroup}>
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className={styles.filterGroup}>
          <label>Phone</label>
          <input type="text" placeholder="Your Phone" />
        </div>
        <div className={styles.filterGroup}>
          <label>Message</label>
          <textarea rows="3" placeholder="I am interested in this property..."></textarea>
        </div>
        <button className={styles.btnApply}>Submit</button>
      </div>
    </aside>
  );
}
