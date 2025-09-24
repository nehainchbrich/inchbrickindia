"use client";
import Image from "next/image";
import styles from "../styles/ExploreServices.module.css";

const services = [
  {
    title: "Buy a Home",
    desc: "Find your dream home from our verified listings and expert guidance.",
    icon: "/images/builder.png",
    alt: "Buy",
  },
  {
    title: "Rent a Property",
    desc: "Browse the best rental options in top locations at great prices.",
    icon: "/images/builder.png",
    alt: "Rent",
  },
  {
    title: "Commercial Spaces",
    desc: "Discover office spaces, shops, and more for your business needs.",
    icon: "/images/builder.png",
    alt: "Commercial",
  },
  {
    title: "Expert Advice",
    desc: "Get guidance from our experienced real estate professionals.",
    icon: "/images/builder.png",
    alt: "Advice",
  },
  {
    title: "Sell Your Property",
    desc: "List your property and reach thousands of potential buyers.",
    icon: "/images/builder.png",
    alt: "Sell",
  },
  {
    title: "Legal Assistance",
    desc: "Get help with paperwork, registration, and legal formalities.",
    icon: "/images/builder.png",
    alt: "Legal",
  },
  {
    title: "Home Loans",
    desc: "Easy and quick home loan assistance from top banks and NBFCs.",
    icon: "/images/builder.png",
    alt: "Loan",
  },
  {
    title: "Property Valuation",
    desc: "Get accurate property valuation from our expert team.",
    icon: "/images/builder.png",
    alt: "Valuation",
  },
];

export default function ExploreServices() {
  return (
    <div className={styles.exploreServicesSection}>
      <div className="container">
        <h2 className={styles.exploreServicesTitle}>Explore Our Services</h2>
        <div className={styles.exploreServicesGrid}>
          {services.map((service, i) => (
            <div key={i} className={styles.exploreServiceCard}>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
              <div className={styles.exploreServiceFooter}>
                <button className={styles.readMoreBtn}>Read More</button>
                <span className={styles.serviceIcon}>
                  <Image
                    src={service.icon}
                    alt={service.alt}
                    width={40}
                    height={40}
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
