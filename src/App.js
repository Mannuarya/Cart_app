import Navbar from "./components/navbar";
import "./App.css";
import ProductList from "./components/ProductList";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Additem from "./components/Additem"; // Import Additem component

function App() {
  const initialProductList = [
    {
      price: 99999,
      name: "iPhone 10s Max",
      quantity: 0,
    },
    {
      price: 40000,
      name: "Redmi 10s Max",
      quantity: 0,
    },
  ];

  const [productList, setProductList] = useState(initialProductList);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    const newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    const newProductList = [...productList];
    let newTotalAmount = totalAmount;

    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList = newProductList.map((product) => {
      return { ...product, quantity: 0 };
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const additem = (name, price) => {
    const newProduct = {
      price: parseInt(price),
      name: name,
      quantity: 0,
    };
    setProductList([...productList, newProduct]);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Additem additem={additem} />{" "}
        {/* Pass the additem function as a prop */}
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
