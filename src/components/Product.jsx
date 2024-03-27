import React, { useEffect, useState } from "react";
import { add } from "../reduex/Cartslice";
import { useDispatch } from "react-redux";

const Product = () => {
  const [product, setProduct] = useState([]);
  const dispatch=useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log("Product data could not be fetched.");
      }
    };
    fetchProduct();
  }, []);

  const handelClick = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="grid grid-cols-5 gap-4 justify-center mx-72">
      {product ? (
        product.map((product) => (
          <div key={product.id} className="bg-gray-100 p-4 text-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-48 mx-auto"
            />
            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
            <h2 className="text-xl font-bold text-blue-500">
              ${product.price}
            </h2>
            <button
              className="bg-blue-600 text-white w-[150px] h-9 place-content-center justify-center rounded-xl"
              onClick={() => handelClick(product)}
            >
              ADD CART
            </button>
          </div>
        ))
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default Product;
