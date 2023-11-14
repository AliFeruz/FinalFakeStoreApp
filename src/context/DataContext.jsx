import { createContext, useEffect, useState } from "react";
import React from "react";

export const DataContext = createContext(undefined);

const DataContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    console.log("product in addToCart", product);
    const productsInCart = [];
   
    for (let i = 0; i < cart.length; i++) {
      productsInCart.push(cart[i]);
    }
    productsInCart.push(product)
    setCart(productsInCart);
  }

  
  

  useEffect(() => {
    function fetchData() {
      // Make a GET request to the FakeStoreAPI through the cors-anywhere proxy
      fetch("https://cors-anywhere.herokuapp.com/https://fakestoreapi.com/products/")
        .then((res) => res.json())  // Parse the response as JSON
        .then((json) => setProducts(json));  // Set the products state with the JSON data
    }
  
    // Call the fetchData function when the component mounts (empty dependency array)
    fetchData();
  }, []);
  

  const filteredJeweleryProducts = (arr) => {
    return arr.filter((product) => {
      return product.category === `jewelery`;
    });
  };

  const filteredMensProducts = (arr) => {
    return arr.filter((product) => {
      return product.category === `men's clothing`;
    });
  };

  const filteredwomanProducts = (arr) => {
    return arr.filter((product) => {
    return product.category === `women's clothing`;
    });
  };

  const filteredelectronicProducts = (arr) => {
    return arr.filter((product) => {
      return product.category === `electronics`;
    });
  };

  const electronicProducts = filteredelectronicProducts(products)
  const womanProducts = filteredwomanProducts(products) 
  const manspPoducts = filteredMensProducts(products)
  const jeweleryProducts = filteredJeweleryProducts(products);

  console.log("products in cart =", cart);

  return (
    <DataContext.Provider value={{ products, addToCart, cart, 
    jeweleryProducts, manspPoducts, womanProducts, electronicProducts, setCart }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
