"use client";
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope, FaClock } from "react-icons/fa";
import styles from "../../styles/contact/Style.module.css";
export default function GetTouch() {
  return (
    <div className={styles.contactCard}>
      <h2>Let's Get in touch</h2>
      <p>
        We would love to hear from you. Reach us via the details below or send us a message.
      </p>

      <div className={styles.contactInfoGrid}>
        <div>
          <h4>Office</h4>
          <p>
            <FaMapMarkerAlt className={styles.icon} /> &nbsp; Brick Realty, 123
            Business Center, South Delhi, New Delhi, 110016
          </p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>
            <FaMobileAlt className={styles.icon} /> &nbsp; +91 99999 99999,{" "}
            <FaEnvelope className={styles.icon} /> hello@inchbrick.com
          </p>
        </div>

        <div>
          <h4>Hours</h4>
          <p>
            <FaClock className={styles.icon} /> &nbsp; Mon - Sat: 10:00 AM - 7:00 PM,
            Sun: Closed
          </p>
        </div>
      </div>
    </div>
  );
}
