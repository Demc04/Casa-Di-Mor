import './Newsletter.css';

export function Newsletter({
  placeholder = 'Tu email', cta = 'Suscribirse', note, tone,
  onSubmit, className = '', ...rest
}) {
  const handle = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(new FormData(e.currentTarget).get('email'));
  };
  return (
    <form className={`cdm-news ${tone === 'light' ? 'cdm-news--light' : ''} ${className}`} onSubmit={handle} {...rest}>
      <div className="cdm-news__row">
        <input className="cdm-news__input" type="email" name="email" placeholder={placeholder} required />
        <button className="cdm-news__btn" type="submit">{cta}</button>
      </div>
      {note && <p className="cdm-news__note">{note}</p>}
    </form>
  );
}

export default Newsletter;
