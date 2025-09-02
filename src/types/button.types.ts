export interface ButtonProps {
  icon?: string;
  alt?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'icon';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}
