import React from "react";
function MyProd({ product }) {
  if (!product) {
    return null;
  }
  const truncatedDescription = product.description.slice(0, 100); // قص النص إلى أول 100 حرف
  return (
    <div className="g-col-4 p-2">
      <div className="card" style={{ width: "100%", height: "1000px" }}>
        <img src={product.image} className="card-img-top" alt="product" />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyProd;