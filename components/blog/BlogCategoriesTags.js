"use client";
import React from 'react'
import styles from "../../styles/blog/Style.module.css";
import Link from "next/link";
import Image from "next/image";
const BlogCategoriesTags = () => {
     const posts = [
    "Why Dubai is a Top Investment Destination",
    "5 Smart Tips for First-Time Home Buyers",
    "Exploring New Luxury Communities in UAE",
    "Why Dubai is a Top Investment Destination",
    "5 Smart Tips for First-Time Home Buyers",
    "Exploring New Luxury Communities in UAE"
  ];
     const tags = [
    "Luxury Dubai Real Estate Expo in Hyderabad",
    "Hyderabad Property expo / event in 2025",
    "Luxury Dubai Real Estate Expo in Hyderabad",
    "Luxury Dubai Real Estate Expo in Hyderabad",
    "Hyderabad Property expo / event in 2025",
  ];

  const categories = [
    "Real Estate",
    "Investment",
    "Luxury Homes",
    "Real Estate",
    "Investment",
    "Luxury Homes",
  ];
  return (
     <div>
        <div className={styles.sidebarBox}>
              <h3>Recent Posts</h3>
              <ol>
                {tags.map((posts, i) => (
                  <li key={i}>
                    <Link href="#">{posts}</Link>
                  </li>
                ))}
              </ol>
            </div>
            <div className={styles.sidebarBox}>
              <h3>Tags</h3>
              <ol>
                {tags.map((tag, i) => (
                  <li key={i}>
                    <Link href="#">{tag}</Link>
                  </li>
                ))}
              </ol>
            </div>
            <div className={styles.sidebarBox}>
              <h3>Top Categories</h3>
              <ol>
                {categories.map((cat, i) => (
                  <li key={i}>
                    <Link href="#">{cat}</Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
  )
}

export default BlogCategoriesTags
