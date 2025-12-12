import React, { useState, useReducer } from "react";
import { products } from "./db/data";
import "./Items.css";
import itemsReducer from "./ItemsReducer";
export default function Items() {
  const initialState = {
    amount: "",
    discount: "",
    starRating: "",
  };

  const [{ amount, discount, starRating }, filterDispatch] = useReducer(
    itemsReducer,
    initialState
  );
  const priceHandler = (e) => {
    filterDispatch({ type: "PRICE", payload: e.target.value });
  };
  const discountHandler = (e) => {
    filterDispatch({ type: "DISCOUNT", payload: e.target.value });
  };
  const ratingHandler = (e) => {
    filterDispatch({ type: "RATING", payload: e.target.value });
  };

  const priceFilteredItems =
    amount > 0 ? products.filter(({ price }) => price <= amount) : products;

  const discountFilteredItems =
    discount > 0
      ? priceFilteredItems.filter(
          ({ discountPercentage }) => discountPercentage <= discount
        )
      : priceFilteredItems;

  const ratingFilteredItems =
    starRating > 0
      ? discountFilteredItems.filter(({ rating }) => rating <= starRating)
      : discountFilteredItems;

  console.log(ratingFilteredItems);

  return (
    <>
      <h1>Products</h1>
      <div className="app">
        <span>Filters:</span>
        <input
          className="input"
          onChange={priceHandler}
          placeholder="set price"
        />
        <input
          className="input"
          onChange={discountHandler}
          placeholder="set discount"
        />
        <input
          className="input"
          onChange={ratingHandler}
          placeholder="set rating"
        />
      </div>
      <div className="app">
        {ratingFilteredItems.map((product) => (
          <div key={product.id} className="child">
            <div style={{ fontWeight: "600" }}>
              <p>{product.title}</p>
            </div>
            <div className="child1">
              <p>Price - {product.price}</p>
              <p>Discount - {product.discountPercentage}</p>
              <p>Rating - {product.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* 
step 1 : onChange/onClick event  -> trigger
step 2 : dispatch(type, payload )
step 3 : reducer function -> acc to type.action set the state value and return
step 4 :  capture the value and destructure as state in [state, dispatch]= useReducer(reduce,initialState)
step 5 : apply function on values and render
*/
