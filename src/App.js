import { Route, Routes } from 'react-router';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import SignIn from './pages/SignIn/SignIn'
import './styles/main.scss'
import { CartProvider } from './misc/custom-hooks';
import Cart from './pages/Cart/Cart';
import { useEffect, useRef, useState } from 'react';

function App() {
  const headerRef = useRef()
  const footerRef = useRef()
  const [occupiedHeight, setOccupiedHeight] = useState()

  useEffect(() => {
      if (headerRef.current && footerRef.current) {
        const totalHeight = headerRef.current.scrollHeight + footerRef.current.scrollHeight
        setOccupiedHeight(totalHeight)
      }
  }, [headerRef, footerRef])

  return (
    <CartProvider>
      <div className="app">
        <header ref={headerRef}>
          <Header occupiedHeight={occupiedHeight}/>
        </header>
        <Routes>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/register" element={<SignIn/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:id" element={<Products/>}/>
          <Route path="/cart" element={<Cart occupiedHeight={occupiedHeight}/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <footer ref={footerRef}>
          <Footer/>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;
