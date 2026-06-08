import { useNavigate } from 'react-router-dom';
import { Newsletter } from '../forms/Newsletter';
import { Divider } from '../core/Divider';
import logoFullIvory from '../../assets/brand/logo-full-ivory.png';
import './Footer.css';

export function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bq-footer">
      <div className="bq-footer__inner">
        <div className="bq-footer__top">
          <div className="bq-footer__brand">
            <img className="bq-footer__logo" src={logoFullIvory} alt="Casa Di Mor — Maison Privée" />
            <p className="bq-footer__tag">Una casa luminosa y sofisticada donde las sensaciones se quedan.</p>
          </div>
          <div className="bq-col">
            <h4>Tienda</h4>
            <a onClick={() => navigate('/coleccion')}>Verano Eterno</a>
            <a onClick={() => navigate('/coleccion')}>Vestidos</a>
            <a onClick={() => navigate('/coleccion')}>Tops</a>
            <a onClick={() => navigate('/coleccion')}>Novedades</a>
          </div>
          <div className="bq-col">
            <h4>Casa</h4>
            <a>Historia</a>
            <a>Atelier</a>
            <a>Sostenibilidad</a>
            <a>Contacto</a>
          </div>
          <div className="bq-col">
            <div className="bq-news-head">Únete a la casa</div>
            <Newsletter tone="light" cta="Suscribirse"
              note="Acceso anticipado a cada colección." onSubmit={() => {}} />
          </div>
        </div>
        <div style={{ margin: '48px 0 0' }}><Divider tone="light" /></div>
        <div className="bq-footer__bottom">
          <span>© 2026 Casa Di Mor</span>
          <span>Hecho con luz · Verano eterno</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
