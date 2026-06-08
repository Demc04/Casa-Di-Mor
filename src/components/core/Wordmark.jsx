import './Wordmark.css';

export function Wordmark({ size = 32, tone, className = '', style, ...rest }) {
  const color = tone === 'light' ? 'var(--text-on-dark)' : tone === 'accent' ? 'var(--accent-strong)' : undefined;
  return (
    <span className={`cdm-wm ${className}`} style={{ fontSize: size, color, ...style }} {...rest}>Casa Di Mor</span>
  );
}

export default Wordmark;
