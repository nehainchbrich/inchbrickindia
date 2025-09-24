"use client";
import React from 'react'
import styles from "../../styles/blog/Style.module.css";
import Link from "next/link";
import Image from "next/image";
const BlogList = () => {
      const blogPosts = [
    {
      id: 1,
      title: "Top Real Estate Market Trends in 2025",
      category: "Market",
      time: "5 min read",
      excerpt: "From affordable housing to luxury demand—see what’s shaping the market this year.",
      image: "/images/house.jpg",
    },
    {
      id: 2,
      title: "Vastu Tips to Improve Your Home Energy",
      category: "Guides",
      time: "4 min read",
      excerpt: "Simple changes that can elevate your home’s positivity and comfort.",
      image: "/images/house2.jpg",
    },
    {
      id: 3,
      title: "How to Get the Best Home Loan Rates",
      category: "Finance",
      time: "6 min read",
      excerpt: "A practical checklist to secure the lowest interest rates and quick approvals.",
      image: "/images/house3.jpg",
    },
    {
      id: 4,
      title: "Interior Design Ideas for Compact Spaces",
      category: "Design",
      time: "3 min read",
      excerpt: "Smart storage and layout ideas to make small homes feel bigger.",
      image: "/images/slides-img.jpg",
    },
    {
      id: 5,
      title: "How to Get the Best Home Loan Rates",
      category: "Finance",
      time: "6 min read",
      excerpt: "A practical checklist to secure the lowest interest rates and quick approvals.",
      image: "/images/house3.jpg",
    },
  ];
  return (
     <div>
            {blogPosts.map((post) => (
                 <Link href="blog/detail/" className={styles.blogImageLink}>
              <article key={post.id} className={styles.blogCard}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={200}
                    height={159}
                    className={styles.blogImage}
                  />
                
                <div className={styles.blogContent}>
                  <div className={styles.blogMeta}>
                    <span>{post.category}</span> • <span>{post.time}</span>
                  </div>
                  <h3 className={styles.blogTitle}>
                    <span>{post.title}</span>
                  </h3>
                  <p className={styles.blogExcerpt}>{post.excerpt}</p>
                  <span className={styles.blogReadMore}>
                    Read more →
                  </span>
                </div>
              
              </article>
                </Link>
            ))}
          </div>
  )
}

export default BlogList
