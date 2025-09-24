import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { Mail, Lock, User } from 'lucide-react';
import styles from '../../styles/Auth.module.css';

const IconInput = ({ label, required, icon, ...props }) => {
    const [field, meta] = useField(props);
    
    // Icon mapping
    const getIcon = (iconType) => {
        switch (iconType) {
            case 'email':
                return <Mail size={20} />;
            case 'password':
                return <Lock size={20} />;
            case 'user':
                return <User size={20} />;
            default:
                return null;
        }
    };
    
    return (
        <div className={styles.iconInputContainer}>
            <label htmlFor={field.name} className={styles.iconFieldLabel}>
                {label} {required && <span className={styles.required}>*</span>}
            </label>
            <div className={styles.iconInputWrapper}>
                <div className={styles.iconWrapper}>
                    {getIcon(icon)}
                </div>
                <input 
                    className={`${styles.iconInput} ${meta.touched && meta.error ? styles.iconInputError : ''}`}
                    {...field} 
                    {...props} 
                    autoComplete="off" 
                    placeholder={label}
                />
            </div>
            <ErrorMessage component="div" name={field.name} className={styles.iconFieldError}/>
        </div>
    );
};

export default IconInput;


