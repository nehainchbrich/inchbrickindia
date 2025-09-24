"use client";
import React from 'react'
import BlogCategoriesTags from '../../../components/blog/BlogCategoriesTags'
import Articles from '../../../components/blog/detail/Articles'
import Comments from '../../../components/blog/detail/Comments'
import styles from "../../../styles/blog/Detail.module.css"
const index = () => {
  return (
    
<main className="container">
    <div className={styles.blogDetailContainer}>
        <div>
    <Articles/>
    <Comments/>
  </div>

   <BlogCategoriesTags/>
</div>
  </main>


  )
}

export default index
