import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Fetch() {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  async function getFetch(url) {
    try {
      /* let res = await axios.get(url);
      console.log(res);
      setData(res.data.products); */
      const {
        data: { products },
      } = await axios.get(url);
      setData(products);
    } catch (err) {
      return err;
    }
  }
  /* useEffect(() => {
    let url = "https://dummyjson.com/products";
    getFetch(url);
  }, []); */
  /*  useEffect(() => {
    console.log("logging");
  }, [count]);
 */
  return (
    <div>
      {data && data.map((product) => <p>{product.title}</p>)}
      {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
    </div>
  );
}
