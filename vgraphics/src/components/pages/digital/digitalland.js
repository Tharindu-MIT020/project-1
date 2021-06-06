import "./digital.css";
import React, { useEffect, useState } from 'react';
import Product from "./comp/product";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { getProducts as listProducts } from "../../../redux/actions/productAction";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Digital</h2>
      <div className="homescreen__products">
         {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.Productcode}
              description={product.Description}
              price={product.Price}
              imageUrl={product.Imguri}
              productId={product._id}
            />
          ))
        )}
         
        
      </div>
    </div>
  );
};

export default HomeScreen;