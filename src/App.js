import { Route, Routes } from 'react-router';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import SignIn from './pages/SignIn/SignIn'
import './styles/main.scss'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/register" element={<SignIn/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
