import './Eyebrow.css';

export function Eyebrow({ children, tone, spaced = false, as: Tag = 'span', className = '', ...rest }) {
  const toneCls = tone === 'accent' ? 'cdm-eyebrow--accent' : tone === 'light' ? 'cdm-eyebrow--light' : '';
  const text = spaced && typeof children === 'string'
    ? children.toUpperCase().split('').join(' ')
    : children;
  return (
    <Tag className={`cdm-eyebrow ${toneCls} ${className}`} {...rest}>{text}</Tag>
  );
}

export default Eyebrow;
