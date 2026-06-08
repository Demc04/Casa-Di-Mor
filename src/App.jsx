import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';
import { ProductPage } from './pages/ProductPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0 }); }, [pathname]);
  return null;
}

function App() {
  const [cart, setCart] = useState(0);
  const addToCart = () => setCart((c) => c + 1);

  return (
    <div>
      <ScrollToTop />
      <Header cartCount={cart} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coleccion" element={<CollectionPage />} />
          <Route path="/coleccion/:productId" element={<ProductPage onAdd={addToCart} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
