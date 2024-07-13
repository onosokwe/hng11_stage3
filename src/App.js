import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Carts';
import ProductView from './pages/Cart';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductView />} />
            </Routes>
        </Router>
    );
}

export default App;
