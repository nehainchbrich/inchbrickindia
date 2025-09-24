"use client";
import Image from "next/image";
import styles from "../../styles/PropertyListing.module.css";
import Link from "next/link";
import { MapPin, User, Building } from 'lucide-react';

export default function PropertyListing() {
  const properties = [
    {
      id: 1,
      title: "Montiva by VIDA",
      type: "Apartment",
      typeClass: styles.apartment,
      desc: "Montiva by VIDA – Waterfront Living at Dubai Creek Harbour | Marina Access | Sc...",
      meta: "4 Bed • 3 Bath • 3000 sqft",
      price: "AED 4.4M",
      location: "Dubai Creek Harbour, Dubai",
      developer: "MERAAS",
      agent: "Saurav Kumar",
      img: "/images/house.jpg",
    },
    {
      id: 2,
      title: "Palm View Villa",
      type: "Villa",
      typeClass: styles.villa,
      desc: "Luxury villa with private pool and beach access at Palm Jumeirah.",
      meta: "5 Bed • 6 Bath • 6000 sqft",
      price: "AED 12.8M",
      location: "Palm Jumeirah, Dubai",
      developer: "Nakheel",
      agent: "Riya Sharma",
      img: "/images/house2.jpg",
    },
    {
      id: 3,
      title: "Downtown Townhouse",
      type: "Townhouse",
      typeClass: styles.townhouse,
      desc: "Modern townhouse near Burj Khalifa with skyline views.",
      meta: "3 Bed • 4 Bath • 2500 sqft",
      price: "AED 6.2M",
      location: "Downtown Dubai",
      developer: "Emaar",
      agent: "Amit Verma",
      img: "/images/house3.jpg",
    },
  ];
  return (
    <div className="container">
      <div className={styles.layout}>
        {/* Right: Sidebar + Featured */}
        <aside className={styles.featuredBox}>
          <h3>Filter Properties</h3>
          {/* Filter - Property Type */}
          <div className={styles.filterGroup}>
            <label>Property Type</label>
            <select>
              <option>Any</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Penthouse</option>
              <option>Studio</option>
            </select>
          </div>

          {/* Filter - Bedrooms */}
          <div className={styles.filterGroup}>
            <label>Bedrooms</label>
            <div className="d-flex">
              <input type="checkbox" id="bed1" /> <label htmlFor="bed1">1 BHK</label>
              <br />
              <input type="checkbox" id="bed2" /> <label htmlFor="bed2">2 BHK</label>
              <br />
              <input type="checkbox" id="bed3" /> <label htmlFor="bed3">3 BHK</label>
              <br />
              <input type="checkbox" id="bed4" /> <label htmlFor="bed4">4+ BHK</label>
            </div>
          </div>

          {/* Filter - Bathrooms */}
          <div className={styles.filterGroup}>
            <label>Bathrooms</label>
            <div className="d-flex">
              <input type="checkbox" id="bath1" /> <label htmlFor="bath1">1</label>
              <br />
              <input type="checkbox" id="bath2" /> <label htmlFor="bath2">2</label>
              <br />
              <input type="checkbox" id="bath3" /> <label htmlFor="bath3">3+</label>
            </div>
          </div>

          {/* Filter - Size */}
          <div className={styles.filterGroup}>
            <label>Size (sq ft)</label>
            <input type="number" placeholder="Min" />
            <input type="number" placeholder="Max" style={{ marginTop: "8px" }} />
          </div>

          {/* Filter - Price */}
          <div className={styles.filterGroup}>
            <label>Price Range</label>
            <input type="range" min="0" max="10000000" step="100000" defaultValue="3000000" />
            <div className={styles.rangeValues}>
              <span>₹0</span>
              <span>₹1 Cr+</span>
            </div>
          </div>

          <button className={styles.btnApply}>Apply Filters</button>

          {/* Featured Listings */}
          <h2 className={styles.featuredTitle}>Featured Listings</h2>

          <div className={styles.featuredItem}>
            <Image src="/images/house.jpg" alt="Featured 1" width={100} height={80} className={styles.featuredImg} />
            <div className={styles.featuredBody}>
              <h4>Penthouse in Bangalore</h4>
              <p className={styles.featuredPrice}>₹ 7.2 Cr</p>
            </div>
          </div>

          <div className={styles.featuredItem}>
            <Image src="/images/house2.jpg" alt="Featured 2" width={100} height={80} className={styles.featuredImg} />
            <div className={styles.featuredBody}>
              <h4>Beach House in Goa</h4>
              <p className={styles.featuredPrice}>₹ 3.5 Cr</p>
            </div>
          </div>

          <div className={styles.featuredItem}>
            <Image src="/images/house3.jpg" alt="Featured 3" width={100} height={80} className={styles.featuredImg} />
            <div className={styles.featuredBody}>
              <h4>Smart Apartment in Pune</h4>
              <p className={styles.featuredPrice}>₹ 1.2 Cr</p>
            </div>
          </div>
        </aside>

        {/* Left: Property Listings */}
        <div className={styles.listingList}>
      {properties.map((property) => (
      <Link href="propertyListing/detail/" key={property.id}>
        <div key={property.id} className={styles.listingItem}>
          <Image
            src={property.img}
            alt={property.title}
            width={280}
            height={200}
            className={styles.listingImg}
          />
          <div className={styles.listingBody}>
            <div className="d-flex justify-space-between">
              <h3 className={styles.listingTitle}>{property.title}</h3>
              <div className={`${styles.ribbon} ${property.typeClass}`}>
                {property.type}
              </div>
            </div>
            <p className={styles.textAllipsis}>{property.desc}</p>
            <div className="d-flex justify-space-between">
              <p className={styles.listingMeta}>{property.meta}</p>
              <strong className="text-warning">{property.price}</strong>
            </div>
            <div className={styles.locationInfo}>
              <MapPin size={16} className={styles.locationIcon} />
              <small className="my-0">
                {property.location}
              </small>
            </div>
            <hr />
            <div className="d-flex justify-space-between">
              <div className={styles.developerInfo}>
                <Building size={14} className={styles.buildingIcon} />
                <small>
                  {property.developer}
                </small>
              </div>
              <div className={styles.agentInfo}>
                <User size={14} className={styles.userIcon} />
                <small>
                  {property.agent}
                </small>
              </div>
            </div>
            <span className={styles.btnView}>
              Add to Compare
            </span>
            <span className={styles.btnView}>
              Read More
            </span>
          </div>
        </div>
      </Link>
      ))}
    </div>
      </div>
    </div>
  );
}
