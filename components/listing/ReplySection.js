"use client";
import { useState } from "react";
import styles from "../../styles/listing/ReplySection.module.css";

export default function ReplySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Reply submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="enquiry" className={`${styles.replySection} tab-section`}>
      <h3>Leave a Reply</h3>
      <form className={styles.replyForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your reply..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.btnSubmit}>
          Post Reply
        </button>
      </form>
    </section>
  );
}
