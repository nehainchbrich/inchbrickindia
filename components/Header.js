"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [propertyOpen, setPropertyOpen] = useState(false); // mobile dropdown

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => {
    setNavOpen(false);
    setPropertyOpen(false);
  };

  return (
    <div className={styles.navigation}>
      <div className="container">
        <header className={styles.header}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/images/logo.png" alt="Logo" width={120} height={40} />
            </Link>
          </div>

          {/* Navbar */}
          <nav
            className={`${styles.navbar} ${navOpen ? styles.active : ""}`}
            id="navbar"
          >
            <button
              className={styles.closeNavBtn}
              aria-label="Close navigation"
              onClick={closeNav}
            >
              &times;
            </button>

            <Link href="/propertyListing/" onClick={closeNav}>
              Listing
            </Link>
            <Link href="/blog/" onClick={closeNav}>
              Blogs
            </Link>
            <Link href="/about/" onClick={closeNav}>
              About
            </Link>

            {/* Property Dropdown */}
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault(); // prevent page jump
                setPropertyOpen(!propertyOpen);
              }}
            >
              Property <span className="dropdown-arrow">▼</span>
            </Link>

            <div
              className={`${styles.dropdownMenu} ${
                propertyOpen ? styles.showMobile : ""
              }`}
            >
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownLinks}>
                  {/* Buy Property */}
                  <div className={styles.dropdownSection}>
                    <h4>Buy Property</h4>
                    <ul>
                      <li>
                        <Link href="#apartments">Apartments</Link>
                      </li>
                      <li>
                        <Link href="#villas">Villas</Link>
                      </li>
                      <li>
                        <Link href="#plots">Plots</Link>
                      </li>
                      <li>
                        <Link href="#farmhouses">Farmhouses</Link>
                      </li>
                      <li>
                        <Link href="#penthouses">Penthouses</Link>
                      </li>
                    </ul>
                  </div>

                  {/* Rent Property */}
                  <div className={styles.dropdownSection}>
                    <h4>Rent Property</h4>
                    <ul>
                      <li>
                        <Link href="#rent-apartments">Rent Apartments</Link>
                      </li>
                      <li>
                        <Link href="#rent-villas">Rent Villas</Link>
                      </li>
                      <li>
                        <Link href="#rent-offices">Rent Offices</Link>
                      </li>
                      <li>
                        <Link href="#rent-shops">Rent Shops</Link>
                      </li>
                      <li>
                        <Link href="#rent-warehouses">Rent Warehouses</Link>
                      </li>
                    </ul>
                  </div>

                  {/* Commercial */}
                  <div className={styles.dropdownSection}>
                    <h4>Commercial</h4>
                    <ul>
                      <li>
                        <Link href="#office-spaces">Office Spaces</Link>
                      </li>
                      <li>
                        <Link href="#retail-spaces">Retail Spaces</Link>
                      </li>
                      <li>
                        <Link href="#industrial">Industrial</Link>
                      </li>
                      <li>
                        <Link href="#hotels">Hotels</Link>
                      </li>
                      <li>
                        <Link href="#land">Land</Link>
                      </li>
                    </ul>
                  </div>

                  {/* Services */}
                  <div className={styles.dropdownSection}>
                    <h4>Services</h4>
                    <ul>
                      <li>
                        <Link href="#property-valuation">
                          Property Valuation
                        </Link>
                      </li>
                      <li>
                        <Link href="#legal-services">Legal Services</Link>
                      </li>
                      <li>
                        <Link href="#home-loans">Home Loans</Link>
                      </li>
                      <li>
                        <Link href="#property-management">
                          Property Management
                        </Link>
                      </li>
                      <li>
                        <Link href="#investment-advisory">
                          Investment Advisory
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Featured Property Image (hidden on mobile) */}
                <div className={styles.dropdownImage}>
                  <Image
                    src="/images/house.jpg"
                    alt="Featured Property"
                    width={250}
                    height={180}
                  />
                  <div className={styles.dropdownImageOverlay}>
                    <h3>Featured Property</h3>
                    <p>Luxury Villa in Prime Location</p>
                    <span className="price">₹2.5 Cr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Links */}
            <Link href="/contact/" onClick={closeNav}>
              Contact
            </Link>
            <Link href="/faq/" onClick={closeNav}>
              Faq
            </Link>

            {/* Sticky Login/Register on Mobile */}
            <div className={styles.mobileActions}>
              <Link href="/auth" className={styles.login} onClick={closeNav}>
                Login
              </Link>
              <Link
                href="/auth/register"
                className={styles.register}
                onClick={closeNav}
              >
                Register
              </Link>
            </div>
          </nav>

          {/* Actions */}
          <div className={styles.headerActions}>
            <button className={styles.loginBtn}>
              <Link href="/auth">Login</Link>
            </button>
            <button
              className={styles.menuToggle}
              onClick={toggleNav}
              aria-label="Open navigation"
            >
              &#9776;
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`${styles.mobileOverlay} ${navOpen ? styles.active : ""}`}
        onClick={closeNav}
      ></div>
    </div>
  );
}
