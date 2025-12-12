import React, { useState } from "react";

export default function SearchBrands() {
  const allBrands = [
    { id: 1, brandName: "adiddas" },
    { id: 2, brandName: "adids" },
    { id: 3, brandName: "nike" },
    { id: 4, brandName: "niky" },
    { id: 5, brandName: "rebook" },
    { id: 6, brandName: "puma" },
  ];
  const [input, setInput] = useState("");
  const [brands, setBrands] = useState(allBrands);
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSearch = () => {
    console.log(input);
    const res =
      input?.length > 0
        ? allBrands.filter((brand) =>
            brand.brandName.startsWith(input.toLowerCase())
          )
        : allBrands;
    console.log("res", res);
    setBrands(res);
    setInput("");
  };
  return (
    <div>
      <h1>Brands Store</h1>
      <input onChange={handleChange} placeholder="search brand" />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
      {brands.map((brand) => (
        <p key={brand.id}>{brand.brandName}</p>
      ))}
    </div>
  );
}
