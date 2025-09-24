import React from 'react'
import { ErrorMessage, useField } from 'formik'
import styles from '../../styles/Auth.module.css'

const TextField = ({label, required, ...props}) => {
    const [field, meta] = useField(props);
    
    return (
        <div className={styles.fieldContainer}>
            <label htmlFor={field.name} className={styles.fieldLabel}>
                {label} {required && <span className={styles.required}>*</span>}
            </label>
            <input 
                className={`${styles.fieldInput} ${meta.touched && meta.error ? styles.fieldInputError : ''}`}
                {...field} 
                {...props} 
                autoComplete="off" 
                placeholder={label}
            />
            <ErrorMessage component="div" name={field.name} className={styles.fieldError}/>
        </div>
    )
}

export default TextField
