"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../../styles/Auth.module.css";

export default function ChangePassword({ onSwitch }) {
  // ✅ Yup validation schema
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("New Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // ✅ Initial values
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  // ✅ Submit handler
  const handleChangePassword = (values, { setSubmitting, resetForm }) => {
    console.log("Password changed:", values.password);
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <h2>Change Password</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleChangePassword}
      >
        {({ isSubmitting }) => (
          <Form className={styles.formClass}>
            {/* New Password */}
            <Field
              type="password"
              name="password"
              placeholder="New Password"
              className={styles.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />

            {/* Confirm Password */}
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              className={styles.input}
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={styles.error}
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Updating..." : "Update Password"}
            </button>
          </Form>
        )}
      </Formik>

      <p>
        Back to{" "}
        <span className={styles.toggleLink} onClick={() => onSwitch("login")}>
          Login
        </span>
      </p>
    </div>
  );
}
