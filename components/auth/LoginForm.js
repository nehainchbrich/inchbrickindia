"use client";
import { Formik, Form } from "formik";
import styles from "../../styles/Auth.module.css";
import IconInput from "../form/IconInput";
import { LoginSchema } from "../../schema/LoginSchema";
// API Configuration
const API_URLS = {
  USER: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/auth/login'
};

// Simple toast notification (you can replace with a proper toast library)
const toastr = {
  error: (message) => {
    alert(`Error: ${message}`);
  },
  success: (message) => {
    alert(`Success: ${message}`);
  }
};

export default function LoginForm({ onSwitch }) {
  const defaultValue = { username: "", password: "" };

  const handleSubmit = async (value, action) => {
    try {
      action.setSubmitting(true);
      
      // For now, simulate API call - replace with your actual API endpoint
      const response = await fetch(`${API_URLS.USER}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const res = await response.json();
      
      if (res.status === true) {
        action.resetForm();
        toastr.success("Login successful!");
        // handleAuth(res.token);
        // Redirect to dashboard or home page
        // router.push('/dashboard');
      } else {
        toastr.error(res.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toastr.error("Network error. Please check your connection and try again.");
    } finally {
      action.setSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Login</h2>

      <Formik
        initialValues={defaultValue}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.formClass}>
            <IconInput type="text" name="username" label="Email ID/Mobile" icon="email" />
            <IconInput type="password" name="password" label="Password" icon="password" />
            
            <div className={styles.forgotLink}>
              <span 
                className={styles.toggleLink} 
                onClick={() => onSwitch("forgot")}
              >
                Forgot Password?
              </span>
            </div>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </Form>
         
        )}
      </Formik>

      <p className={styles.switchText}>
        Don't have an account?{" "}
        <span className={styles.toggleLink} onClick={() => onSwitch("register")}>
          Register
        </span>
      </p>
    </div>
  );
}
