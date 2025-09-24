"use client";
import { useState } from "react";
import LoginForm from '../../components/auth/LoginForm'
import RegisterForm from '../../components/auth/RegisterForm'
import Forgot from '../../components/auth/Forgot'
import styles from "../../styles/Auth.module.css";

const Index = () => {
  const [activeForm, setActiveForm] = useState("login"); // Default to login form

  const handleFormSwitch = (formType) => {
    setActiveForm(formType);
  };
 
  return (
    <section className={styles.authSection}>
      <div className={styles.container}>
        <div className={styles.authBox}>
          {/* Form Toggle Buttons */}
       

          {/* Render Active Form */}
          {activeForm === "login" ? (
            <LoginForm onSwitch={handleFormSwitch} />
          ) : activeForm === "register" ? (
            <RegisterForm onSwitch={handleFormSwitch} />
          ) : (
            <Forgot onSwitch={handleFormSwitch} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Index
