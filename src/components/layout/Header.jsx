import { NavLink, useNavigate } from 'react-router-dom';
import { Wordmark } from '../core/Wordmark';
import './Header.css';

const Icon = ({ d, size = 19 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);

export function Header({ cartCount = 0 }) {
  const navigate = useNavigate();
  const links = [
    { to: '/coleccion', label: 'Colección' },
    { to: '/coleccion', label: 'Atelier' },
    { to: '/coleccion', label: 'Historia' },
  ];
  return (
    <header className="bq-header">
      <div className="bq-promo">Envío sin coste · Verano Eterno 2026</div>
      <div className="bq-header__bar">
        <nav className="bq-nav">
          {links.map((l) => (
            <NavLink key={l.label} to={l.to} className={({ isActive }) => (isActive ? 'is-active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="bq-header__wm" onClick={() => navigate('/')}>
          <Wordmark size={26} />
        </div>
        <div className="bq-icons">
          <button className="bq-icon" aria-label="Buscar"><Icon d={<><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></>} /></button>
          <button className="bq-icon" aria-label="Cuenta"><Icon d={<><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/></>} /></button>
          <button className="bq-icon" aria-label="Bolsa" onClick={() => navigate('/coleccion')}>
            <Icon d={<><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></>} />
            {cartCount > 0 && <span className="bq-cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
