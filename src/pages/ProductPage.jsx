import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/core/Button';
import { Eyebrow } from '../components/core/Eyebrow';
import { ProductCard } from '../components/commerce/ProductCard';
import { products } from '../data/products';
import './ProductPage.css';

export function ProductPage({ onAdd }) {
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const [color, setColor] = useState(0);
  const [size, setSize] = useState(null);
  const [toast, setToast] = useState(false);

  if (!product) return null;
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const add = () => {
    onAdd(product);
    setToast(true);
    setTimeout(() => setToast(false), 1800);
  };

  return (
    <div>
      <div className="bq-pdp">
        <button className="bq-pdp__back" onClick={() => navigate('/coleccion')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m15 18-6-6 6-6"/></svg>
          La colección
        </button>
        <div className="bq-pdp__grid">
          <div className="bq-pdp__media"><img src={product.image} alt={product.name} /></div>
          <div className="bq-pdp__info">
            <Eyebrow tone="accent">{product.category}</Eyebrow>
            <h1 className="bq-pdp__name">{product.name}</h1>
            <div className="bq-pdp__price">{product.price}</div>
            <p className="bq-pdp__note">{product.note}</p>

            <div className="bq-opt-lab">Color — {product.colors[color].name}</div>
            <div className="bq-swatches">
              {product.colors.map((c, i) => (
                <button key={i} className={`bq-swatch ${i === color ? 'is-active' : ''}`}
                  style={{ background: c.hex }} aria-label={c.name} onClick={() => setColor(i)} />
              ))}
            </div>

            <div className="bq-opt-lab">Talla</div>
            <div className="bq-sizes">
              {product.sizes.map((s) => (
                <button key={s} className={`bq-size ${size === s ? 'is-active' : ''}`} onClick={() => setSize(s)}>{s}</button>
              ))}
            </div>

            <div style={{ marginTop: 34 }}>
              <Button variant="primary" block onClick={add}>{size ? 'Añadir a la bolsa' : 'Selecciona una talla'}</Button>
            </div>

            <ul className="bq-detail-list">
              {product.detail.map((d, i) => (
                <li key={i}>{d}<span>Detalle</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bq-related">
        <h3>Completa el look</h3>
        <div className="bq-related-grid">
          {related.map((p) => (
            <ProductCard key={p.id} image={p.image} name={p.name} price={p.price}
              colors={p.colors.map((c) => c.hex)} onClick={() => navigate(`/coleccion/${p.id}`)} style={{ cursor: 'pointer' }} />
          ))}
        </div>
      </div>

      {toast && <div className="bq-toast">Añadido a la bolsa</div>}
    </div>
  );
}

export default ProductPage;
