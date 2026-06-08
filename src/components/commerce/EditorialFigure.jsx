import './EditorialFigure.css';

const SCRIMS = {
  none: 'none',
  bottom: 'linear-gradient(to top, rgba(34,28,23,.62), rgba(34,28,23,.12) 48%, transparent 72%)',
  full: 'linear-gradient(to top, rgba(34,28,23,.55), rgba(34,28,23,.2))',
  vignette: 'radial-gradient(120% 90% at 50% 60%, transparent 40%, rgba(34,28,23,.5))',
};

export function EditorialFigure({
  image, eyebrow, title, subtitle, children,
  ratio = 'landscape', align = 'bottom', scrim = 'bottom', zoom = false,
  className = '', ...rest
}) {
  return (
    <div className={`cdm-figure cdm-figure--${ratio} cdm-figure--${align} ${zoom ? 'cdm-figure--zoom' : ''} ${className}`} {...rest}>
      {image && <img className="cdm-figure__img" src={image} alt={title || ''} />}
      <div className="cdm-figure__scrim" style={{ background: SCRIMS[scrim] || SCRIMS.bottom }} />
      <div className="cdm-figure__content">
        {eyebrow && <span className="cdm-figure__eyebrow">{eyebrow}</span>}
        {title && <div className="cdm-figure__title">{title}</div>}
        {subtitle && <p className="cdm-figure__sub">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}

export default EditorialFigure;
