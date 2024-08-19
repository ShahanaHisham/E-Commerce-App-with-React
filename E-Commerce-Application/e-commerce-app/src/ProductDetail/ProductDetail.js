
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail mt-5 pt-5 text-center">
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{ height: "300px", width: "300px" }}
      />
      <p className="pt-3 fw-bold">Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
      <button className="btn btn-outline-danger mb-4">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
