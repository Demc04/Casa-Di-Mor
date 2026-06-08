import './Field.css';

export function Field({
  label, hint, invalid = false, variant = 'underline',
  as = 'input', id, className = '', ...rest
}) {
  const Control = as;
  const fid = id || (label ? `cdm-${String(label).toLowerCase().replace(/\s+/g, '-')}` : undefined);
  return (
    <label htmlFor={fid} className={`cdm-field ${variant === 'boxed' ? 'cdm-field--boxed' : ''} ${invalid ? 'cdm-field--invalid' : ''} ${className}`}>
      {label && <span className="cdm-field__label">{label}</span>}
      <Control id={fid} className="cdm-field__control" {...rest} />
      {hint && <span className="cdm-field__hint">{hint}</span>}
    </label>
  );
}

export default Field;
