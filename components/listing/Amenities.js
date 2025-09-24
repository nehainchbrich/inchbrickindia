"use client";
import Image from "next/image";
import styles from "../../styles/listing/Amenities.module.css";

export default function Amenities() {
  const amenities = [
    { src: "/images/sq-ft.png", label: "1500 sqft", alt: "Area" },
    { src: "/images/bedroom.png", label: "3 Bedrooms", alt: "Bedrooms" },
    { src: "/images/bathroom.png", label: "2 Bathrooms", alt: "Bathrooms" },
    { src: "/images/parking.svg", label: "Covered Parking", alt: "Parking" },
    { src: "/images/pool.svg", label: "Swimming Pool", alt: "Pool" },
    { src: "/images/gym.svg", label: "Gymnasium", alt: "Gym" },
    { src: "/images/security.svg", label: "24x7 Security", alt: "Security" },
    { src: "/images/power.svg", label: "Power Backup", alt: "Power Backup" },
  ];

  return (
    <div className={`${styles.tabSection} ${styles.propertyAmenities}`} id="amenities">
      <h3>Features & Amenities</h3>
      <div className={styles.amenitiesGrid}>
        {amenities.map((item, i) => (
          <div className={styles.amenity} key={i}>
            <Image src={item.src} alt={item.alt} width={24} height={24} />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
