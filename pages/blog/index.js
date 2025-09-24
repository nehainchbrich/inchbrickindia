"use client";
import Link from "next/link";
import styles from "../../styles/blog/Style.module.css";
import BlogCategoriesTags from "../../components/blog/BlogCategoriesTags";
import BlogList from "../../components/blog/BlogList";

export default function index() {

  return (
    <div className="container">
      <section className={styles.blogListing}>
        {/* Hero Section */}
        <div className={styles.blogHero}>
          <div className={styles.blogHeroText}>
            <h2>Insights on Real Estate</h2>
            <p>News, guides, and tips to make smarter property decisions.</p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className={styles.blogGrid}>
          {/* Left Column - Blog Cards */}
        <BlogList/>

          {/* Right Column - Sidebar */}
        <BlogCategoriesTags/>
        </div>

        {/* Pagination */}
        <div className={styles.blogPagination}>
          <Link href="#" className={`${styles.pageLink} ${styles.active}`}>
            1
          </Link>
          <Link href="#" className={styles.pageLink}>
            2
          </Link>
          <Link href="#" className={styles.pageLink}>
            3
          </Link>
          <Link href="#" className={styles.pageLink}>
            Next →
          </Link>
        </div>
      </section>
    </div>
  );
}
