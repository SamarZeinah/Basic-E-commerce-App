import logo from "./logo.svg";
// import './App.css';
import Navbar from "./components/navbar";
import Slider from "./components/slider";
import Productlist from "./components/productlist";
import Product from "./components/product";

import { Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
      <Route path="/" element={
        <>   <Slider />
            <Productlist />
        </>
        }>
        </Route>
        <Route path="/about" element={<>About</>}></Route>
        <Route path="product/productId" element={<>ProductDetails</>}></Route>

      </Routes>
      
      <Product />
      <About/>
    </div>
  );
}

export default App;
