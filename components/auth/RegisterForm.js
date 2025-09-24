"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../../styles/Auth.module.css";
import IconInput from "../form/IconInput";
import PhoneInput from "../form/PhoneInput";

export default function RegisterForm({ onSwitch }) {
  // ✅ Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\+\d{1,4}\s?\d{6,14}$/, "Please enter a valid phone number")
      .required("Phone is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // ✅ Initial form values
  const initialValues = {
    name: "",
    email: "",
    phone: "+91 ", // Default to India
    password: "",
  };

  // ✅ Handle submit
  const handleRegister = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      
      // For now, simulate API call - replace with your actual API endpoint
      const response = await fetch('/api/auth/register', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const res = await response.json();
      
      if (res.status === true) {
        alert("Registration successful! Please login with your credentials.");
        onSwitch("login"); // Switch to login form after successful registration
      } else {
        alert(`Registration failed: ${res.message || "Please try again."}`);
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Register</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({ isSubmitting }) => (
          <Form className={styles.formClass}>
            {/* Name */}
            <IconInput type="text" name="name" label="Full Name" icon="user" />

            {/* Email */}
            <IconInput type="email" name="email" label="Email" icon="email" />

            {/* Phone */}
            <PhoneInput name="phone" label="Phone Number" required />

            {/* Password */}
            <IconInput type="password" name="password" label="Password" icon="password" />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>

      <p>
        Already have an account?{" "}
        <span className={styles.toggleLink} onClick={() => onSwitch("login")}>
          Login
        </span>
      </p>
    </div>
  );
}
