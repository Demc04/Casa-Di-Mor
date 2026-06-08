import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../components/commerce/ProductCard';
import { Tag } from '../components/core/Tag';
import { Eyebrow } from '../components/core/Eyebrow';
import { products } from '../data/products';
import './CollectionPage.css';

export function CollectionPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Todo');
  const cats = ['Todo', 'Vestidos', 'Tops'];
  const shown = filter === 'Todo' ? products : products.filter((p) => p.category === filter);

  return (
    <div className="bq-wrap">
      <div className="bq-coll-head">
        <Eyebrow tone="accent" spaced>Verano Eterno</Eyebrow>
        <h1>La colección</h1>
        <p>Una cápsula de piezas atemporales pensadas para vivir en la luz — del primer café al último baño de mar.</p>
        <div className="bq-filters">
          {cats.map((c) => (
            <button key={c} className={`bq-filter ${filter === c ? 'is-active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
          ))}
        </div>
      </div>
      <div className="bq-coll-grid">
        {shown.map((p) => (
          <ProductCard key={p.id} image={p.image} name={p.name} price={p.price}
            colors={p.colors.map((c) => c.hex)} onFavorite={() => {}}
            tag={p.id === 'maxi-mare' ? <Tag variant="soft">Nuevo</Tag> : null}
            onClick={() => navigate(`/coleccion/${p.id}`)} style={{ cursor: 'pointer' }} />
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
