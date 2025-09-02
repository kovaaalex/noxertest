import React from 'react';
import styles from './Button.module.css';
import type { ButtonProps } from '../../types/button.types';

const Button: React.FC<ButtonProps> = ({
  icon,
  alt = 'button',
  onClick,
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  type = 'button',
}) => {
  const buttonClass = `
    ${styles.button}
    ${styles[`button--${variant}`]}
    ${styles[`button--${size}`]}
    ${disabled ? styles['button--disabled'] : ''}
    ${className}
  `.trim();

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && (
        <span className={styles.button__icon}>
          <img src={icon} alt={alt} className={styles.button__image} />
        </span>
      )}
      {children && <span className={styles.button__text}>{children}</span>}
    </button>
  );
};

export default Button;
