import React from 'react';
import styles from './Input.module.css';
import input from '../../../public/assets/img/input.svg';
import type { InputProps } from '../../types/input.types';

const Input: React.FC<InputProps> = ({
  placeholder = 'Найти товары',
  value = '',
  onChange,
  onFocus,
  onBlur,
  className = '',
}) => {
  return (
    <div className={`${styles.inputContainer} ${className}`}>
      <div className={styles.searchIcon}>
        <img src={input} alt="input" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
