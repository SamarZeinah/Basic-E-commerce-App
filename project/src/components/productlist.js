import React, { useEffect, useState } from "react";
import MyProd from "./product";

function Productlist() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h2 className="text-center pt-5 fs-1 fw-bold">Our Products</h2>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <MyProd product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Productlist;
