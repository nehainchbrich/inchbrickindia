import React, { useState, useEffect, useRef } from 'react';
import { ErrorMessage, useField } from 'formik';
import { Phone } from 'lucide-react';
import styles from '../../styles/Auth.module.css';

const PhoneInput = ({ label, required, ...props }) => {
    const [field, meta, helpers] = useField(props);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    
    // Country data with codes and flags
    const countries = [
        { code: '+1', name: 'US', flag: '🇺🇸', fullName: 'United States' },
        { code: '+91', name: 'IN', flag: '🇮🇳', fullName: 'India' },
        { code: '+44', name: 'GB', flag: '🇬🇧', fullName: 'United Kingdom' },
        { code: '+86', name: 'CN', flag: '🇨🇳', fullName: 'China' },
        { code: '+81', name: 'JP', flag: '🇯🇵', fullName: 'Japan' },
        { code: '+49', name: 'DE', flag: '🇩🇪', fullName: 'Germany' },
        { code: '+33', name: 'FR', flag: '🇫🇷', fullName: 'France' },
        { code: '+61', name: 'AU', flag: '🇦🇺', fullName: 'Australia' },
        { code: '+55', name: 'BR', flag: '🇧🇷', fullName: 'Brazil' },
        { code: '+7', name: 'RU', flag: '🇷🇺', fullName: 'Russia' },
        { code: '+82', name: 'KR', flag: '🇰🇷', fullName: 'South Korea' },
        { code: '+65', name: 'SG', flag: '🇸🇬', fullName: 'Singapore' },
        { code: '+971', name: 'AE', flag: '🇦🇪', fullName: 'UAE' },
        { code: '+966', name: 'SA', flag: '🇸🇦', fullName: 'Saudi Arabia' },
        { code: '+92', name: 'PK', flag: '🇵🇰', fullName: 'Pakistan' },
        { code: '+880', name: 'BD', flag: '🇧🇩', fullName: 'Bangladesh' },
        { code: '+94', name: 'LK', flag: '🇱🇰', fullName: 'Sri Lanka' },
        { code: '+977', name: 'NP', flag: '🇳🇵', fullName: 'Nepal' },
    ];
    
    // Default to India
    const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === '+91') || countries[0]);
    
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setIsDropdownOpen(false);
        
        // Extract the phone number part (without country code)
        let phoneNumber = '';
        if (field.value) {
            // Remove any existing country code and get just the phone number
            phoneNumber = field.value.replace(/^\+\d{1,4}\s*/, '').trim();
        }
        
        // Update with new country code and existing phone number
        const newValue = phoneNumber ? `${country.code} ${phoneNumber}` : `${country.code} `;
        helpers.setValue(newValue);
    };
    
    const handlePhoneChange = (e) => {
        const inputValue = e.target.value;
        
        // The input only shows the phone number part (without country code)
        // So we just need to combine it with the current country code
        const phoneNumber = inputValue.trim();
        const newValue = phoneNumber ? `${selectedCountry.code} ${phoneNumber}` : `${selectedCountry.code} `;
        
        helpers.setValue(newValue);
    };
    
    return (
        <div className={styles.phoneInputContainer}>
            <label htmlFor={field.name} className={styles.iconFieldLabel}>
                {label} {required && <span className={styles.required}>*</span>}
            </label>
            <div className={styles.phoneInputWrapper}>
                <div className={styles.iconWrapper}>
                    <Phone size={20} />
                </div>
                
                {/* Country Code Dropdown */}
                <div className={styles.countryDropdown} ref={dropdownRef}>
                    <button
                        type="button"
                        className={styles.countryButton}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <span className={styles.countryFlag}>{selectedCountry.flag}</span>
                        <span className={styles.countryCode}>{selectedCountry.code}</span>
                        <span className={styles.dropdownArrow}>▼</span>
                    </button>
                    
                    {isDropdownOpen && (
                        <div className={styles.countryList}>
                            {countries.map((country) => (
                                <button
                                    key={country.code}
                                    type="button"
                                    className={`${styles.countryOption} ${selectedCountry.code === country.code ? styles.selected : ''}`}
                                    onClick={() => handleCountrySelect(country)}
                                >
                                    <span className={styles.countryFlag}>{country.flag}</span>
                                    <span className={styles.countryCode}>{country.code}</span>
                                    <span className={styles.countryName}>{country.name}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                
                {/* Phone Number Input */}
                <input
                    className={`${styles.phoneInput} ${meta.touched && meta.error ? styles.iconInputError : ''}`}
                    value={field.value ? field.value.substring(selectedCountry.code.length).trim() : ''}
                    onChange={handlePhoneChange}
                    placeholder="Enter phone number"
                    autoComplete="off"
                    {...props}
                />
            </div>
            <ErrorMessage component="div" name={field.name} className={styles.iconFieldError}/>
        </div>
    );
};

export default PhoneInput;
