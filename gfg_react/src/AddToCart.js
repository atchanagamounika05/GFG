import React, { useState } from "react";

export default function AddToCart() {
  const allBrands = [
    { id: 1, brandName: "adiddas", count: 0 },
    { id: 2, brandName: "adids", count: 0 },
    { id: 3, brandName: "nike", count: 0 },
    { id: 4, brandName: "niky", count: 0 },
    { id: 5, brandName: "rebook", count: 0 },
    { id: 6, brandName: "fila", count: 0 },
  ];

  const [selectedBrands, setSelectedBrands] = useState([]);

  const addhandler = (id) => {
    let exists = selectedBrands.find((item) => id === item.id);
    if (exists) {
      const updatedCart = selectedBrands.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count + 1,
            }
          : item
      );
      console.log("updated", updatedCart);
      setSelectedBrands(updatedCart);
    } else {
      console.log("here");
      let res = allBrands.find((brand) => id === brand.id);
      console.log("res", res);
      res && setSelectedBrands([...selectedBrands, { ...res, count: 1 }]);
    }
  };

  const removeHandler = (id) => {
    let res = selectedBrands.filter((i) => i.id !== id);
    setSelectedBrands(res);
  };

  return (
    <div>
      {allBrands.map((brand) => (
        <p key={brand.id}>
          {brand.brandName}{" "}
          <button onClick={() => addhandler(brand.id)}>Add to cart</button>
        </p>
      ))}
      <hr></hr>
      {console.log("sec", selectedBrands)}
      {selectedBrands &&
        selectedBrands.map((item) => (
          <p key={item.id}>
            {item.brandName} ({item.count}) -{" "}
            <button onClick={() => removeHandler(item.id)}>Remove</button>
          </p>
        ))}
    </div>
  );
}
