import './Tag.css';

export function Tag({ variant = 'outline', children, className = '', ...rest }) {
  return (
    <span className={`cdm-tag cdm-tag--${variant} ${className}`} {...rest}>{children}</span>
  );
}

export default Tag;
