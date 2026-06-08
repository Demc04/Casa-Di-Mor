import './Divider.css';

export function Divider({ label, tone, className = '', ...rest }) {
  const toneCls = tone === 'light' ? 'cdm-divider--light' : '';
  if (label) {
    return (
      <div className={`cdm-divider-labelled ${className}`} {...rest}>
        <hr className={`cdm-divider ${toneCls}`} />
        <span className="cdm-divider-label">{label}</span>
        <hr className={`cdm-divider ${toneCls}`} />
      </div>
    );
  }
  return <hr className={`cdm-divider ${toneCls} ${className}`} {...rest} />;
}

export default Divider;
