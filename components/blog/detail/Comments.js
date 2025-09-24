"use client";
import { useState } from "react";
import styles from "../../../styles/blog/Comments.module.css";

export default function Comments() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // here you can send data to API
    setFormData({ name: "", email: "", comment: "" });
  };

  return (
    <section className={styles.commentsSection}>
      <h3>Leave a Reply</h3>
      <form className={styles.commentForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="comment"
          rows="5"
          placeholder="Your Comment"
          required
          value={formData.comment}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Post Comment</button>
      </form>
    </section>
  );
}
