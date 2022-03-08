import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Product from './pages/Product';
import './styles/main.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/product" element={<Product/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
