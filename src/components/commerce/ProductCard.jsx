import './ProductCard.css';

export function ProductCard({
  image, name, price, tag, colors, tone = 'product',
  href, onFavorite, className = '', ...rest
}) {
  const Tag = href ? 'a' : 'div';
  return (
    <Tag className={`cdm-pcard ${className}`} href={href} {...rest}>
      <div className={`cdm-pcard__media ${tone === 'editorial' ? 'cdm-pcard__media--editorial' : ''}`}>
        {image && <img className="cdm-pcard__img" src={image} alt={name || ''} />}
        {tag}
        {onFavorite && (
          <button type="button" className="cdm-pcard__fav" aria-label="Guardar"
            onClick={(e) => { e.preventDefault(); onFavorite(); }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>
            </svg>
          </button>
        )}
      </div>
      <div className="cdm-pcard__body">
        <div className="cdm-pcard__name">{name}</div>
        <div className="cdm-pcard__row">
          {price != null && <span className="cdm-pcard__price">{price}</span>}
          {colors && colors.length > 0 && (
            <span className="cdm-pcard__swatches">
              {colors.map((c, i) => <span key={i} className="cdm-pcard__dot" style={{ background: c }} />)}
            </span>
          )}
        </div>
      </div>
    </Tag>
  );
}

export default ProductCard;
