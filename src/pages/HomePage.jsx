import { useNavigate } from 'react-router-dom';
import { EditorialFigure } from '../components/commerce/EditorialFigure';
import { ProductCard } from '../components/commerce/ProductCard';
import { Tag } from '../components/core/Tag';
import { Button } from '../components/core/Button';
import { Eyebrow } from '../components/core/Eyebrow';
import { products } from '../data/products';
import editorialSeaGown from '../assets/images/editorial-sea-gown.jpg';
import editorialBeachGroup from '../assets/images/editorial-beach-group.jpg';
import lifestyleGarden from '../assets/images/lifestyle-garden.jpg';
import keyEspresso from '../assets/brand/key-espresso.png';
import './HomePage.css';

export function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bq-hero">
        <EditorialFigure
          image={editorialSeaGown}
          eyebrow="Colección 2026" title="Verano eterno"
          subtitle="Lo suave, lo esencial y lo eterno en lo cotidiano."
          ratio="hero" align="bottom" scrim="bottom" zoom>
          <div style={{ marginTop: 10 }}>
            <Button variant="accent" onClick={() => navigate('/coleccion')}>Descubrir la colección</Button>
          </div>
        </EditorialFigure>
      </div>

      <section className="bq-section bq-wrap">
        <div className="bq-statement">
          <img className="bq-seal" src={keyEspresso} alt="Casa Di Mor" />
          <Eyebrow spaced>Propósito</Eyebrow>
          <p className="q">Que cada prenda sea una inversión, y no un gasto — liberando la frescura y el estilo atemporal de quien la porta.</p>
        </div>
      </section>

      <section className="bq-section bq-wrap" style={{ paddingTop: 0 }}>
        <div className="bq-sec-head">
          <div>
            <div className="bq-script-accent">la cápsula</div>
            <h2>Verano Eterno</h2>
          </div>
          <a className="bq-link" onClick={() => navigate('/coleccion')}>Ver todo</a>
        </div>
        <div className="bq-grid">
          {products.map((p) => (
            <ProductCard key={p.id} image={p.image} name={p.name} price={p.price}
              colors={p.colors.map((c) => c.hex)} onFavorite={() => {}}
              tag={p.id === 'maxi-mare' ? <Tag variant="soft">Nuevo</Tag> : null}
              onClick={() => navigate(`/coleccion/${p.id}`)} style={{ cursor: 'pointer' }} />
          ))}
        </div>
      </section>

      <section className="bq-wrap" style={{ paddingBottom: 'var(--space-9)' }}>
        <div className="bq-split">
          <EditorialFigure image={editorialBeachGroup}
            eyebrow="Editorial" title="La luz que ya existe en ti" ratio="portrait" scrim="full" zoom />
          <EditorialFigure image={lifestyleGarden}
            eyebrow="Atelier" title="Maestría del detalle" ratio="portrait" scrim="full" zoom />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
