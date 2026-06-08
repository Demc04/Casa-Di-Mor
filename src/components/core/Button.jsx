import './Button.css';

export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  as,
  children,
  className = '',
  ...rest
}) {
  const Tag = as || (rest.href ? 'a' : 'button');
  const cls = [
    'cdm-btn',
    `cdm-btn--${variant}`,
    `cdm-btn--${size}`,
    block ? 'cdm-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');
  return <Tag className={cls} {...rest}>{children}</Tag>;
}

export default Button;
