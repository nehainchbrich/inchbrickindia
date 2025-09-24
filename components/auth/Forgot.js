"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../../styles/Auth.module.css";
import IconInput from "../form/IconInput";

export default function Forgot({ onSwitch }) {
  // ✅ Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  // ✅ Initial values
  const initialValues = {
    email: "",
  };

  // ✅ Submit handler
  const handleForgot = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      
      // For now, simulate API call - replace with your actual API endpoint
      const response = await fetch('/api/auth/forgot-password', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const res = await response.json();
      
      if (res.status === true) {
        alert("Password reset link sent to your email! Please check your inbox.");
        onSwitch("login"); // Switch to login form after successful request
      } else {
        alert(`Error: ${res.message || "Failed to send reset link. Please try again."}`);
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Forgot Password</h2>
      <p className={styles.description}>
        {`Enter your email address and we'll send you a link to reset your password.`}
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleForgot}
      >
        {({ isSubmitting }) => (
          <Form className={styles.formClass}>
            {/* Email */}
            <IconInput type="email" name="email" label="Email Address" icon="email" />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </button>
          </Form>
        )}
      </Formik>

      <p className={styles.switchText}>
        Remember your password?{" "}
        <span className={styles.toggleLink} onClick={() => onSwitch("login")}>
          Back to Login
        </span>
      </p>
    </div>
  );
}
